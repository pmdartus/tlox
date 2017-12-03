import { LANGUAGE_ID, LANGUAGE_CONFIG } from './config';
import { MONARCH_TOKEN_PROVIDER } from './syntax';
import { completionItemProvider } from './autocomplete';
import { parse } from './parser';

/**
 * Lox language identifier
 */
export const id = LANGUAGE_ID;

/**
 * Register lox language to monaco editor
 */
export function registerLanguage(monaco: any) {
    const { languages } = monaco;

    languages.register({ id });
    languages.setLanguageConfiguration(id, LANGUAGE_CONFIG);
    languages.setMonarchTokensProvider(id, MONARCH_TOKEN_PROVIDER);
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