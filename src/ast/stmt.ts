/* /!\ Genreated via "npm run genreate-ast" /!\ */

import Token from '../token';
import { Expr } from './expr';

export interface StmtVisitor<V> {
    visitExpressionStmt(stmt: Expression): V;
    visitPrintStmt(stmt: Print): V;
    visitVarStmt(stmt: Var): V;
}

export abstract class Stmt {
    abstract accept<V>(visitior: StmtVisitor<V>): V;
}

export class Expression extends Stmt {
    expr: Expr;
    constructor(expr: Expr) {
        super();
        this.expr = expr;
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitExpressionStmt(this);
    }
}

export class Print extends Stmt {
    expr: Expr;
    constructor(expr: Expr) {
        super();
        this.expr = expr;
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitPrintStmt(this);
    }
}

export class Var extends Stmt {
    name: Token;
    initializer: Expr;
    constructor(name: Token, initializer: Expr) {
        super();
        this.name = name;
        this.initializer = initializer;
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitVarStmt(this);
    }
}
