//import Runner from '../src/runner';

const PRESETS = [{
    name: 'Hello world',
    value: 'print "Hello World!";',
}, {
    name: 'Function',
    value: 'fun sayHi(first, last) {\n  print "Hello " + first + " " + last + ", nice to meet you";\n}\n\nsayHi("John", "Doe");',
}];

require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.10.1/min/vs' }});

require(['vs/editor/editor.main'], () => {
    const presetSelect = document.querySelector('#preset-select');
    
    for (let preset of PRESETS) {
        const option = document.createElement('option');
        
        option.text = preset.name;
        option.value = preset.value;
    
        presetSelect.appendChild(option);
    }

    const container = document.getElementById('#editor-container');

    const editor = monaco.editor.create(container, {
        value: presetSelect.value,
        language: 'lox',
    });
    
    presetSelect.addEventListener('change', (evt) => {
        editor.setValue(evt.target.value);
    });

    const runButton = document.querySelector('#run-button');

    runButton.addEventListener('click', () => {
        console.log()
    });
});