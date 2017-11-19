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
} from './ast/expr';
import { StmtVisitor, Expression, Print, Stmt, Var } from './ast/stmt';
import Environment from './environment';

export class RuntimeException extends Error {
    token: Token;
    constructor(token: Token, message: string) {
        super(message);
        this.token = token;
    }
}

export default class Interpreter implements ExprVisitor<any>, StmtVisitor<void> {
    runner: Runner;
    evironment = new Environment();

    constructor(runner: Runner) {
        this.runner = runner;
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

    private evaluate(expr: Expr): any {
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
