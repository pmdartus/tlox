import Runner from './runner';
import Token, { TokenType } from './token';

import {
    Stmt,
    Print,
    Expression,
    Var,
    Block,
    If,
    While,
    Break,
    Function,
    Return,
} from './ast/stmt';
import {
    Expr,
    Binary,
    Unary,
    Literal,
    Grouping,
    Variable,
    Assign,
    Logical,
    Call,
} from './ast/expr';
import { equal } from 'assert';

class ParserError extends Error {}

export default class Parser {
    runner: Runner;

    tokens: Token[];
    current = 0;
    loopDepth = 0;

    constructor(tokens: Token[], runner: Runner) {
        this.tokens = tokens;
        this.runner = runner;
    }

    parse(): Stmt[] {
        const statements = [];

        while (!this.isAtEnd()) {
            const statement = this.declaration();
            if (statement) {
                statements.push(statement);
            }
        }

        return statements;
    }

    // declaration → funDecl | varDecl | statement ;
    private declaration() {
        try {
            if (this.match(TokenType.FUN)) {
                return this.function('function');
            } else if (this.match(TokenType.VAR)) {
                return this.varDeclaration();
            } else {
                return this.statement();
            }
        } catch (error) {
            if (error instanceof ParserError) {
                this.synchronize();
            }
        }
    }

    // funDecl -> "fun" function
    // function -> IDENTIFIER "(" parameters? ")" block
    private function(kind: string) {
        const name = this.consume(
            TokenType.IDENTIFIER,
            `Expected ${kind} name.`,
        );

        this.consume(TokenType.LEFT_PAREN, `Expected "(" after ${kind} name.`);

        const parameters = [];
        if (!this.check(TokenType.RIGHT_PAREN)) {
            do {
                if (parameters.length >= 8) {
                    this.error(
                        this.peek(),
                        'Cannot have more than 8 parameters',
                    );
                }

                parameters.push(
                    this.consume(
                        TokenType.IDENTIFIER,
                        'Expected parameter name.',
                    ),
                );
            } while (this.match(TokenType.COMMA));
        }

        this.consume(TokenType.RIGHT_PAREN, 'Expected ")" after parameters.');
        this.consume(TokenType.LEFT_BRACE, `Expected "{" before ${kind} body.`);

        const body = this.block();

        return new Function(name, parameters, body);
    }

    // varDecl -> IDENTIFIER ("=" expression)? ";" ;
    private varDeclaration() {
        const name = this.consume(
            TokenType.IDENTIFIER,
            'Expected a variable name',
        );

        let initializer = this.match(TokenType.EQUAL)
            ? this.expression()
            : new Literal(null);

        this.consume(TokenType.SEMI, 'Expected ";" after variable declaration');
        return new Var(name, initializer);
    }

    //statement → exprStmt | printStmt | block | ifStmt | whileStmt  | forStmt | breakStmt | returnStmt ;
    private statement(): Stmt {
        if (this.match(TokenType.PRINT)) {
            return this.printStatement();
        } else if (this.match(TokenType.LEFT_BRACE)) {
            return new Block(this.block());
        } else if (this.match(TokenType.IF)) {
            return this.ifStatement();
        } else if (this.match(TokenType.WHILE)) {
            return this.whileStatement();
        } else if (this.match(TokenType.FOR)) {
            return this.forStatement();
        } else if (this.match(TokenType.BREAK)) {
            return this.breakStatement();
        } else if (this.match(TokenType.RETURN)) {
            return this.returnStatement();
        } else {
            return this.expressionStatement();
        }
    }

    // ifStmt → "if" "(" expression ")" statement ( "else" statement )? ;
    private ifStatement() {
        this.consume(TokenType.LEFT_PAREN, 'Expected "(" after "if".');
        const condition = this.expression();
        this.consume(TokenType.RIGHT_PAREN, 'Expected ")" after if condition.');

        const thenBranch = this.statement();
        let elseBranch;
        if (this.match(TokenType.ELSE)) {
            elseBranch = this.statement();
        }

        return new If(condition, thenBranch, elseBranch);
    }

    // whileStmt -> "while" "(" condition ")" statement ;
    private whileStatement() {
        this.consume(TokenType.LEFT_PAREN, 'Expected "(" after "while".');
        const condition = this.expression();
        this.consume(
            TokenType.RIGHT_PAREN,
            'Expected ")" after while condition.',
        );

        try {
            this.loopDepth++;
            const body = this.statement();

            return new While(condition, body);
        } finally {
            this.loopDepth--;
        }
    }

    // forStmt -> "for" "(" (varDecl | exprStmt | ";") expr? ";" expr?) statement ;
    // For loop is implemented by desugaring it to a while loop
    private forStatement() {
        this.consume(TokenType.LEFT_PAREN, 'Expeceted "(" after "for".');

        // Get initializer
        let initializer;
        if (this.match(TokenType.SEMI)) {
            initializer = undefined;
        } else if (this.match(TokenType.VAR)) {
            initializer = this.varDeclaration();
        } else {
            initializer = this.expressionStatement();
        }

        // Get condition
        let condition;
        if (!this.check(TokenType.SEMI)) {
            condition = this.expression();
        }
        this.consume(TokenType.SEMI, 'Expected ";" after for condition.');

        // Get increment
        let increment;
        if (!this.check(TokenType.RIGHT_PAREN)) {
            increment = this.expression();
        }
        this.consume(TokenType.RIGHT_PAREN, 'Expected ")" after for clauses.');

        try {
            this.loopDepth++;

            // Get body
            let body = this.statement();

            // If the increment is defined, add it at the end of the body block
            if (increment) {
                body = new Block([body, new Expression(increment)]);
            }

            // If no condition is defined, then set it to true
            if (!condition) {
                condition = new Literal(true);
            }
            body = new While(condition, body);

            // If an intializer is defined the add it before the while loop execution
            if (initializer) {
                body = new Block([initializer, body]);
            }

            return body;
        } finally {
            this.loopDepth--;
        }
    }

    // breakStmt -> "break" ";" ;
    private breakStatement() {
        if (this.loopDepth <= 0) {
            this.error(
                this.previous(),
                'Must be inside a loop to use "break".',
            );
        }

        this.consume(TokenType.SEMI, 'Expected ";" after "break".');
        return new Break();
    }

    private returnStatement() {
        const keywrod = this.previous();
        
        let value: Expr = new Literal(null);
        if (!this.check(TokenType.SEMI)) {
            value = this.expression();
        }

        this.consume(TokenType.SEMI, 'Expected ";" after return value.');

        return new Return(keywrod, value);
    }

    // printStmt -> "print" expr ";" ;
    private printStatement() {
        const expr = this.expression();
        this.consume(
            TokenType.SEMI,
            'Expected ";" at the end of the expression.',
        );
        return new Print(expr);
    }

    // exprStmt -> expression ";"
    private expressionStatement() {
        const expr = this.expression();
        this.consume(
            TokenType.SEMI,
            'Expected ";" at the end of the expression.',
        );
        return new Expression(expr);
    }

    // block -> (declaration)* "}" ;
    private block(): Stmt[] {
        const statements = [];

        while (!this.check(TokenType.RIGHT_BRACE) && !this.isAtEnd()) {
            const statement = this.declaration();

            if (statement) {
                statements.push(statement);
            }
        }

        this.consume(TokenType.RIGHT_BRACE, 'Expected "}" after block.');
        return statements;
    }

    // expression → assignment
    private expression(): Expr {
        return this.assignment();
    }

    // assignment -> identifier "=" assignment | logic_or ;
    private assignment(): Expr {
        const expr = this.or();

        if (this.match(TokenType.EQUAL)) {
            const equals = this.previous();
            const value = this.assignment();

            if (expr instanceof Variable) {
                const name = expr.name;
                return new Assign(name, value);
            }

            this.error(equals, 'Invalid assignment target.');
        }

        return expr;
    }

    // logic_or -> logic_and ( "||" logic_and )*
    private or() {
        let expr = this.and();

        while (this.match(TokenType.OR) && !this.isAtEnd()) {
            const operator = this.previous();
            const right = this.and();
            expr = new Logical(expr, operator, right);
        }

        return expr;
    }

    // logic_and -> equality ( "&&" equality )*
    private and() {
        let expr = this.equality();

        while (this.match(TokenType.AND) && !this.isAtEnd()) {
            const operator = this.previous();
            const right = this.and();
            expr = new Logical(expr, operator, right);
        }

        return expr;
    }

    // coma -> equality ( "," equality )* ;
    private coma(): Expr {
        let expr = this.equality();

        while (this.match(TokenType.COMMA)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    // equality → comparison ( ( "!=" | "==" ) comparison )* ;
    private equality(): Expr {
        let expr = this.comparison();

        while (this.match(TokenType.BANG_EQUAL, TokenType.EQUAL_EQUAL)) {
            const operator = this.previous();
            const right = this.comparison();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    // comparison → addition ( ( ">" | ">=" | "<" | "<=" ) addition )* ;
    private comparison(): Expr {
        let expr = this.addition();

        while (
            this.match(
                TokenType.GREATER,
                TokenType.GREATE_EQUAL,
                TokenType.LESS,
                TokenType.LESS_EQUAL,
            )
        ) {
            const operator = this.previous();
            const right = this.addition();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    // addition → multiplication ( ( "-" | "+" ) multiplication )* ;
    private addition(): Expr {
        let expr = this.multiplication();

        while (this.match(TokenType.PLUS, TokenType.MINUS)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    // multiplication → unary ( ( "/" | "*" ) unary )* ;
    private multiplication(): Expr {
        let expr = this.unary();

        while (this.match(TokenType.SLASH, TokenType.STAR)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new Binary(expr, operator, right);
        }

        return expr;
    }

    // unary → ( "!" | "-" ) unary
    //         | call ;
    private unary(): Expr {
        if (this.match(TokenType.BANG, TokenType.MINUS)) {
            const operator = this.previous();
            const right = this.unary();
            return new Unary(operator, right);
        } else {
            return this.call();
        }
    }

    // call -> primary ( "(" arguments? ")" )*
    private call() {
        let expr = this.primary();

        while (true) {
            if (this.match(TokenType.LEFT_PAREN)) {
                expr = this.finishCall(expr);
            } else {
                break;
            }
        }

        return expr;
    }

    // arguments -> expr ("," expr)*
    private finishCall(callee: Expr) {
        const args = [];
        if (!this.check(TokenType.RIGHT_PAREN)) {
            do {
                if (args.length > 8) {
                    this.error(
                        this.peek(),
                        'Cannot have more than 8 arguments',
                    );
                }

                args.push(this.expression());
            } while (this.match(TokenType.COMMA));
        }

        const paren = this.consume(
            TokenType.RIGHT_PAREN,
            'Expected ")" after arguments.',
        );

        return new Call(callee, paren, args);
    }

    // primary → NUMBER | STRING | "false" | "true" | "nil" | "(" expression ")" | INDENTIFIER ;
    private primary(): Expr {
        if (this.match(TokenType.FALSE)) {
            return new Literal(false);
        } else if (this.match(TokenType.TRUE)) {
            return new Literal(true);
        } else if (this.match(TokenType.NIL)) {
            return new Literal(null);
        }

        if (this.match(TokenType.NUMBER, TokenType.STRING)) {
            return new Literal(this.previous().literal);
        }

        if (this.match(TokenType.LEFT_PAREN)) {
            let expr = this.expression();

            this.consume(
                TokenType.RIGHT_PAREN,
                `Expected ')' after expression.`,
            );

            return new Grouping(expr);
        }

        if (this.match(TokenType.IDENTIFIER)) {
            return new Variable(this.previous());
        }

        throw this.error(this.peek(), 'Expected expression');
    }

    private match(...types: TokenType[]) {
        for (let type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }

        return false;
    }

    private check(type: TokenType) {
        return this.isAtEnd() ? false : this.peek().type === type;
    }

    private advance() {
        if (!this.isAtEnd()) {
            this.current++;
        }

        return this.previous();
    }

    private isAtEnd() {
        return this.peek().type === TokenType.EOF;
    }

    private peek() {
        return this.tokens[this.current];
    }

    private previous() {
        return this.tokens[this.current - 1];
    }

    private consume(type: TokenType, message: string) {
        if (this.check(type)) {
            return this.advance();
        } else {
            throw this.error(this.peek(), message);
        }
    }

    private synchronize() {
        this.advance();

        while (!this.isAtEnd()) {
            switch (this.peek().type) {
                case TokenType.CLASS:
                case TokenType.FUN:
                case TokenType.VAR:
                case TokenType.FOR:
                case TokenType.IF:
                case TokenType.WHILE:
                case TokenType.PRINT:
                case TokenType.RETURN:
                    return;
            }

            this.advance();
        }
    }

    private error(token: Token, message: string) {
        this.runner.errorToken(token, message);
        return new ParserError();
    }
}
