import * as fs from 'fs';
import * as readline from 'readline';

import Runner from './runner';
import { Logger } from './logger';

const cliLogger = {
    debug(msg: string) {
        console.debug(msg);
    },

    log(msg: string) {
        console.log(msg);
    },

    warning(msg: string) {
        console.warn(msg);
    },

    error(msg: string) {
        console.error(msg);
    },
};

const args = process.argv.slice(2);
const runner = new Runner(cliLogger);

if (args.length > 1) {
    console.log('Usage: jslox [script]');
} else if (args.length === 1) {
    runFile(runner, args[0]);
} else {
    runPrompt(runner);
}

function runFile(runner: Runner, file: string) {
    runner.run(fs.readFileSync(file, 'utf-8'));

    if (runner.hadError) {
        process.exit();
    }
}

function runPrompt(runner: Runner) {
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
