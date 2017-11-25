import * as Expr from './ast/expr';
import * as Stmt from './ast/stmt';
import Interpreter from './interpreter';
import Token from './token';
import Runner from './runner';

enum VariableState {
    DECLARED,
    DEFINED,
    READ,
}

interface ScopeVariable {
    name: Token;
    state: VariableState;
}

type Scope = Map<string, ScopeVariable>;

enum FunctionType {
    NONE,
    FUNCTION,
}

export default class Resolver
    implements Expr.ExprVisitor<void>, Stmt.StmtVisitor<void> {
    runner: Runner;
    interpreter: Interpreter;
    scopes: Scope[] = [];
    functionType = FunctionType.NONE;

    constructor(interpreter: Interpreter, runner: Runner) {
        this.runner = runner;
        this.interpreter = interpreter;
    }

    visitBlockStmt(stmt: Stmt.Block) {
        this.beginScope();
        this.resolve(stmt.statements);
        const scope = this.endScope();

        for (let variable of scope!.values()) {
            if (variable.state < VariableState.READ) {
                this.runner.errorToken(variable.name, 'Unused variable.');
            }
        }
    }

    visitFunctionStmt(stmt: Stmt.Function) {
        this.declare(stmt.name);
        this.define(stmt.name);

        this.resolveFunction(stmt.fn, FunctionType.FUNCTION);
    }

    visitFunctionExpr(expr: Expr.Function) {
        this.resolveFunction(expr, FunctionType.FUNCTION);
    }

    visitVarStmt(stmt: Stmt.Var) {
        this.declare(stmt.name);

        if (stmt.initializer) {
            this.resolveExpr(stmt.initializer);
        }

        this.define(stmt.name);
    }

    visitVariableExpr(expr: Expr.Variable) {
        if (this.scopes.length) {
            const variable = this.currentScope().get(expr.name.lexeme);

            if (variable && variable.state === VariableState.DECLARED) {
                this.runner.errorToken(
                    expr.name,
                    'Cannot read variable before own init.',
                );
            }
        }

        this.resolveLocal(expr, expr.name, true);
    }

    visitAssignExpr(expr: Expr.Assign) {
        this.resolveExpr(expr.value);
        this.resolveLocal(expr, expr.name, false);
    }

    visitGetExpr(expr: Expr.Get) {
        this.resolveExpr(expr.object);
    }

    visitSetExpr(expr: Expr.Set) {
        this.resolveExpr(expr.value);
        this.resolveExpr(expr.object);
    }

    visitClassStmt(stmt: Stmt.Class) {
        this.declare(stmt.name);
        this.define(stmt.name);
    }

    visitExpressionStmt(stmt: Stmt.Expression) {
        this.resolveExpr(stmt.expr);
    }

    visitIfStmt(stmt: Stmt.If) {
        this.resolveExpr(stmt.condition);
        this.resolveStmt(stmt.thenBranch);

        if (stmt.elseBranch) {
            this.resolveStmt(stmt.elseBranch);
        }
    }

    visitPrintStmt(stmt: Stmt.Print) {
        this.resolveExpr(stmt.expr);
    }

    visitReturnStmt(stmt: Stmt.Return) {
        if (this.functionType === FunctionType.NONE) {
            this.runner.errorToken(
                stmt.keyword,
                'Cannot return from top level.',
            );
        }

        this.resolveExpr(stmt.value);
    }

    visitWhileStmt(stmt: Stmt.While) {
        this.resolveExpr(stmt.condition);
        this.resolveStmt(stmt.body);
    }

    visitBinaryExpr(expr: Expr.Binary) {
        this.resolveExpr(expr.left);
        this.resolveExpr(expr.right);
    }

    visitCallExpr(expr: Expr.Call) {
        this.resolveExpr(expr.callee);

        for (let arg of expr.args) {
            this.resolveExpr(arg);
        }
    }

    visitGroupingExpr(expr: Expr.Grouping) {
        this.resolveExpr(expr.expr);
    }

    visitLiteralExpr(expr: Expr.Literal) {}

    visitLogicalExpr(expr: Expr.Logical) {
        this.resolveExpr(expr.left);
        this.resolveExpr(expr.right);
    }

    visitUnaryExpr(expr: Expr.Unary) {
        this.resolveExpr(expr.right);
    }

    visitBreakStmt() {}

    private beginScope() {
        this.scopes.push(new Map());
    }

    private endScope() {
        return this.scopes.pop();
    }

    private declare(name: Token) {
        if (!this.scopes.length) {
            return;
        }

        const current = this.currentScope();

        if (current.has(name.lexeme)) {
            this.runner.errorToken(
                name,
                'Duplicate variable declaration in the scope.',
            );
        }

        current.set(name.lexeme, {
            name,
            state: VariableState.DECLARED,
        });
    }

    private define(name: Token) {
        if (!this.scopes.length) {
            return;
        }

        this.currentScope().set(name.lexeme, {
            name,
            state: VariableState.DEFINED,
        });
    }

    private currentScope() {
        return this.scopes[this.scopes.length - 1];
    }

    private resolveFunction(fn: Expr.Function, type: FunctionType) {
        const enclosingType = this.functionType;
        this.functionType = type;

        this.beginScope();

        for (let param of fn.parameter) {
            this.declare(param);
            this.define(param);
        }
        this.resolve(fn.body);

        this.endScope();

        this.functionType = enclosingType;
    }

    private resolveLocal(expr: Expr.Expr, name: Token, isRead: boolean) {
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            if (this.scopes[i].has(name.lexeme)) {
                this.interpreter.resolve(expr, this.scopes.length - 1 - i);

                this.scopes[i].get(name.lexeme)!.state = VariableState.READ;
            }
        }
    }

    // Dirty code after need to be refactored

    resolve(statements: Stmt.Stmt[]) {
        for (let statement of statements) {
            this.resolveStmt(statement);
        }
    }

    private resolveStmt(statement: Stmt.Stmt) {
        statement.accept(this);
    }

    private resolveExpr(expr: Expr.Expr) {
        expr.accept(this);
    }
}
