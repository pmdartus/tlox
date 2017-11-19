/* /!\ Genreated via "npm run genreate-ast" /!\ */

import Token from '../token';

export interface ExprVisitor<V> {
    visitAssignExpr(expr: Assign): V;
    visitBinaryExpr(expr: Binary): V;
    visitGroupingExpr(expr: Grouping): V;
    visitLiteralExpr(expr: Literal): V;
    visitUnaryExpr(expr: Unary): V;
    visitLogicalExpr(expr: Logical): V;
    visitVariableExpr(expr: Variable): V;
}

export abstract class Expr {
    abstract accept<V>(visitior: ExprVisitor<V>): V;
}

export class Assign extends Expr {
    name: Token;
    value: Expr;
    constructor(name: Token, value: Expr) {
        super();
        this.name = name;
        this.value = value;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitAssignExpr(this);
    }
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

export class Logical extends Expr {
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
        return visitor.visitLogicalExpr(this);
    }
}

export class Variable extends Expr {
    name: Token;
    constructor(name: Token) {
        super();
        this.name = name;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitVariableExpr(this);
    }
}
