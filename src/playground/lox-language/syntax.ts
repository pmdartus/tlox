import { KEYWORDS as keywordsMap } from '../../core/scanner';

export const KEYWORDS = Array.from(keywordsMap.keys());

/**
 * Syntax highlight defintion
 * https://microsoft.github.io/monaco-editor/monarch.html
 */
export const MONARCH_TOKEN_PROVIDER = {
    ignoreCase: true,

    keywords: KEYWORDS,
    
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