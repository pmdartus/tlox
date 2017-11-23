import Token from './token';
import { RuntimeException } from './interpreter';

export default class Environment {
    enclosing?: Environment;
    values = new Map<string, any>();

    constructor(enclosing?: Environment) {
        this.enclosing = enclosing;
    }

    define(name: string, value: any) {
        this.values.set(name, value);
    }

    assign(name: Token, value: any) {
        if (this.values.has(name.lexeme)) {
            this.values.set(name.lexeme, value);
        } else if (this.enclosing) {
            this.enclosing.assign(name, value);
        } else {
            throw new RuntimeException(
                name,
                `Unefined variable for "${name.lexeme}".`,
            );
        }
    }

    assignAt(distance: number, name: Token, value: any) {
        return this.ancestor(distance).values.set(name.lexeme, value);
    } 

    get(name: Token): any {
        if (this.values.has(name.lexeme)) {
            return this.values.get(name.lexeme);
        } else if (this.enclosing) {
            return this.enclosing.get(name);
        }

        throw new RuntimeException(
            name,
            `Unefined variable for "${name.lexeme}".`,
        );
    }

    getAt(distance: number, name: string) {
        return this.ancestor(distance).values.get(name);
    }

    ancestor(distance: number): Environment {
        return distance === 0 ?
            this :
            this.ancestor(distance - 1);
    }
}
