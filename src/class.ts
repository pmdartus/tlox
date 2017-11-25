import Token from './token';
import { LoxCallable } from './callable';
import { RuntimeException } from './interpreter';

export class LoxClass implements LoxCallable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    call() {
        const instance = new LoxInstance(this);
        return instance;
    }

    get arity() {
        return 0;
    }

    toString() {
        return `<Class ${this.name}>`;
    }
}

export class LoxInstance {
    klass: LoxClass;
    fields: Map<string, any> = new Map();

    constructor(klass: LoxClass) {
        this.klass = klass;
    }

    get(name: Token) {
        if (!this.fields.has(name.lexeme)) {
            throw new RuntimeException(
                name,
                `Undefined property ${name.lexeme}.`,
            );
        }

        return this.fields.get(name.lexeme);
    }

    set(name: Token, value: any) {
        this.fields.set(name.lexeme, value);
    }

    toString() {
        return `<Instance ${this.klass.name}>`;
    }
}
