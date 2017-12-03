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

export function parse(src: string) {
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