import * as fs from 'fs';
import * as readline from 'readline';

import Runner from './runner';

const args = process.argv.slice(2);

if (args.length > 1) {
    console.log('Usage: jslox [script]');
} else if (args.length === 1) {
    runFile(args[0]);
} else {
    runPrompt();
}

function runFile(file: string) {
    const runner = new Runner();
    runner.run(fs.readFileSync(file, 'utf-8'));

    if (runner.hadError) {
        process.exit();
    }
}

function runPrompt() {
    const runner = new Runner();
    const lineReader = readline.createInterface(process.stdin, process.stdout);

    lineReader.prompt();

    lineReader.on('line', input => {
        runner.run(input);
        runner.hadError = false;

        lineReader.prompt();
    });

    lineReader.on('close', () => {
        console.log('Bye!');
        process.exit(0);
    });
}
