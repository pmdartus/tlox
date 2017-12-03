export default class Token {
    type: TokenType;
    lexeme: string;
    literal: any;
    start: number;

    constructor(type: TokenType, lexeme: string, literal: any, start: number) {
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.start = start;
    }

    get end() {
        return this.start + this.lexeme.length;
    }

    toString() {
        return `[${this.type}] ${this.lexeme} ${this.literal}`;
    }

    static equals(a: Token, b: Token) {
        return (
            a.type === b.type &&
            a.lexeme === b.lexeme &&
            a.literal === b.literal &&
            a.start === b.start
        );
    }
}

export enum TokenType {
    // Single character tokens.
    LEFT_PAREN,
    RIGHT_PAREN,
    LEFT_BRACE,
    RIGHT_BRACE,
    COMMA,
    DOT,
    MINUS,
    PLUS,
    SEMI,
    SLASH,
    STAR,

    // One of two characters tokens.
    BANG,
    BANG_EQUAL,
    EQUAL,
    EQUAL_EQUAL,
    GREATER,
    GREATE_EQUAL,
    LESS,
    LESS_EQUAL,

    // Literals
    IDENTIFIER,
    STRING,
    NUMBER,

    // Keywords
    AND,
    CLASS,
    ELSE,
    FALSE,
    FUN,
    FOR,
    IF,
    NIL,
    OR,
    PRINT,
    RETURN,
    SUPER,
    THIS,
    TRUE,
    VAR,
    WHILE,
    BREAK,

    // Others
    EOF,
}
