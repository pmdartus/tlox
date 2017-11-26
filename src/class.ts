import Token from './token';
import { LoxCallable, LoxFunction } from './callable';
import { RuntimeException } from './interpreter';

export class LoxClass implements LoxCallable {
    name: string;
    methods: { [name: string]: LoxFunction }

    constructor(name: string, methods: { [name: string]: LoxFunction }) {
        this.name = name;
        this.methods = methods;
    }

    call() {
        const instance = new LoxInstance(this);
        return instance;
    }

    findMethod(name: Token) {
        if (name.lexeme in this.methods) {
            return this.methods[name.lexeme];
        }
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
        if (this.fields.has(name.lexeme)) {
            return this.fields.get(name.lexeme);
        }

        const method = this.klass.findMethod(name);
        if (method) {
            return method;
        }

        throw new RuntimeException(
            name,
            `Undefined property ${name.lexeme}.`,
        );
    }

    set(name: Token, value: any) {
        this.fields.set(name.lexeme, value);
    }

    toString() {
        return `<Instance ${this.klass.name}>`;
    }
}
