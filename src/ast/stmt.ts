/* /!\ Genreated via "npm run genreate-ast" /!\ */

import Token from '../token';
import { Expr } from './expr';

export interface StmtVisitor<V> {
    visitBlockStmt(stmt: Block): V;
    visitExpressionStmt(stmt: Expression): V;
    visitIfStmt(stmt: If): V;
    visitWhileStmt(stmt: While): V;
    visitBreakStmt(stmt: Break): V;
    visitPrintStmt(stmt: Print): V;
    visitVarStmt(stmt: Var): V;
    visitFunctionStmt(stmt: Function): V;
    visitReturnStmt(stmt: Return): V;
}

export abstract class Stmt {
    abstract accept<V>(visitior: StmtVisitor<V>): V;
}

export class Block extends Stmt {
    statements: Stmt[];
    constructor(statements: Stmt[]) {
        super();
        this.statements = statements;
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitBlockStmt(this);
    }
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

export class If extends Stmt {
    condition: Expr;
    thenBranch: Stmt;
    elseBranch: Stmt | undefined;
    constructor(
        condition: Expr,
        thenBranch: Stmt,
        elseBranch: Stmt | undefined,
    ) {
        super();
        this.condition = condition;
        this.thenBranch = thenBranch;
        this.elseBranch = elseBranch;
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitIfStmt(this);
    }
}

export class While extends Stmt {
    condition: Expr;
    body: Stmt;
    constructor(condition: Expr, body: Stmt) {
        super();
        this.condition = condition;
        this.body = body;
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitWhileStmt(this);
    }
}

export class Break extends Stmt {
    constructor() {
        super();
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitBreakStmt(this);
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

export class Function extends Stmt {
    name: Token;
    parameter: Token[];
    body: Stmt[];
    constructor(name: Token, parameter: Token[], body: Stmt[]) {
        super();
        this.name = name;
        this.parameter = parameter;
        this.body = body;
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitFunctionStmt(this);
    }
}

export class Return extends Stmt {
    keyword: Token;
    value: Expr;
    constructor(keyword: Token, value: Expr) {
        super();
        this.keyword = keyword;
        this.value = value;
    }
    accept<V>(visitor: StmtVisitor<V>): V {
        return visitor.visitReturnStmt(this);
    }
}
