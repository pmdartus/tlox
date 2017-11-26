import Runner from './runner';
import Token, { TokenType } from './token';
import * as Expr from './ast/expr';
import * as Stmt from './ast/stmt';
import Environment from './environment';
import { LoxCallable, LoxFunction } from './callable';
import { LoxClass, LoxInstance } from './class';

export class RuntimeException extends Error {
    token: Token;
    constructor(token: Token, message: string) {
        super(message);
        this.token = token;
    }
}

class BreakException extends Error {}

export class ReturnException extends Error {
    value: any;
    constructor(value: any) {
        super();
        this.value = value;
    }
}

export default class Interpreter
    implements Expr.ExprVisitor<any>, Stmt.StmtVisitor<void> {
    runner: Runner;

    readonly locals: Map<Expr.Expr, number> = new Map();
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

    interpret(statements: Stmt.Stmt[]) {
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

    private execute(statement: Stmt.Stmt) {
        statement.accept(this);
    }

    visitFunctionStmt(stmt: Stmt.Function) {
        const fn = new LoxFunction(stmt.name.lexeme, stmt.fn, this.evironment);
        this.evironment.define(stmt.name.lexeme, fn);
    }

    visitFunctionExpr(expr: Expr.Function) {
        return new LoxFunction(undefined, expr, this.evironment);
    }

    visitReturnStmt(stmt: Stmt.Return) {
        let value;
        if (stmt.value !== null) {
            value = this.evaluate(stmt.value);
        }

        throw new ReturnException(value);
    }

    visitVarStmt(stmt: Stmt.Var) {
        let value: any = null;
        if (stmt.initializer != null) {
            value = this.evaluate(stmt.initializer);
        }

        this.evironment.define(stmt.name.lexeme, value);
    }

    visitVariableExpr(expr: Expr.Variable) {
        return this.lookupVariable(expr.name, expr);
    }

    visitClassStmt(stmt: Stmt.Class) {
        this.evironment.define(stmt.name.lexeme, null);

        const methods: { [name: string]: LoxFunction } = {};
        for (let method of stmt.methods) {
            methods[method.name.lexeme] = new LoxFunction(
                method.name.lexeme,
                method.fn,
                this.evironment,
            );
        }

        const klass = new LoxClass(stmt.name.lexeme, methods);
        this.evironment.assign(stmt.name, klass);
    }

    visitThisExpr(expr: Expr.This) {
        return this.lookupVariable(expr.keyword, expr);
    }

    visitExpressionStmt(stmt: Stmt.Expression) {
        this.evaluate(stmt.expr);
    }

    visitPrintStmt(stmt: Stmt.Print) {
        const value = this.evaluate(stmt.expr);
        this.runner.logger.log(value.toString());
    }

    visitBlockStmt(stmt: Stmt.Block) {
        this.executeBlock(stmt, new Environment(this.evironment));
    }

    visitIfStmt(stmt: Stmt.If) {
        if (this.isTruthy(this.evaluate(stmt.condition))) {
            this.execute(stmt.thenBranch);
        } else if (stmt.elseBranch) {
            this.execute(stmt.elseBranch);
        }
    }

    visitWhileStmt(stmt: Stmt.While) {
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

    visitLogicalExpr(expr: Expr.Logical) {
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

    visitAssignExpr(expr: Expr.Assign): any {
        const value = this.evaluate(expr.value);

        const distance = this.locals.get(expr);
        if (distance !== undefined) {
            this.evironment.assignAt(distance, expr.name, value);
        } else {
            this.globals.assign(expr.name, value);
        }

        return value;
    }

    visitLiteralExpr(expr: Expr.Literal): any {
        return expr.value;
    }

    visitGroupingExpr(expr: Expr.Grouping): any {
        return this.evaluate(expr.expr);
    }

    visitUnaryExpr(expr: Expr.Unary): any {
        const right = this.evaluate(expr.right);

        switch (expr.operation.type) {
            case TokenType.MINUS:
                return -right;
            case TokenType.BANG:
                return !this.isTruthy(right);
        }

        return null;
    }

    visitCallExpr(expr: Expr.Call): any {
        const fn = this.evaluate(expr.callee);

        if (!(fn instanceof LoxCallable) && !(fn instanceof LoxClass)) {
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

    visitGetExpr(expr: Expr.Get): any {
        const object = this.evaluate(expr.object);

        if (object instanceof LoxInstance) {
            return object.get(expr.name);
        }

        throw new RuntimeException(
            expr.name,
            'Only instances have properties.',
        );
    }

    visitSetExpr(expr: Expr.Set): any {
        const object = this.evaluate(expr.object);

        if (!(object instanceof LoxInstance)) {
            throw new RuntimeException(
                expr.name,
                'Only instances have fields.',
            );
        }

        const value = this.evaluate(expr.value);
        object.set(expr.name, value);
        return value;
    }

    visitBinaryExpr(expr: Expr.Binary): any {
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

    executeBlock(stmt: Stmt.Block, environment: Environment) {
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

    evaluate(expr: Expr.Expr): any {
        return expr.accept(this);
    }

    resolve(expr: Expr.Expr, depth: number) {
        this.locals.set(expr, depth);
    }

    private lookupVariable(name: Token, expr: Expr.Expr) {
        const distance = this.locals.get(expr);

        if (distance !== undefined) {
            return this.evironment.getAt(distance, name.lexeme);
        } else {
            return this.globals.get(name);
        }
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
