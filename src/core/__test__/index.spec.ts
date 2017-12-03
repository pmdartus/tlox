import Runner from '../runner';
import { Logger } from '../logger';

enum LogType {
    DEBUG,
    LOG,
    WARN,
    ERROR,
}

interface LogLine {
    type: LogType;
    msg: string;
}

class TestLogger implements Logger {
    logs: LogLine[] = [];

    debug(msg: string) {
        this.logs.push({
            type: LogType.DEBUG,
            msg,
        });
    }

    log(msg: string) {
        this.logs.push({
            type: LogType.LOG,
            msg,
        });
    }

    warning(msg: string) {
        this.logs.push({
            type: LogType.WARN,
            msg,
        });
    }

    error(msg: string) {
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
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '1' }]);
    });

    test('boolean', () => {
        runner.run(`print true;`);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: 'true' }]);
    });

    test('addition', () => {
        runner.run(`print 1 + 2;`);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '3' }]);
    });

    test('associativity', () => {
        runner.run(`print 3 * 5 - 2;`);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '13' }]);
    });

    test('grouping', () => {
        runner.run(`print 3 * (5 - 2);`);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '9' }]);
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

    test('while', () => {
        runner.run(`
            var i = 0;
            while (i < 3) {
                i = i + 1;
            }
            print i;
        `);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '3' }]);
    });

    test('while - break', () => {
        runner.run(`
            var i = 0;
            while (i < 10) {
                if (i > 5) {
                    break;
                }
                i = i + 1;
            }
            print i;
        `);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '6' }]);
    });

    test('while - break inner', () => {
        runner.run(`
            var i = 0;
            while (i < 3) {
                while (true) {
                    if (i > 1) {
                        break;
                    }

                    print "inner" + i;
                    i = i + 1;
                }
                print "outer" + i;
                i = i + 1;
            }
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: 'inner0' },
            { type: LogType.LOG, msg: 'inner1' },
            { type: LogType.LOG, msg: 'outer2' },
        ]);
    });

    test('top level break', () => {
        runner.run(`
            if (true) {
                break;
            }
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg:
                    '[3:16] Error at "break": Must be inside a loop to use "break".',
            },
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
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '3' }]);
    });

    test('for loop - no init', () => {
        runner.run(`
            var acc = 0;
            var i = 0;
            for (; i < 3; i = i + 1) {
                acc = acc + i;
            }
            print acc;
        `);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '3' }]);
    });
});

describe('function', () => {
    test('call', () => {
        runner.run(`
            fun sayHello(first, last) {
                print "Hello " + first + " " + last + "!";
            }
            sayHello("John", "Doe");
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: 'Hello John Doe!' },
        ]);
    });

    test('validates parameters', () => {
        runner.run(`
            fun sayHello(first, last) {
                print "Hello " + first + " " + last + "!";
            }
            sayHello("John");
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg: '[5:27] Expected 2 arguments but got 1.',
            },
        ]);
    });

    test('validate parameters count', () => {
        runner.run(`
            fun sayHello(a, b, c, d, e, f, g, h, i) {}
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg:
                    '[2:49] Error at "i": Cannot have more than 8 parameters.',
            },
        ]);
    });

    test('return value', () => {
        runner.run(`
            fun fibonacci(n) {
                if (n <= 1) return n;
                return fibonacci(n - 2) + fibonacci(n - 1);
            }
            
            print fibonacci(10);
        `);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: '55' }]);
    });

    test('lambda', () => {
        runner.run(`
            fun thrice(fn) {
                for (var i = 1; i <= 3; i = i + 1) {
                    fn(i);
                }
            }
            
            thrice(fun (a) {
                print a;
            });
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '1' },
            { type: LogType.LOG, msg: '2' },
            { type: LogType.LOG, msg: '3' },
        ]);
    });

    test('closure', () => {
        runner.run(`
            fun counter() {
                var value = 0;
                fun inc () {
                    value = value + 1;
                    return value;
                }
                return inc;
            }

            var c = counter();
            print c();
            print c();
            print c();
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '1' },
            { type: LogType.LOG, msg: '2' },
            { type: LogType.LOG, msg: '3' },
        ]);
    });
});

describe('scope', () => {
    test('resolver', () => {
        runner.run(`
            var a = "global";
            {
                fun showA() {
                    print a;
                }
                
                showA();
                
                var a = "block";
                print a;

                showA();
            }
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: 'global' },
            { type: LogType.LOG, msg: 'block' },
            { type: LogType.LOG, msg: 'global' },
        ]);
    });

    test('top level return', () => {
        runner.run(`
            return 1;
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg:
                    '[2:12] Error at "return": Cannot return from top level.',
            },
        ]);
    });

    test('duplicate variable declaration', () => {
        runner.run(`
            var a = 0;
            var a = 1;
            {
                var b = 0;
                var b = 1;

                print b;
            }
            print a;
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg:
                    '[6:20] Error at "b": Duplicate variable declaration in the scope.',
            },
        ]);
    });

    test('read var before init', () => {
        runner.run(`
            {
                var a = a;
                print a;
            }
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg:
                    '[3:24] Error at "a": Cannot read variable before own init.',
            },
        ]);
    });

    test('unused variable', () => {
        runner.run(`
            {
                var a;
            }
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg: '[3:20] Error at "a": Unused variable.',
            },
        ]);
    });
});

describe('environment', () => {
    test('global - clock', () => {
        runner.run(`
            var before = clock();
            while (clock() - before < 50) {}
            var after = clock();
            print after - before;
        `);

        expect(logger.logs).toHaveLength(1);

        const { type, msg } = logger.logs[0];
        expect(type).toBe(LogType.LOG);

        const elapsed = parseInt(msg);
        expect(elapsed).toBeGreaterThanOrEqual(50);
    });

    test('usage of undefined variable', () => {
        runner.run(`
            print a;
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg: '[2:18] Undefined variable for "a".',
            },
        ]);
    });

    test('assignment of undefined variable', () => {
        runner.run(`
            a = 1;
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg: '[2:12] Undefined variable for "a".',
            },
        ]);
    });
});

describe('class', () => {
    test('print class', () => {
        runner.run(`
            class Bagel {}
            print Bagel;
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '<Class Bagel>' },
        ]);
    });

    test('print instance', () => {
        runner.run(`
            class Bagel {}
            var bagel = Bagel();
            print bagel;
        `);
        expect(logger.logs).toEqual([
            { type: LogType.LOG, msg: '<Instance Bagel>' },
        ]);
    });

    test('get/set property', () => {
        runner.run(`
            class Bagel {}
            var bagel = Bagel();
            bagel.flavor = "plain";
            print bagel.flavor;
        `);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: 'plain' }]);
    });

    test('method call', () => {
        runner.run(`
            class Bagel {
                printFlavor() {
                    print "plain";
                }
            }
            var bagel = Bagel();
            bagel.printFlavor();
        `);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: 'plain' }]);
    });

    test('this', () => {
        runner.run(`
            class Bagel {
                printFlavor() {
                    print this.flavor + "!";
                }
            }
            var bagel = Bagel();
            bagel.flavor = "plain";
            bagel.printFlavor();
        `);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: 'plain!' }]);
    });

    test('this - dereferenced', () => {
        runner.run(`
            class Bagel {
                printFlavor() {
                    print this.flavor + "!";
                }
            }
            var bagel = Bagel();
            var b = bagel.printFlavor;
            bagel.flavor = "plain";
            b();
        `);
        expect(logger.logs).toEqual([{ type: LogType.LOG, msg: 'plain!' }]);
    });

    test('this - illegal', () => {
        runner.run(`
            fun foo() {
                return this.bar;
            }
            foo();
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg:
                    '[3:23] Error at "this": Can only be used in class methods.',
            },
        ]);
    });

    test('intializer', () => {
        runner.run(`
            class Bagel {
                init(flavor) {
                    this.flavor = flavor;
                }
            }
            var b = Bagel("plain");
            print b.flavor;
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.LOG,
                msg: 'plain',
            },
        ]);
    });

    test('initializer - return', () => {
        runner.run(`
            class Foo {
                init() {
                    return "something else";
                }
            }
            Foo();
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.ERROR,
                msg:
                    '[4:20] Error at "return": Cannot return a value from the intializer.',
            },
        ]);
    });

    test('static method', () => {
        runner.run(`
            class Math {
                class square(n) {
                    return n * n;
                }
            }
            
            print Math.square(3);
        `);
        expect(logger.logs).toEqual([
            {
                type: LogType.LOG,
                msg: '9',
            },
        ]);
    });
});
