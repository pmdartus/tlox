import Runner from './runner';
import Token, { TokenType } from './token';
import {
    ExprVisitor,
    Literal,
    Grouping,
    Expr,
    Unary,
    Binary,
    Variable,
    Assign,
    Logical,
    Call,
} from './ast/expr';
import {
    StmtVisitor,
    Expression,
    Print,
    Stmt,
    Var,
    Block,
    If,
    While,
    Function,
    Return,
} from './ast/stmt';
import Environment from './environment';
import { LoxCallable, LoxFunction } from './callable';

export class RuntimeException extends Error {
    token: Token;
    constructor(token: Token, message: string) {
        super(message);
        this.token = token;
    }
}

class BreakException extends Error {}

export class ReturnException extends Error {
    value: any
    constructor(value: any) {
        super();
        this.value = value;
    }
}

export default class Interpreter
    implements ExprVisitor<any>, StmtVisitor<void> {
    runner: Runner;

    readonly globals = new Environment();
    private evironment = this.globals;

    constructor(runner: Runner) {
        this.runner = runner;

        this.globals.define(
            'clock',
            new class Clock extends LoxCallable {
                arity = 0;
                call() {
                    return Date.now();
                }
            }(),
        );
    }

    interpret(statements: Stmt[]) {
        try {
            for (let statement of statements) {
                this.execute(statement);
            }
        } catch (error) {
            if (error instanceof RuntimeException) {
                this.runner.runtimeError(error);
            }
        }
    }

    private execute(statement: Stmt) {
        statement.accept(this);
    }

    visitFunctionStmt(stmt: Function) {
        const fn = new LoxFunction(stmt, this.evironment);
        this.evironment.define(stmt.name.lexeme, fn);
    }

    visitReturnStmt(stmt: Return) {
        let value;
        if (stmt.value !== null) {
            value = this.evaluate(stmt.value);
        }

        throw new ReturnException(value);
    }

    visitVarStmt(stmt: Var) {
        let value: any = null;
        if (stmt.initializer != null) {
            value = this.evaluate(stmt.initializer);
        }

        this.evironment.define(stmt.name.lexeme, value);
    }

    visitVariableExpr(expr: Variable) {
        return this.evironment.get(expr.name);
    }

    visitExpressionStmt(stmt: Expression) {
        this.evaluate(stmt.expr);
    }

    visitPrintStmt(stmt: Print) {
        const value = this.evaluate(stmt.expr);
        console.log(value);
    }

    visitBlockStmt(stmt: Block) {
        this.executeBlock(stmt, new Environment(this.evironment));
    }

    visitIfStmt(stmt: If) {
        if (this.isTruthy(this.evaluate(stmt.condition))) {
            this.execute(stmt.thenBranch);
        } else if (stmt.elseBranch) {
            this.execute(stmt.elseBranch);
        }
    }

    visitWhileStmt(stmt: While) {
        try {
            while (this.isTruthy(this.evaluate(stmt.condition))) {
                this.execute(stmt.body);
            }
        } catch (error) {
            if (error instanceof BreakException) {
                return;
            }
            throw error;
        }
    }

    visitBreakStmt() {
        throw new BreakException();
    }

    visitLogicalExpr(expr: Logical) {
        const left = this.evaluate(expr.left);

        if (expr.operator.type === TokenType.OR) {
            if (this.isTruthy(left)) {
                return left;
            }
        } else {
            if (!this.isTruthy(left)) {
                return left;
            }
        }

        return this.evaluate(expr.right);
    }

    visitAssignExpr(expr: Assign): any {
        const value = this.evaluate(expr.value);

        this.evironment.assign(expr.name, value);
        return value;
    }

    visitLiteralExpr(expr: Literal): any {
        return expr.value;
    }

    visitGroupingExpr(expr: Grouping): any {
        return this.evaluate(expr.expr);
    }

    visitUnaryExpr(expr: Unary): any {
        const right = this.evaluate(expr.right);

        switch (expr.operation.type) {
            case TokenType.MINUS:
                return -right;
            case TokenType.BANG:
                return !this.isTruthy(right);
        }

        return null;
    }

    visitCallExpr(expr: Call): any {
        const fn = this.evaluate(expr.callee) as LoxCallable;

        if (!(fn instanceof LoxCallable)) {
            throw new RuntimeException(
                expr.paren,
                'Can only call function and class methods.',
            );
        }

        const args = expr.args.map(arg => this.evaluate(arg));

        if (args.length !== fn.arity) {
            throw new RuntimeException(
                expr.paren,
                `Expected ${fn.arity} arguments but got ${args.length}.`,
            );
        }

        return fn.call(this, args);
    }

    visitBinaryExpr(expr: Binary): any {
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);

        switch (expr.operator.type) {
            case TokenType.PLUS:
                if (typeof left === 'string' || typeof right === 'string') {
                    return String(left) + String(right);
                } else if (
                    typeof left === 'number' &&
                    typeof right === 'number'
                ) {
                    return left + right;
                }

                throw new RuntimeException(
                    expr.operator,
                    'Operands must be 2 strings or numbers',
                );

            case TokenType.MINUS:
                this.checkNumberOperands(expr.operator, left, right);
                return left - right;

            case TokenType.SLASH:
                this.checkNumberOperands(expr.operator, left, right);
                return left / right;

            case TokenType.STAR:
                this.checkNumberOperands(expr.operator, left, right);
                return left * right;

            case TokenType.GREATER:
                this.checkNumberOperands(expr.operator, left, right);
                return left > right;

            case TokenType.GREATE_EQUAL:
                this.checkNumberOperands(expr.operator, left, right);
                return left >= right;

            case TokenType.LESS:
                this.checkNumberOperands(expr.operator, left, right);
                return left < right;

            case TokenType.LESS_EQUAL:
                this.checkNumberOperands(expr.operator, left, right);
                return left <= right;

            case TokenType.BANG_EQUAL:
                return !this.isEqual(left, right);

            case TokenType.EQUAL_EQUAL:
                return this.isEqual(left, right);
        }

        return null;
    }

    executeBlock(stmt: Block, environment: Environment) {
        const previousEnv = this.evironment;

        try {
            this.evironment = environment;

            for (let statement of stmt.statements) {
                this.execute(statement);
            }
        } finally {
            this.evironment = previousEnv;
        }
    }

    evaluate(expr: Expr): any {
        return expr.accept(this);
    }

    private isTruthy(value: any): boolean {
        return typeof value === 'boolean'
            ? value
            : value == null ? false : true;
    }

    private isEqual(a: any, b: any) {
        return typeof a === typeof b ? a == b : false;
    }

    private checkNumberOperand(operator: Token, operand: any) {
        if (typeof operand !== 'number') {
            throw new RuntimeException(operator, 'Operand must be a number');
        }
    }

    private checkNumberOperands(operator: Token, left: any, right: any) {
        if (typeof left !== 'number' && typeof right !== 'number') {
            throw new RuntimeException(operator, 'Operands must be 2 numbers');
        }
    }
}
