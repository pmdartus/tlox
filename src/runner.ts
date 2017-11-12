import Scanner from './scanner';
import Token, { TokenType } from './token';
import Parser from './parser';
import AstPrinter from './ast-printer';


export default class Runner {
    hadError = false;

    run(source: string) {
        const scanner = new Scanner(source, this);
        const tokens = scanner.scanTokens();

        const parser = new Parser(tokens, this);
        const expr = parser.parse();

        if (this.hadError) {
            return;
        }

        if (expr) {
            console.log(new AstPrinter().print(expr));
        }
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

    reportError(line: number, where: string, message: string) {
        this.hadError = true;
        console.error(`[line ${line}] Error ${where}: ${message}`);
    }
}
