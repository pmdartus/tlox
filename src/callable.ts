import Interpreter from './interpreter';

export abstract class Callable {
    abstract arity: number;
    abstract call(interpreter: Interpreter, args: any[]): any;
}
