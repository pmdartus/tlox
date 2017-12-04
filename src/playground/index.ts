import { saveGist, loadGist } from './gist';
import { presets } from './presets';
import * as loxLanguage from './lox-language/main';

import Runner from '../core/runner';

declare global {
    interface Window { 
        require: any;
        monaco: any;
    }
}

interface StateConfig {
    onchange(src: string): void;
}

class PlaygroundState {
    config: StateConfig;

    constructor(config: StateConfig) {
        window.addEventListener('popstate', async (evt: PopStateEvent) => {
            const src = await this.load();
            config.onchange(src || '');
        });
    }

    async load(): Promise<string | undefined> {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        if (params.has('id')) {
            return loadGist(params.get('id')!);
        }
    }

    async save(src: string): Promise<string> {
        const id = await saveGist(src);
        
        history.pushState(
            {},
            document.title,
            `?id=${id}`,
        );

        return id;
    }
}

function loadMonaco(): Promise<any> {
    return new Promise((resolve, reject) => {
        window.require.config({ paths: { 'vs': 'monaco-editor' }});
        window.require(['vs/editor/editor.main'], () => {
            resolve(window.monaco);
        });
    })
}

const presetSelect = document.querySelector('#preset-select') as HTMLSelectElement;
const saveButton = document.querySelector('#save-button')!; 
const runButton = document.querySelector('#run-button')!;
const editorContainer = document.querySelector('#left-container')!;
const logContainer = document.querySelector('#right-container')!;

for (let preset of presets) {
    const option = document.createElement('option');
    
    option.text = preset.name;
    option.value = preset.value;

    presetSelect.appendChild(option);
}

let editor: any;
let log: any;

const state = new PlaygroundState({
    onchange(value) {
        editor.setValue(value);
    }
});

Promise.all([
    loadMonaco(),
    state.load(),
]).then(([monaco, value]) => {
    loxLanguage.registerLanguage(monaco);
    
    editor = monaco.editor.create(editorContainer, {
        value: value || presetSelect.value,
        language: loxLanguage.id,
    });

    loxLanguage.registerEditor(monaco, editor);

    log = monaco.editor.create(logContainer, {
        value: '',

        lineNumbers: false,
        scrollBeyondLastLine: false,
        
        readOnly: true,
        contextmenu: false,
        hideCursorInOverviewRuler: true,

        minimap: {
            enabled: false
        },

        theme: 'vs-dark',
    });

    window.addEventListener('resize', () => {
        editor.layout();
        log.layout();
    });
    
    presetSelect.addEventListener('change', () => {
        editor.setValue(presetSelect.value);
    });

    saveButton.addEventListener('click', () => {
        state.save(
            editor.getValue()
        );
    });

    runButton.addEventListener('click', () => {
        const value = editor.getValue();

        const logLines: string[] = [];
        const addLogLine = function(msg: string) {
            logLines.push(msg);
            log.setValue(logLines.join('\n'));
        }

        const runner = new Runner({
            debug(msg: string) { 
                console.debug(msg)
                addLogLine(`🔎 ${msg}`);
            },
            log(msg: string) {
                console.log(msg)
                addLogLine(`  ${msg}`);
            },
            warning(msg: string) {
                console.warn(msg)
                addLogLine(`⚠️ ${msg}`);
            },
            error(msg: string) {
                console.error(msg);
                addLogLine(`️❌ ${msg}`);
            },
        });

        runner.run(value);
    });

    document.body.classList.add('ready');
});