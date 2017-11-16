import Runner from './runner';
import Token, { TokenType } from './token';

import { Stmt, Print, Expression } from './ast/stmt';
import { Expr, Binary, Unary, Literal, Grouping } from './ast/expr';

class ParserError extends Error {}

export default class Parser {
    runner: Runner;

    tokens: Token[];
    current = 0;

    constructor(tokens: Token[], runner: Runner) {
        this.tokens = tokens;
        this.runner = runner;
    }

    parse(): Stmt[] {
        const statements = [];
        
        while(!this.isAtEnd()) {
            statements.push(this.statement());
        }

        return statements;
    }

    //statement → exprStmt | printStmt ;
    private statement() {
        return this.match(TokenType.PRINT) ?
            this.printStatement() :
            this.expressionStatement();
    }

    private printStatement() {
        const expr = this.expression();
        this.consume(TokenType.COMMA, 'Expected ";" at the end of the expression.');
        return new Print(expr);
    }

    private expressionStatement() {
        const expr = this.expression();
        this.consume(TokenType.COMMA, 'Expected ";" at the end of the expression.');
        return new Expression(expr);
    }

    // expression → coma ;
    private expression(): Expr {
        return this.equality();
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
    //         | primary ;
    private unary(): Expr {
        if (this.match(TokenType.BANG, TokenType.MINUS)) {
            const operator = this.previous();
            const right = this.unary();
            return new Unary(operator, right);
        } else {
            return this.primary();
        }
    }

    // primary → NUMBER | STRING | "false" | "true" | "nil" | "(" expression ")" ;
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
