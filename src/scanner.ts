import Runner from './runner';
import Token, { TokenType } from './token';

function isDigit(c: string) {
    return c >= '0' && c <= '9';
}

function isAlpha(c: string) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

function isAlphaNumeric(c: string) {
    return isAlpha(c) || isDigit(c);
}

const KEYWORDS: Map<string, TokenType> = new Map([
    ['and', TokenType.AND],
    ['class', TokenType.CLASS],
    ['else', TokenType.ELSE],
    ['false', TokenType.FALSE],
    ['for', TokenType.FOR],
    ['if', TokenType.IF],
    ['nil', TokenType.NIL],
    ['or', TokenType.OR],
    ['print', TokenType.PRINT],
    ['return', TokenType.RETURN],
    ['super', TokenType.SUPER],
    ['this', TokenType.THIS],
    ['true', TokenType.TRUE],
    ['var', TokenType.VAR],
    ['while', TokenType.WHILE],
    ['break', TokenType.BREAK]
]);

export default class Scanner {
    source: string;
    runner: Runner;

    tokens: Token[] = [];
    start = 0;
    current = 0;
    line = 1;

    constructor(source: string, runner: Runner) {
        this.source = source;
        this.runner = runner;
    }

    scanTokens() {
        while (!this.isAtEnd()) {
            this.start = this.current;
            this.scanToken();
        }

        this.tokens.push(new Token(TokenType.EOF, '', null, this.line));
        return this.tokens;
    }

    private isAtEnd() {
        return this.current >= this.source.length;
    }

    private advance() {
        return this.source.charAt(this.current++);
    }

    private match(char: string) {
        if (this.isAtEnd()) {
            return false;
        } else if (this.source.charAt(this.current) !== char) {
            return false;
        }

        this.current++;
        return true;
    }

    private peek() {
        return this.isAtEnd() ? '\0' : this.source.charAt(this.current);
    }

    private peekNext() {
        return this.current + 1 >= this.source.length
            ? '\0'
            : this.source.charAt(this.current + 1);
    }

    private addToken(type: TokenType, literal: any = null) {
        const lexeme = this.source.slice(this.start, this.current);
        this.tokens.push(new Token(type, lexeme, literal, this.line));
    }

    private scanToken() {
        const c = this.advance();
        switch (c) {
            case '(':
                this.addToken(TokenType.LEFT_PAREN);
                break;

            case ')':
                this.addToken(TokenType.RIGHT_PAREN);
                break;

            case '{':
                this.addToken(TokenType.LEFT_BRACE);
                break;

            case '}':
                this.addToken(TokenType.RIGHT_BRACE);
                break;

            case ',':
                this.addToken(TokenType.COMMA);
                break;

            case '.':
                this.addToken(TokenType.DOT);
                break;

            case '.':
                this.addToken(TokenType.DOT);
                break;

            case '-':
                this.addToken(TokenType.MINUS);
                break;

            case '+':
                this.addToken(TokenType.PLUS);
                break;

            case ';':
                this.addToken(TokenType.SEMI);
                break;

            case '*':
                this.addToken(TokenType.STAR);
                break;

            case '!':
                this.addToken(
                    this.match('=') ? TokenType.BANG_EQUAL : TokenType.BANG,
                );
                break;

            case '=':
                this.addToken(
                    this.match('=') ? TokenType.EQUAL_EQUAL : TokenType.EQUAL,
                );
                break;

            case '<':
                this.addToken(
                    this.match('=') ? TokenType.LESS_EQUAL : TokenType.LESS,
                );
                break;

            case '>':
                this.addToken(
                    this.match('=')
                        ? TokenType.GREATE_EQUAL
                        : TokenType.GREATER,
                );
                break;

            case '/':
                if (this.match('/')) {
                    // A comment goes untile the end of the line
                    while (this.peek() !== '\n' && !this.isAtEnd()) {
                        this.advance();
                    }
                } else if (this.match('*')) {
                    // A comment goes untile the end of the line
                    while (
                        this.peek() !== '*' &&
                        this.peekNext() !== '/' &&
                        !this.isAtEnd()
                    ) {
                        if (this.peek() === '\n') {
                            this.line++;
                        }

                        this.advance();
                    }

                    if (this.peek() !== '/') {
                        // Discard closing */
                        this.advance();
                        this.advance();
                    }
                } else {
                    this.addToken(TokenType.SLASH);
                }

                break;

            case ' ':
            case '\r':
            case '\t':
                // Ignore whitespaces
                break;

            case '\n':
                this.line++;
                break;

            case '"':
                this.string();
                break;

            default:
                if (isDigit(c)) {
                    this.number();
                } else if (isAlpha(c)) {
                    this.identifier();
                } else {
                    this.runner.error(this.line, `Unexpected character ${c}`);
                }
        }
    }

    private string() {
        while (this.peek() !== '"' && !this.isAtEnd()) {
            if (this.peek() == '\n') {
                this.line++;
            }

            this.advance();
        }

        if (this.isAtEnd()) {
            this.runner.error(this.line, 'Unterminated string.');
            return;
        }

        // Consume closing '"'
        this.advance();

        // Trimmed surrounding quotes
        const value = this.source.slice(this.start + 1, this.current - 1);
        this.addToken(TokenType.STRING, value);
    }

    private number() {
        while (isDigit(this.peek())) {
            this.advance();
        }

        // Floating numbers
        let isFloat = false;
        if (this.peek() === '.' && isDigit(this.peekNext())) {
            // Consume '.'
            this.advance();
            isFloat = true;

            while (isDigit(this.peek())) {
                this.advance();
            }
        }

        // Parse literal according to the type
        const value = this.source.slice(this.start, this.current);
        const literal = isFloat ? parseFloat(value) : parseFloat(value);

        this.addToken(TokenType.NUMBER, literal);
    }

    private identifier() {
        while (isAlphaNumeric(this.peek())) {
            this.advance();
        }

        const text = this.source.slice(this.start, this.current);

        let type = KEYWORDS.get(text);
        if (type == null) {
            type = TokenType.IDENTIFIER;
        }

        this.addToken(type);
    }
}
