import Runner from '../runner';
import Parser from '../parser';
import Token, { TokenType } from '../token';

let runner: Runner;
beforeEach(() => (runner = new Runner()));

test('simple expression', () => {
    const scanner = new Parser(
        [
            new Token(TokenType.NUMBER, '1', 1, 1),
            new Token(TokenType.EQUAL_EQUAL, '==', null, 1),
            new Token(TokenType.NUMBER, '2', 2, 1),
        ],
        runner,
    );

    const expr = scanner.parse();
    console.log(expr);
});
