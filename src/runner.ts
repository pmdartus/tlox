import Scanner from './scanner';

export default class Runner {
    hadError = false;

    run(source: string) {
        const scanner = new Scanner(source, this);
        const tokens = scanner.scanTokens();

        for (let token of tokens) {
            console.log(String(token));
        }
    }

    error(line: number, message: string) {
        this.reportError(line, '', message);
    }

    reportError(line: number, where: string, message: string) {
        this.hadError = true;
        console.error(`[line ${line}] Error ${where}: ${message}`);
    }
}
