import Interpreter, { ReturnException } from './interpreter';
import { Function, Block } from './ast/stmt';
import Environment from './environment';

export abstract class LoxCallable {
    abstract arity: number;
    abstract call(interpreter: Interpreter, ...args: any[]): any;
}

export class LoxFunction extends LoxCallable {
    declaration: Function;

    constructor(declaration: Function) {
        super();
        this.declaration = declaration;
    }

    get arity() {
        return this.declaration.parameter.length;
    }

    call(interpreter: Interpreter, args: any[]) {
        const environment = new Environment(interpreter.globals);

        for (let i = 0; i < this.arity; i++) {
            environment.define(this.declaration.parameter[i].lexeme, args[i]);
        }

        const body = new Block(this.declaration.body);

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
        return `<fn ${this.declaration.name.lexeme}>`;
    }
}
