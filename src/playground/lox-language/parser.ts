import { getLocator } from 'locate-character';

import Scanner from '../../core/scanner';
import Parser from '../../core/parser';

/**
 * Marker type definition for monaco editor.
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

const LOCATION_CONFIG = {
    offsetLine: 1,
    offsetColumn: 1
};

export function parse(src: string) {
    const locate = getLocator(src, LOCATION_CONFIG);
    const errors: EditorMaker[] = [];
    
    const scanner = new Scanner(src, {
        error(location, message) {
            const { line, column } = locate(location as any);
            errors.push({
                message,
                startLineNumber: line,
                endLineNumber: line,
                startColumn: column,
                endColumn: column,
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
            const start = locate(token.start as any);
            const end = locate(token.end as any);

            errors.push({
                message,
                startLineNumber: start.line,
                endLineNumber: end.line,
                startColumn: start.column,
                endColumn: end.column,
                severity: Severity.Error,
            })
        }
    });
    const statements = parser.parse();

    return { errors, statements };
}