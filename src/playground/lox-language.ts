export const id = 'lox';

const keywords = [
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
];

const languageConfig = {
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/'],
    },
    brackets: [['{', '}'], ['(', ')']],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: '/*', close: ' */', notIn: ['string'] },
    ],
    surroundingPairs: [
        ['{', '}'],
        ['(', ')'],
        ['"', '"'],
    ],
};

/**
 * Syntax highlight defintion
 * https://microsoft.github.io/monaco-editor/monarch.html
 */
const tokenProvider = {
    ignoreCase: true,

    keywords,
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

        comment: [[/[^\/*]+/, 'comment'], ['\\*/', 'comment', '@pop']],

        string: [[/[^"]+/, 'string'], [/"/, 'string', '@pop']],
    },
};

/**
 * Add support for autocompletion.
 */
function completionItemProvider(monaco: any) {
    const { CompletionItemKind } = monaco.languages;

    const keywordItems = keywords.map(keyword => ({
        label: keyword,
        kind: CompletionItemKind.Text,
    }));

    const snippetsItems = [
        {
            label: 'print',
            documentation: 'Print statement',
            kind: CompletionItemKind.Snippet,
            insertText: {
                value: 'print $1;',
            },
        },
        {
            label: 'fun',
            documentation: 'Function Statement',
            kind: CompletionItemKind.Snippet,
            insertText: {
                value: ['fun ${1:name} (${2:params}) {', '\t$3', '}'].join(
                    '\n',
                ),
            },
        },
        {
            label: 'class',
            documentation: 'Class Statement',
            kind: CompletionItemKind.Snippet,
            insertText: {
                value: [
                    'class ${1:Name} {',
                    '\tinit(${2:params}) {',
                    '\t\t$3',
                    '\t}',
                    '}',
                ].join('\n'),
            },
        },
        {
            label: 'if',
            documentation: 'If Statement',
            kind: CompletionItemKind.Snippet,
            insertText: {
                value: ['if (${1:cond}) {', '\t$2', '}'].join('\n'),
            },
        },
        {
            label: 'ifelse',
            documentation: 'If/Else Statement',
            kind: CompletionItemKind.Snippet,
            insertText: {
                value: [
                    'if (${1:cond}) {',
                    '\t$2',
                    '} else {',
                    '\t$3',
                    '}',
                ].join('\n'),
            },
        },
        {
            label: 'for',
            documentation: 'For Loop',
            kind: CompletionItemKind.Snippet,
            insertText: {
                value: [
                    'for (var ${1:i} = 0; $1 < ${2:10}; $1 = $1 + 1) {',
                    '\t$0',
                    '}',
                ].join('\n'),
            },
        },
        {
            label: 'while',
            documentation: 'While Loop',
            kind: CompletionItemKind.Snippet,
            insertText: {
                value: ['while (${1:true}) {', '\t$2', '}'].join('\n'),
            },
        },
    ];

    return {
        provideCompletionItems() {
            return [...keywordItems, ...snippetsItems];
        },
    };
}

export function register(monaco: any) {
    const { languages } = monaco;

    languages.register({ id });
    languages.setLanguageConfiguration(id, languageConfig);
    languages.setMonarchTokensProvider(id, tokenProvider);
    languages.registerCompletionItemProvider(
        id,
        completionItemProvider(monaco),
    );
}
