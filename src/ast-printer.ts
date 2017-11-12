import * as Expr from './expr';

export default class AstPrinter implements Expr.ExprVisitor<string> {
    print(expr: Expr.Expr): string {
        return expr.accept(this);
    }

    visitBinaryExpr(expr: Expr.Binary): string {
        return this.parenthesize(expr.operator.lexeme, expr.left, expr.right);
    }

    visitGroupingExpr(expr: Expr.Grouping): string {
        return this.parenthesize('group', expr.expr);
    }

    visitLiteralExpr(expr: Expr.Literal): string {
        return expr.value == null ? 'nil' : expr.value;
    }

    visitUnaryExpr(expr: Expr.Unary): string {
        return this.parenthesize(expr.operation.lexeme, expr.right);
    }

    private parenthesize(name: string, ...exprs: Expr.Expr[]): string {
        return `(${name} ${exprs.map(expr => expr.accept(this)).join(' ')})`;
    }
}
