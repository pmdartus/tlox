import Token from './token';
import { RuntimeException } from './interpreter';

export default class Environment {
    values = new Map<string, any>();

    define(name: string, value: any) {
        this.values.set(name, value);
    }

    get(name: Token) {
        if (!this.values.has(name.lexeme)) {
            throw new RuntimeException(name, `Unefined variable for "${name.lexeme}".`);
        }
        
        return this.values.get(name.lexeme);
    }
}