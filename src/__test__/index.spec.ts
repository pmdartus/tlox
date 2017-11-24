import Runner from '../runner';
import { Logger } from '../logger';

enum LogType {
    DEBUG,
    LOG,
    WARN,
    ERROR
}

interface LogLine {
    type: LogType,
    msg: string
}

class TestLogger implements Logger {
    logs: LogLine[] = [];

    debug(msg) {
        this.logs.push({
            type: LogType.DEBUG,
            msg,
        });
    }

    log(msg) {
        this.logs.push({
            type: LogType.LOG,
            msg,
        });
    }

    warning(msg) {
        this.logs.push({
            type: LogType.WARN,
            msg,
        });
    }

    error(msg) {
        this.logs.push({
            type: LogType.ERROR,
            msg,
        });
    }
}

let logger: TestLogger;
let runner: Runner;

beforeEach(() => {
    logger = new TestLogger();
    runner = new Runner(logger);
});

describe('expressions', () => {
    test('number', () => {
        runner.run(`print 1;`);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '1' }
        ]);
    });

    test('boolean', () => {
        runner.run(`print true;`);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: 'true' }
        ]);
    });

    test('addition', () => {
        runner.run(`print 1 + 2;`);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '3' }
        ]);
    });

    test('associativity', () => {
        runner.run(`print 3 * 5 - 2;`);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '13' }
        ]);
    });

    test('grouping', () => {
        runner.run(`print 3 * (5 - 2);`);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '9' }
        ]);
    });

    test('logical', () => {
        runner.run(`
            print true and false;
            print "hello" or 2;
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: 'false' },
            { type: LogType.LOG, msg: 'hello' },
        ]);
    });
});

describe('flow control', () => {
    test('if/else', () => {
        runner.run(`
            if (true) {
                print "I am true";
            }
            
            var cond = true;
            if (cond) {
                print "I am also true";
            }
            
            if (false) {
                print "Should not print";
            } else {
                print "Should print else";
            }
        `);

        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: 'I am true' },
            { type: LogType.LOG, msg: 'I am also true' },
            { type: LogType.LOG, msg: 'Should print else' },
        ]);
    });
    
    test('for loop', () => {
        runner.run(`
            var acc = 0;
            for (var i = 0; i < 3; i = i + 1) {
                acc = acc + i;
            }
            print acc;
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '3' },
        ]);
    });
});