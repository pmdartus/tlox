import Runner from '../runner';
import Scanner from '../scanner';
import Token, { TokenType } from '../token';

let runner: Runner;
beforeEach(() => (
    runner = new Runner()
));

function matchTokens(actual: Token[], expected: Token[]) {
    expect(actual).toHaveLength(expected.length);
    
    for (let i = 0; i < actual.length; i++) {
        // console.log(actual[i], expected[i]);
        expect(Token.equals(actual[i], expected[i])).toBe(true);
    }
}

test('simple expression', () => {
    const scanner = new Scanner('var a = b;', runner);
    const tokens = scanner.scanTokens();
    matchTokens(tokens, [
        new Token(TokenType.VAR, 'var', null, 1),
        new Token(TokenType.IDENTIFIER, 'a', null, 1),
        new Token(TokenType.EQUAL, '=', null, 1),
        new Token(TokenType.IDENTIFIER, 'b', null, 1),
        new Token(TokenType.SEMI, ';', null, 1),
        new Token(TokenType.EOF, '', null, 1),
    ]);
});

describe('number', () => {
    test('positive', () => {
        const scanner = new Scanner('1 100', runner);
        const tokens = scanner.scanTokens();
        matchTokens(tokens, [
            new Token(TokenType.NUMBER, '1', 1, 1),
            new Token(TokenType.NUMBER, '100', 100, 1),
            new Token(TokenType.EOF, '', null, 1),
        ]);
    });

    test('negative', () => {
        const scanner = new Scanner('-1 -100', runner);
        const tokens = scanner.scanTokens();
        matchTokens(tokens, [
            new Token(TokenType.MINUS, '-', null, 1),
            new Token(TokenType.NUMBER, '1', 1, 1),
            new Token(TokenType.MINUS, '-', null, 1),
            new Token(TokenType.NUMBER, '100', 100, 1),
            new Token(TokenType.EOF, '', null, 1),
        ]);
    });

    test('float', () => {
        const scanner = new Scanner('3.14', runner);
        const tokens = scanner.scanTokens();
        matchTokens(tokens, [
            new Token(TokenType.NUMBER, '3.14', 3.14, 1),
            new Token(TokenType.EOF, '', null, 1),
        ]);
    });
});

describe('string', () => {
    test('simple', () => {
        const scanner = new Scanner('"Hello world!"', runner);
        const tokens = scanner.scanTokens();
        matchTokens(tokens, [
            new Token(TokenType.STRING, '"Hello world!"', 'Hello world!', 1),
            new Token(TokenType.EOF, '', null, 1),
        ]);
    });
});