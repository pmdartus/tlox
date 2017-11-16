import Parser from './parser';
import Scanner from './scanner';
import AstPrinter from './ast-printer';
import Token, { TokenType } from './token';
import Interpreter, { RuntimeException } from './interpreter';

export default class Runner {
    hadError = false;
    hadRuntimeError = false;

    interpreter = new Interpreter(this);

    run(source: string) {
        const scanner = new Scanner(source, this);
        const tokens = scanner.scanTokens();

        const parser = new Parser(tokens, this);
        const statements = parser.parse();

        if (this.hadError) {
            return;
        }

        this.interpreter.interpret(statements);
    }

    error(line: number, message: string) {
        this.reportError(line, '', message);
    }

    errorToken(token: Token, message: string) {
        if (token.type === TokenType.EOF) {
            this.reportError(token.line, 'at end', message);
        } else {
            this.reportError(token.line, `at "${token.lexeme}"`, message);
        }
    }

    runtimeError(error: RuntimeException) {
        console.error(`[line ${error.token.line}] ${error.message}`);
        this.hadRuntimeError = true;
    }

    reportError(line: number, where: string, message: string) {
        this.hadError = true;
        console.error(`[line ${line}] Error ${where}: ${message}`);
    }
}
