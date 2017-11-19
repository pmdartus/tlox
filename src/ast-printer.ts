import {
    ExprVisitor,
    Expr,
    Binary,
    Grouping,
    Literal,
    Unary,
    Variable,
} from './ast/expr';

export default class AstPrinter implements ExprVisitor<string> {
    print(expr: Expr): string {
        return expr.accept(this);
    }

    visitVariableExpr(expr: Variable): string {
        return expr.name.lexeme;
    }

    visitBinaryExpr(expr: Binary): string {
        return this.parenthesize(expr.operator.lexeme, expr.left, expr.right);
    }

    visitGroupingExpr(expr: Grouping): string {
        return this.parenthesize('group', expr.expr);
    }

    visitLiteralExpr(expr: Literal): string {
        return expr.value == null ? 'nil' : expr.value;
    }

    visitUnaryExpr(expr: Unary): string {
        return this.parenthesize(expr.operation.lexeme, expr.right);
    }

    private parenthesize(name: string, ...exprs: Expr[]): string {
        return `(${name} ${exprs.map(expr => expr.accept(this)).join(' ')})`;
    }
}
