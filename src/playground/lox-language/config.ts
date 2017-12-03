export const LANGUAGE_ID = 'lox';

export const LANGUAGE_CONFIG = {
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