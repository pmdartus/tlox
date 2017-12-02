import Runner from '../core/runner';

declare global {
    interface Window { 
        require: any;
        monaco: any;
    }
}

const PRESETS = [{
    name: 'Hello world',
    value: 'print "Hello World!";',
}, {
    name: 'Function',
    value: 'fun sayHi(first, last) {\n  print "Hello " + first + " " + last + ", nice to meet you";\n}\n\nsayHi("John", "Doe");',
}];

const presetSelect = document.querySelector('#preset-select') as HTMLSelectElement;
const runButton = document.querySelector('#run-button')!;
const editorContainer = document.querySelector('#editor-container')!;
const logContainer = document.querySelector('#log-container')!;

for (let preset of PRESETS) {
    const option = document.createElement('option');
    
    option.text = preset.name;
    option.value = preset.value;

    presetSelect.appendChild(option);
}

window.require.config({ paths: { 'vs': '/monaco-editor' }});

window.require(['vs/editor/editor.main'], () => {
    const editor = window.monaco.editor.create(editorContainer, {
        value: presetSelect.value,
        language: 'lox',
    });

    const log = window.monaco.editor.create(logContainer, {
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
    
    presetSelect.addEventListener('change', () => {
        editor.setValue(presetSelect.value);
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
});