/* /!\ Genreated via "npm run genreate-ast" /!\ */

import Token from './token';

export interface ExprVisitor<V> {
    visitBinaryExpr(expr: Binary): V;
    visitGroupingExpr(expr: Grouping): V;
    visitLiteralExpr(expr: Literal): V;
    visitUnaryExpr(expr: Unary): V;
}

export abstract class Expr {
    abstract accept<V>(visitior: ExprVisitor<V>): V;
}

export class Binary extends Expr {
    left: Expr;
    operator: Token;
    right: Expr;
    constructor(left: Expr, operator: Token, right: Expr) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitBinaryExpr(this);
    }
}

export class Grouping extends Expr {
    expr: Expr;
    constructor(expr: Expr) {
        super();
        this.expr = expr;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitGroupingExpr(this);
    }
}

export class Literal extends Expr {
    value: any;
    constructor(value: any) {
        super();
        this.value = value;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitLiteralExpr(this);
    }
}

export class Unary extends Expr {
    operation: Token;
    right: Expr;
    constructor(operation: Token, right: Expr) {
        super();
        this.operation = operation;
        this.right = right;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitUnaryExpr(this);
    }
}
