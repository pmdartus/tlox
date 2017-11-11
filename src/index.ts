import * as fs from 'fs';
import * as readline from 'readline';

import Scanner from './scanner';

const args = process.argv.slice(2);

if (args.length > 1) {
    console.log('Usage: jslox [script]')
} else if (args.length === 1) {
    runFile(args[0])
} else {
    runPrompt();
}

function runFile(file: string) {
    Runner.run(fs.readFileSync(file, 'utf-8'));

    if (Runner.hadError) {
        process.exit()
    }
}

function runPrompt() {
    const lineReader = readline.createInterface(
        process.stdin,
        process.stdout
    );

    lineReader.prompt();

    lineReader.on('line', input => {
        Runner.run(input);
        Runner.hadError = false;

        lineReader.prompt();
    });

    lineReader.on('close', () => {
        console.log('Bye!');
        process.exit(0);
    })
}

export class Runner {
    static hadError = false;

    static run(source: string) {
        const scanner = new Scanner(source);
        const tokens = scanner.scanTokens();
    
        for (let token of tokens) {
            console.log(String(token));
        }
    }

    static error(line: number, message: string) {
        this.reportError(line, '', message);
    }

    static reportError(line: number, where: string, message: string) {
        this.hadError = true;
        console.error(`[line ${line}] Error ${where}: ${message}`);
    }
}