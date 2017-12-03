import { locate } from 'locate-character';

import Parser from './parser';
import Scanner from './scanner';
import Token, { TokenType } from './token';
import Interpreter, { RuntimeException } from './interpreter';
import Resolver from './resolver';
import { Logger } from './logger';

const LOCATION_CONFIG = {
    offsetLine: 1
};

export default class Runner {
    source: string;

    hadError = false;
    hadRuntimeError = false;
    interpreter = new Interpreter(this);

    logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    run(source: string) {
        this.source = source;

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

    error(location: number, message: string) {
        const { line, column } = locate(this.source, location, LOCATION_CONFIG);
        this.reportError(line, column, '', message);
    }

    errorToken(token: Token, message: string) {
        const { line, column } = locate(this.source, token.start, LOCATION_CONFIG);
        if (token.type === TokenType.EOF) {
            this.reportError(line, column, 'at end', message);
        } else {
            this.reportError(line, column, `at "${token.lexeme}"`, message);
        }
    }

    runtimeError(error: RuntimeException) {
        const { line, column } = locate(this.source, error.token.start, LOCATION_CONFIG);
        this.logger.error(`[${line}:${column}] ${error.message}`);
        this.hadRuntimeError = true;
    }

    reportError(line: number, column: number, where: string, message: string) {
        this.logger.error(`[${line}:${column}] Error ${where}: ${message}`);
        this.hadError = true;
    }
}
