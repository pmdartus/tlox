/* /!\ Genreated via "npm run genreate-ast" /!\ */

import Token from '../token';
import { Stmt } from './stmt';

export interface ExprVisitor<V> {
    visitAssignExpr(expr: Assign): V;
    visitBinaryExpr(expr: Binary): V;
    visitGroupingExpr(expr: Grouping): V;
    visitLiteralExpr(expr: Literal): V;
    visitUnaryExpr(expr: Unary): V;
    visitCallExpr(expr: Call): V;
    visitGetExpr(expr: Get): V;
    visitSetExpr(expr: Set): V;
    visitThisExpr(expr: This): V;
    visitLogicalExpr(expr: Logical): V;
    visitVariableExpr(expr: Variable): V;
    visitFunctionExpr(expr: Function): V;
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

export class Call extends Expr {
    callee: Expr;
    paren: Token;
    args: Expr[];
    constructor(callee: Expr, paren: Token, args: Expr[]) {
        super();
        this.callee = callee;
        this.paren = paren;
        this.args = args;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitCallExpr(this);
    }
}

export class Get extends Expr {
    object: Expr;
    name: Token;
    constructor(object: Expr, name: Token) {
        super();
        this.object = object;
        this.name = name;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitGetExpr(this);
    }
}

export class Set extends Expr {
    object: Expr;
    name: Token;
    value: Expr;
    constructor(object: Expr, name: Token, value: Expr) {
        super();
        this.object = object;
        this.name = name;
        this.value = value;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitSetExpr(this);
    }
}

export class This extends Expr {
    keyword: Token;
    constructor(keyword: Token) {
        super();
        this.keyword = keyword;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitThisExpr(this);
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

export class Function extends Expr {
    parameter: Token[];
    body: Stmt[];
    constructor(parameter: Token[], body: Stmt[]) {
        super();
        this.parameter = parameter;
        this.body = body;
    }
    accept<V>(visitor: ExprVisitor<V>): V {
        return visitor.visitFunctionExpr(this);
    }
}
