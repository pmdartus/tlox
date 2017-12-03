import Parser from './parser';
import Scanner from './scanner';
import Token, { TokenType } from './token';
import Interpreter, { RuntimeException } from './interpreter';
import Resolver from './resolver';
import { Logger } from './logger';

export default class Runner {
    hadError = false;
    hadRuntimeError = false;
    interpreter = new Interpreter(this);

    logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    run(source: string) {
        const scanner = new Scanner(source, {
            error: (line, msg) => this.error(line, msg)
        });
        const tokens = scanner.scanTokens();

        const parser = new Parser(tokens, {
            error: (token, msg) => this.errorToken(token, msg)
        });
        const statements = parser.parse();

        if (this.hadError) {
            return;
        }

        const resolver = new Resolver(this.interpreter, this);
        resolver.resolve(statements);

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
        this.logger.error(`[line ${error.token.line}] ${error.message}`);
        this.hadRuntimeError = true;
    }

    reportError(line: number, where: string, message: string) {
        this.logger.error(`[line ${line}] Error ${where}: ${message}`);
        this.hadError = true;
    }
}
