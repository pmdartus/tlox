const LANGUAGE_ID = 'lox';

const TOKEN_PROVIDER = {
    ignoreCase: true,

    keywords: [
        'and',
        'class',
        'else',
        'false',
        'for',
        'if',
        'nil',
        'or',
        'print',
        'return',
        'super',
        'this',
        'true',
        'var',
        'while',
        'break',
        'fun',
    ],

    operators: ['=', '>', '<', '!', '?', ':', '==', '<=', '>=', '!='],

    tokenizer: {
        root: [
            [
                /[a-zA-Z][a-zA-Z0-9]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                },
            ],

            [/\/\*/, 'comment', '@comment'],
            [/^\/\/.*/, 'comment'],

            [/"/, 'string', '@string'],

            [/\d+\.\d+/, 'number.float'],
            [/\d+/, 'number'],
        ],

        comment: [
            [/[^\/*]+/, 'comment'],
            ['\\*/', 'comment', '@pop'],
        ],

        string: [
            [/[^"]+/, 'string'],
            [/"/, 'string', '@pop'],
        ],
    },
};

export const id = LANGUAGE_ID;

export function register(monaco: any) {
    monaco.languages.register({ id });
    monaco.languages.setMonarchTokensProvider(id, TOKEN_PROVIDER);

    return false;
}
