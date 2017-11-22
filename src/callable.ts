import Interpreter, { ReturnException } from './interpreter';
import Environment from './environment';

import * as Stmt from './ast/stmt';
import * as Expr from './ast/expr';

export abstract class LoxCallable {
    abstract arity: number;
    abstract call(interpreter: Interpreter, ...args: any[]): any;
}

export class LoxFunction extends LoxCallable {
    closure: Environment;
    name: string | undefined;
    declaration: Expr.Function;

    constructor(
        name: string | undefined,
        declaration: Expr.Function,
        closure: Environment,
    ) {
        super();
        this.name = name;
        this.declaration = declaration;
        this.closure = closure;
    }

    get arity() {
        return this.declaration.parameter.length;
    }

    call(interpreter: Interpreter, args: any[]) {
        const environment = new Environment(this.closure);

        for (let i = 0; i < this.arity; i++) {
            environment.define(this.declaration.parameter[i].lexeme, args[i]);
        }

        const body = new Stmt.Block(this.declaration.body);

        try {
            interpreter.executeBlock(body, environment);
        } catch (error) {
            if (error instanceof ReturnException) {
                return error.value;
            }

            throw error;
        }
    }

    toString() {
        return `<fn ${this.name || 'anonymous'}>`;
    }
}
