import Token from './token';
import { LoxCallable, LoxFunction } from './callable';
import Interpreter, { RuntimeException } from './interpreter';

export class LoxInstance {
    klass: LoxClass | null;
    fields: Map<string, any> = new Map();

    constructor(klass: LoxClass | null) {
        this.klass = klass;
    }

    get(name: Token) {
        if (!this.klass) {
            return;
        }

        if (this.fields.has(name.lexeme)) {
            return this.fields.get(name.lexeme);
        }

        const method = this.klass.findMethod(this, name);
        if (method) {
            return method;
        }

        throw new RuntimeException(name, `Undefined property ${name.lexeme}.`);
    }

    set(name: Token, value: any) {
        this.fields.set(name.lexeme, value);
    }

    toString() {
        if (!this.klass) {
            return;
        }
        
        return `<Instance ${this.klass.name}>`;
    }
}

export class LoxClass extends LoxInstance implements LoxCallable {
    name: string;
    methods: { [name: string]: LoxFunction };

    constructor(metaclass: LoxClass | null, name: string, methods: { [name: string]: LoxFunction }) {
        super(metaclass);
        this.name = name;
        this.methods = methods;
    }

    call(interpreter: Interpreter, ...args: any[]) {
        const instance = new LoxInstance(this);

        const init = this.methods['init'];
        if (init) {
            init.bind(instance).call(interpreter, args);
        }

        return instance;
    }

    findMethod(instance: LoxInstance, name: Token) {
        if (name.lexeme in this.methods) {
            return this.methods[name.lexeme].bind(instance);
        }
    }

    get arity() {
        const init = this.methods['init'];
        return init ? init.arity : 0;
    }

    toString() {
        return `<Class ${this.name}>`;
    }
}
