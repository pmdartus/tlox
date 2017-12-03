import Scanner from '../core/scanner';
import Parser from '../core/parser';

/**
 * Extracted from: monaco-editor/monaco.d.ts
 */
enum Severity {
    Ignore = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
}

interface EditorMaker {
    code?: string;
    severity: Severity;
    message: string;
    source?: string;
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
}

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

function parse(src: string) {
    const errors: EditorMaker[] = [];
    
    const scanner = new Scanner(src, {
        error(line, message) {
            errors.push({
                message,
                startLineNumber: line,
                endLineNumber: line,
                startColumn: 0,
                endColumn: 0,
                severity: Severity.Error,
            })
        }
    });
    const tokens = scanner.scanTokens();

    if (errors.length) {
        return { errors };
    }

    const parser = new Parser(tokens, {
        error(token, message) {
            errors.push({
                message,
                startLineNumber: token.line,
                endLineNumber: token.line,
                startColumn: 0,
                endColumn: 0,
                severity: Severity.Error,
            })
        }
    });
    const statements = parser.parse();

    return { errors, statements };
}

/**
 * Register lox language to monaco editor
 */
export function registerLanguage(monaco: any) {
    const { languages } = monaco;

    languages.register({ id });
    languages.setLanguageConfiguration(id, languageConfig);
    languages.setMonarchTokensProvider(id, tokenProvider);
    languages.registerCompletionItemProvider(
        id,
        completionItemProvider(monaco),
    );
}

/**
 * Register a lox language server like to an editor instance.
 */
export function registerEditor(monaco: any, instance: any) {
    const model = instance.getModel();

    // Only register if the langauge is lox
    const { language } = model.getLanguageIdentifier();
    if (language !== id) {
        return;
    }

    const validateContent = () => {
        const src: string = model.getValue();
        const { errors } = parse(src);

        monaco.editor.setModelMarkers(
            model,
            'lox',
            errors,
        )
    };

    validateContent();

    instance.onDidChangeModelContent(validateContent);
}