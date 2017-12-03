import { KEYWORDS } from './syntax';

export function completionItemProvider(monaco: any) {
    const { CompletionItemKind } = monaco.languages;

    const keywordItems = KEYWORDS.map(keyword => ({
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