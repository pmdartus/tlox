/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Token {
    constructor(type, lexeme, literal, line) {
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
        this.line = line;
    }
    toString() {
        return `[${this.type}] ${this.lexeme} ${this.literal}`;
    }
    static equals(a, b) {
        return (a.type === b.type &&
            a.lexeme === b.lexeme &&
            a.literal === b.literal &&
            a.line === b.line);
    }
}
exports.default = Token;
var TokenType;
(function (TokenType) {
    // Single character tokens.
    TokenType[TokenType["LEFT_PAREN"] = 0] = "LEFT_PAREN";
    TokenType[TokenType["RIGHT_PAREN"] = 1] = "RIGHT_PAREN";
    TokenType[TokenType["LEFT_BRACE"] = 2] = "LEFT_BRACE";
    TokenType[TokenType["RIGHT_BRACE"] = 3] = "RIGHT_BRACE";
    TokenType[TokenType["COMMA"] = 4] = "COMMA";
    TokenType[TokenType["DOT"] = 5] = "DOT";
    TokenType[TokenType["MINUS"] = 6] = "MINUS";
    TokenType[TokenType["PLUS"] = 7] = "PLUS";
    TokenType[TokenType["SEMI"] = 8] = "SEMI";
    TokenType[TokenType["SLASH"] = 9] = "SLASH";
    TokenType[TokenType["STAR"] = 10] = "STAR";
    // One of two characters tokens.
    TokenType[TokenType["BANG"] = 11] = "BANG";
    TokenType[TokenType["BANG_EQUAL"] = 12] = "BANG_EQUAL";
    TokenType[TokenType["EQUAL"] = 13] = "EQUAL";
    TokenType[TokenType["EQUAL_EQUAL"] = 14] = "EQUAL_EQUAL";
    TokenType[TokenType["GREATER"] = 15] = "GREATER";
    TokenType[TokenType["GREATE_EQUAL"] = 16] = "GREATE_EQUAL";
    TokenType[TokenType["LESS"] = 17] = "LESS";
    TokenType[TokenType["LESS_EQUAL"] = 18] = "LESS_EQUAL";
    // Literals
    TokenType[TokenType["IDENTIFIER"] = 19] = "IDENTIFIER";
    TokenType[TokenType["STRING"] = 20] = "STRING";
    TokenType[TokenType["NUMBER"] = 21] = "NUMBER";
    // Keywords
    TokenType[TokenType["AND"] = 22] = "AND";
    TokenType[TokenType["CLASS"] = 23] = "CLASS";
    TokenType[TokenType["ELSE"] = 24] = "ELSE";
    TokenType[TokenType["FALSE"] = 25] = "FALSE";
    TokenType[TokenType["FUN"] = 26] = "FUN";
    TokenType[TokenType["FOR"] = 27] = "FOR";
    TokenType[TokenType["IF"] = 28] = "IF";
    TokenType[TokenType["NIL"] = 29] = "NIL";
    TokenType[TokenType["OR"] = 30] = "OR";
    TokenType[TokenType["PRINT"] = 31] = "PRINT";
    TokenType[TokenType["RETURN"] = 32] = "RETURN";
    TokenType[TokenType["SUPER"] = 33] = "SUPER";
    TokenType[TokenType["THIS"] = 34] = "THIS";
    TokenType[TokenType["TRUE"] = 35] = "TRUE";
    TokenType[TokenType["VAR"] = 36] = "VAR";
    TokenType[TokenType["WHILE"] = 37] = "WHILE";
    TokenType[TokenType["BREAK"] = 38] = "BREAK";
    // Others
    TokenType[TokenType["EOF"] = 39] = "EOF";
})(TokenType = exports.TokenType || (exports.TokenType = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __webpack_require__(0);
const environment_1 = __webpack_require__(3);
const callable_1 = __webpack_require__(10);
const class_1 = __webpack_require__(11);
class RuntimeException extends Error {
    constructor(token, message) {
        super(message);
        this.token = token;
    }
}
exports.RuntimeException = RuntimeException;
class BreakException extends Error {
}
class ReturnException extends Error {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.ReturnException = ReturnException;
class Interpreter {
    constructor(runner) {
        this.locals = new Map();
        this.globals = new environment_1.default();
        this.evironment = this.globals;
        this.runner = runner;
        this.globals.define('clock', new class Clock extends callable_1.LoxCallable {
            constructor() {
                super(...arguments);
                this.arity = 0;
            }
            call() {
                return Date.now();
            }
        }());
    }
    interpret(statements) {
        try {
            for (let statement of statements) {
                this.execute(statement);
            }
        }
        catch (error) {
            if (error instanceof RuntimeException) {
                this.runner.runtimeError(error);
            }
        }
    }
    execute(statement) {
        statement.accept(this);
    }
    visitFunctionStmt(stmt) {
        const fn = new callable_1.LoxFunction(stmt.name.lexeme, stmt.fn, this.evironment, false);
        this.evironment.define(stmt.name.lexeme, fn);
    }
    visitFunctionExpr(expr) {
        return new callable_1.LoxFunction(undefined, expr, this.evironment, false);
    }
    visitReturnStmt(stmt) {
        let value;
        if (stmt.value !== null) {
            value = this.evaluate(stmt.value);
        }
        throw new ReturnException(value);
    }
    visitVarStmt(stmt) {
        let value = null;
        if (stmt.initializer != null) {
            value = this.evaluate(stmt.initializer);
        }
        this.evironment.define(stmt.name.lexeme, value);
    }
    visitVariableExpr(expr) {
        return this.lookupVariable(expr.name, expr);
    }
    visitClassStmt(stmt) {
        this.evironment.define(stmt.name.lexeme, null);
        const classMethods = {};
        for (let method of stmt.classMethods) {
            classMethods[method.name.lexeme] = new callable_1.LoxFunction(method.name.lexeme, method.fn, this.evironment, false);
        }
        const metaclass = new class_1.LoxClass(null, `${stmt.name.lexeme}meta`, classMethods);
        const methods = {};
        for (let method of stmt.methods) {
            methods[method.name.lexeme] = new callable_1.LoxFunction(method.name.lexeme, method.fn, this.evironment, method.name.lexeme === 'init');
        }
        const klass = new class_1.LoxClass(metaclass, stmt.name.lexeme, methods);
        this.evironment.assign(stmt.name, klass);
    }
    visitThisExpr(expr) {
        return this.lookupVariable(expr.keyword, expr);
    }
    visitExpressionStmt(stmt) {
        this.evaluate(stmt.expr);
    }
    visitPrintStmt(stmt) {
        const value = this.evaluate(stmt.expr);
        this.runner.logger.log(value.toString());
    }
    visitBlockStmt(stmt) {
        this.executeBlock(stmt, new environment_1.default(this.evironment));
    }
    visitIfStmt(stmt) {
        if (this.isTruthy(this.evaluate(stmt.condition))) {
            this.execute(stmt.thenBranch);
        }
        else if (stmt.elseBranch) {
            this.execute(stmt.elseBranch);
        }
    }
    visitWhileStmt(stmt) {
        try {
            while (this.isTruthy(this.evaluate(stmt.condition))) {
                this.execute(stmt.body);
            }
        }
        catch (error) {
            if (error instanceof BreakException) {
                return;
            }
            throw error;
        }
    }
    visitBreakStmt() {
        throw new BreakException();
    }
    visitLogicalExpr(expr) {
        const left = this.evaluate(expr.left);
        if (expr.operator.type === token_1.TokenType.OR) {
            if (this.isTruthy(left)) {
                return left;
            }
        }
        else {
            if (!this.isTruthy(left)) {
                return left;
            }
        }
        return this.evaluate(expr.right);
    }
    visitAssignExpr(expr) {
        const value = this.evaluate(expr.value);
        const distance = this.locals.get(expr);
        if (distance !== undefined) {
            this.evironment.assignAt(distance, expr.name, value);
        }
        else {
            this.globals.assign(expr.name, value);
        }
        return value;
    }
    visitLiteralExpr(expr) {
        return expr.value;
    }
    visitGroupingExpr(expr) {
        return this.evaluate(expr.expr);
    }
    visitUnaryExpr(expr) {
        const right = this.evaluate(expr.right);
        switch (expr.operation.type) {
            case token_1.TokenType.MINUS:
                return -right;
            case token_1.TokenType.BANG:
                return !this.isTruthy(right);
        }
        return null;
    }
    visitCallExpr(expr) {
        const fn = this.evaluate(expr.callee);
        if (!(fn instanceof callable_1.LoxCallable) && !(fn instanceof class_1.LoxClass)) {
            throw new RuntimeException(expr.paren, 'Can only call function and class methods.');
        }
        const args = expr.args.map(arg => this.evaluate(arg));
        if (args.length !== fn.arity) {
            throw new RuntimeException(expr.paren, `Expected ${fn.arity} arguments but got ${args.length}.`);
        }
        return fn.call(this, args);
    }
    visitGetExpr(expr) {
        const object = this.evaluate(expr.object);
        if (object instanceof class_1.LoxInstance) {
            return object.get(expr.name);
        }
        throw new RuntimeException(expr.name, 'Only instances have properties.');
    }
    visitSetExpr(expr) {
        const object = this.evaluate(expr.object);
        if (!(object instanceof class_1.LoxInstance)) {
            throw new RuntimeException(expr.name, 'Only instances have fields.');
        }
        const value = this.evaluate(expr.value);
        object.set(expr.name, value);
        return value;
    }
    visitBinaryExpr(expr) {
        const left = this.evaluate(expr.left);
        const right = this.evaluate(expr.right);
        switch (expr.operator.type) {
            case token_1.TokenType.PLUS:
                if (typeof left === 'string' || typeof right === 'string') {
                    return String(left) + String(right);
                }
                else if (typeof left === 'number' &&
                    typeof right === 'number') {
                    return left + right;
                }
                throw new RuntimeException(expr.operator, 'Operands must be 2 strings or numbers');
            case token_1.TokenType.MINUS:
                this.checkNumberOperands(expr.operator, left, right);
                return left - right;
            case token_1.TokenType.SLASH:
                this.checkNumberOperands(expr.operator, left, right);
                return left / right;
            case token_1.TokenType.STAR:
                this.checkNumberOperands(expr.operator, left, right);
                return left * right;
            case token_1.TokenType.GREATER:
                this.checkNumberOperands(expr.operator, left, right);
                return left > right;
            case token_1.TokenType.GREATE_EQUAL:
                this.checkNumberOperands(expr.operator, left, right);
                return left >= right;
            case token_1.TokenType.LESS:
                this.checkNumberOperands(expr.operator, left, right);
                return left < right;
            case token_1.TokenType.LESS_EQUAL:
                this.checkNumberOperands(expr.operator, left, right);
                return left <= right;
            case token_1.TokenType.BANG_EQUAL:
                return !this.isEqual(left, right);
            case token_1.TokenType.EQUAL_EQUAL:
                return this.isEqual(left, right);
        }
        return null;
    }
    executeBlock(stmt, environment) {
        const previousEnv = this.evironment;
        try {
            this.evironment = environment;
            for (let statement of stmt.statements) {
                this.execute(statement);
            }
        }
        finally {
            this.evironment = previousEnv;
        }
    }
    evaluate(expr) {
        return expr.accept(this);
    }
    resolve(expr, depth) {
        this.locals.set(expr, depth);
    }
    lookupVariable(name, expr) {
        const distance = this.locals.get(expr);
        if (distance !== undefined) {
            return this.evironment.getAt(distance, name.lexeme);
        }
        else {
            return this.globals.get(name);
        }
    }
    isTruthy(value) {
        return typeof value === 'boolean'
            ? value
            : value == null ? false : true;
    }
    isEqual(a, b) {
        return typeof a === typeof b ? a == b : false;
    }
    checkNumberOperand(operator, operand) {
        if (typeof operand !== 'number') {
            throw new RuntimeException(operator, 'Operand must be a number');
        }
    }
    checkNumberOperands(operator, left, right) {
        if (typeof left !== 'number' && typeof right !== 'number') {
            throw new RuntimeException(operator, 'Operands must be 2 numbers');
        }
    }
}
exports.default = Interpreter;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* /!\ Genreated via "npm run genreate-ast" /!\ */
Object.defineProperty(exports, "__esModule", { value: true });
class Stmt {
}
exports.Stmt = Stmt;
class Block extends Stmt {
    constructor(statements) {
        super();
        this.statements = statements;
    }
    accept(visitor) {
        return visitor.visitBlockStmt(this);
    }
}
exports.Block = Block;
class Expression extends Stmt {
    constructor(expr) {
        super();
        this.expr = expr;
    }
    accept(visitor) {
        return visitor.visitExpressionStmt(this);
    }
}
exports.Expression = Expression;
class Class extends Stmt {
    constructor(name, methods, classMethods) {
        super();
        this.name = name;
        this.methods = methods;
        this.classMethods = classMethods;
    }
    accept(visitor) {
        return visitor.visitClassStmt(this);
    }
}
exports.Class = Class;
class If extends Stmt {
    constructor(condition, thenBranch, elseBranch) {
        super();
        this.condition = condition;
        this.thenBranch = thenBranch;
        this.elseBranch = elseBranch;
    }
    accept(visitor) {
        return visitor.visitIfStmt(this);
    }
}
exports.If = If;
class While extends Stmt {
    constructor(condition, body) {
        super();
        this.condition = condition;
        this.body = body;
    }
    accept(visitor) {
        return visitor.visitWhileStmt(this);
    }
}
exports.While = While;
class Break extends Stmt {
    constructor() {
        super();
    }
    accept(visitor) {
        return visitor.visitBreakStmt(this);
    }
}
exports.Break = Break;
class Print extends Stmt {
    constructor(expr) {
        super();
        this.expr = expr;
    }
    accept(visitor) {
        return visitor.visitPrintStmt(this);
    }
}
exports.Print = Print;
class Var extends Stmt {
    constructor(name, initializer) {
        super();
        this.name = name;
        this.initializer = initializer;
    }
    accept(visitor) {
        return visitor.visitVarStmt(this);
    }
}
exports.Var = Var;
class Function extends Stmt {
    constructor(name, fn) {
        super();
        this.name = name;
        this.fn = fn;
    }
    accept(visitor) {
        return visitor.visitFunctionStmt(this);
    }
}
exports.Function = Function;
class Return extends Stmt {
    constructor(keyword, value) {
        super();
        this.keyword = keyword;
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitReturnStmt(this);
    }
}
exports.Return = Return;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpreter_1 = __webpack_require__(1);
class Environment {
    constructor(enclosing) {
        this.values = new Map();
        this.enclosing = enclosing;
    }
    define(name, value) {
        this.values.set(name, value);
    }
    assign(name, value) {
        if (this.values.has(name.lexeme)) {
            this.values.set(name.lexeme, value);
        }
        else if (this.enclosing) {
            this.enclosing.assign(name, value);
        }
        else {
            throw new interpreter_1.RuntimeException(name, `Undefined variable for "${name.lexeme}".`);
        }
    }
    assignAt(distance, name, value) {
        return this.ancestor(distance).values.set(name.lexeme, value);
    }
    get(name) {
        if (this.values.has(name.lexeme)) {
            return this.values.get(name.lexeme);
        }
        else if (this.enclosing) {
            return this.enclosing.get(name);
        }
        throw new interpreter_1.RuntimeException(name, `Undefined variable for "${name.lexeme}".`);
    }
    getAt(distance, name) {
        return this.ancestor(distance).values.get(name);
    }
    ancestor(distance) {
        return distance === 0 ? this : this.enclosing.ancestor(distance - 1);
    }
}
exports.default = Environment;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const presets_1 = __webpack_require__(5);
const runner_1 = __webpack_require__(6);
const presetSelect = document.querySelector('#preset-select');
const runButton = document.querySelector('#run-button');
const editorContainer = document.querySelector('#left-container');
const logContainer = document.querySelector('#right-container');
for (let preset of presets_1.presets) {
    const option = document.createElement('option');
    option.text = preset.name;
    option.value = preset.value;
    presetSelect.appendChild(option);
}
window.require.config({ paths: { 'vs': 'monaco-editor' } });
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
    window.addEventListener('resize', () => {
        editor.layout();
        log.layout();
    });
    presetSelect.addEventListener('change', () => {
        editor.setValue(presetSelect.value);
    });
    runButton.addEventListener('click', () => {
        const value = editor.getValue();
        const logLines = [];
        const addLogLine = function (msg) {
            logLines.push(msg);
            log.setValue(logLines.join('\n'));
        };
        const runner = new runner_1.default({
            debug(msg) {
                console.debug(msg);
                addLogLine(`🔎 ${msg}`);
            },
            log(msg) {
                console.log(msg);
                addLogLine(`  ${msg}`);
            },
            warning(msg) {
                console.warn(msg);
                addLogLine(`⚠️ ${msg}`);
            },
            error(msg) {
                console.error(msg);
                addLogLine(`️❌ ${msg}`);
            },
        });
        runner.run(value);
    });
    document.body.classList.add('ready');
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.presets = [
    {
        name: 'Hello world!',
        value: `print "Hello World!";`,
    },
    {
        name: 'Expressions',
        value: (`var avg = (5 + 7) / 2;
print "Average: " + avg;
`)
    },
    {
        name: 'Flow Control',
        value: (`var condition = true;
if (condition) {
    print "yes";
} else {
    print "no";
}

var a = 1;
while (a < 10) {
    print a;
    a = a + 1;
}

for (var a = 1; a < 10; a = a + 1) {
    print a;
}
`)
    },
    {
        name: 'Function',
        value: (`fun fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

for (var i = 0; i < 10; i = i + 1) {
    print fibonacci(i);
}

fun makeClosure() {
    var i = 0;
    fun count() {
        i = i + 1;
        print i;
    }

  return count;
}

var counter = makeClosure();
for (var i = 0; i < 10; i = i + 1) {
    print counter();
}

fun times(n, fn) {
    for (var i = 0; i < n; i = i + 1) {
        fn(n);
    }
}

times(fn (n) {
    print n;
})
`)
    },
    {
        name: 'Classes',
        value: (`// Todo
`)
    }
];


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = __webpack_require__(7);
const scanner_1 = __webpack_require__(9);
const token_1 = __webpack_require__(0);
const interpreter_1 = __webpack_require__(1);
const resolver_1 = __webpack_require__(12);
class Runner {
    constructor(logger) {
        this.hadError = false;
        this.hadRuntimeError = false;
        this.interpreter = new interpreter_1.default(this);
        this.logger = logger;
    }
    run(source) {
        const scanner = new scanner_1.default(source, this);
        const tokens = scanner.scanTokens();
        const parser = new parser_1.default(tokens, this);
        const statements = parser.parse();
        if (this.hadError) {
            return;
        }
        const resolver = new resolver_1.default(this.interpreter, this);
        resolver.resolve(statements);
        if (this.hadError) {
            return;
        }
        this.interpreter.interpret(statements);
    }
    error(line, message) {
        this.reportError(line, '', message);
    }
    errorToken(token, message) {
        if (token.type === token_1.TokenType.EOF) {
            this.reportError(token.line, 'at end', message);
        }
        else {
            this.reportError(token.line, `at "${token.lexeme}"`, message);
        }
    }
    runtimeError(error) {
        this.logger.error(`[line ${error.token.line}] ${error.message}`);
        this.hadRuntimeError = true;
    }
    reportError(line, where, message) {
        this.logger.error(`[line ${line}] Error ${where}: ${message}`);
        this.hadError = true;
    }
}
exports.default = Runner;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __webpack_require__(0);
const Stmt = __webpack_require__(2);
const Expr = __webpack_require__(8);
const stmt_1 = __webpack_require__(2);
class ParserError extends Error {
}
class Parser {
    constructor(tokens, runner) {
        this.current = 0;
        this.loopDepth = 0;
        this.tokens = tokens;
        this.runner = runner;
    }
    parse() {
        const statements = [];
        while (!this.isAtEnd()) {
            const statement = this.declaration();
            if (statement) {
                statements.push(statement);
            }
        }
        return statements;
    }
    // declaration → funDecl | varDecl | classDecl | statement ;
    declaration() {
        try {
            if (this.match(token_1.TokenType.FUN)) {
                return this.function('function');
            }
            else if (this.match(token_1.TokenType.VAR)) {
                return this.varDeclaration();
            }
            else if (this.match(token_1.TokenType.CLASS)) {
                return this.classDeclaration();
            }
            else {
                return this.statement();
            }
        }
        catch (error) {
            if (error instanceof ParserError) {
                this.synchronize();
            }
        }
    }
    // funDecl -> "fun" function
    // function -> IDENTIFIER "(" parameters? ")" block
    function(kind) {
        const name = this.consume(token_1.TokenType.IDENTIFIER, `Expected ${kind} name.`);
        const body = this.functionBody(kind);
        return new Stmt.Function(name, body);
    }
    functionBody(kind) {
        this.consume(token_1.TokenType.LEFT_PAREN, `Expected "(" after ${kind} name.`);
        const parameters = [];
        if (!this.check(token_1.TokenType.RIGHT_PAREN)) {
            do {
                if (parameters.length >= 8) {
                    this.error(this.peek(), 'Cannot have more than 8 parameters.');
                }
                parameters.push(this.consume(token_1.TokenType.IDENTIFIER, 'Expected parameter name.'));
            } while (this.match(token_1.TokenType.COMMA));
        }
        this.consume(token_1.TokenType.RIGHT_PAREN, 'Expected ")" after parameters.');
        this.consume(token_1.TokenType.LEFT_BRACE, `Expected "{" before ${kind} body.`);
        const body = this.block();
        return new Expr.Function(parameters, body);
    }
    // classDecl -> IDENTIFIER "{" function* "}" ;
    classDeclaration() {
        const name = this.consume(token_1.TokenType.IDENTIFIER, 'Expected a name for the class.');
        this.consume(token_1.TokenType.LEFT_BRACE, 'Expected "{" after class name.');
        const methods = [];
        const classMethods = [];
        while (!this.isAtEnd() && !this.check(token_1.TokenType.RIGHT_BRACE)) {
            const isStatic = this.match(token_1.TokenType.CLASS);
            (isStatic ? classMethods : methods).push(this.function('method'));
        }
        this.consume(token_1.TokenType.RIGHT_BRACE, 'Expected "}" after class.');
        return new stmt_1.Class(name, methods, classMethods);
    }
    // varDecl -> IDENTIFIER ("=" expression)? ";" ;
    varDeclaration() {
        const name = this.consume(token_1.TokenType.IDENTIFIER, 'Expected a variable name');
        let initializer = this.match(token_1.TokenType.EQUAL)
            ? this.expression()
            : new Expr.Literal(null);
        this.consume(token_1.TokenType.SEMI, 'Expected ";" after variable declaration');
        return new Stmt.Var(name, initializer);
    }
    //statement → exprStmt | printStmt | block | ifStmt | whileStmt  | forStmt | breakStmt | returnStmt ;
    statement() {
        if (this.match(token_1.TokenType.PRINT)) {
            return this.printStatement();
        }
        else if (this.match(token_1.TokenType.LEFT_BRACE)) {
            return new Stmt.Block(this.block());
        }
        else if (this.match(token_1.TokenType.IF)) {
            return this.ifStatement();
        }
        else if (this.match(token_1.TokenType.WHILE)) {
            return this.whileStatement();
        }
        else if (this.match(token_1.TokenType.FOR)) {
            return this.forStatement();
        }
        else if (this.match(token_1.TokenType.BREAK)) {
            return this.breakStatement();
        }
        else if (this.match(token_1.TokenType.RETURN)) {
            return this.returnStatement();
        }
        else {
            return this.expressionStatement();
        }
    }
    // ifStmt → "if" "(" expression ")" statement ( "else" statement )? ;
    ifStatement() {
        this.consume(token_1.TokenType.LEFT_PAREN, 'Expected "(" after "if".');
        const condition = this.expression();
        this.consume(token_1.TokenType.RIGHT_PAREN, 'Expected ")" after if condition.');
        const thenBranch = this.statement();
        let elseBranch;
        if (this.match(token_1.TokenType.ELSE)) {
            elseBranch = this.statement();
        }
        return new Stmt.If(condition, thenBranch, elseBranch);
    }
    // whileStmt -> "while" "(" condition ")" statement ;
    whileStatement() {
        this.consume(token_1.TokenType.LEFT_PAREN, 'Expected "(" after "while".');
        const condition = this.expression();
        this.consume(token_1.TokenType.RIGHT_PAREN, 'Expected ")" after while condition.');
        try {
            this.loopDepth++;
            const body = this.statement();
            return new Stmt.While(condition, body);
        }
        finally {
            this.loopDepth--;
        }
    }
    // forStmt -> "for" "(" (varDecl | exprStmt | ";") expr? ";" expr?) statement ;
    // For loop is implemented by desugaring it to a while loop
    forStatement() {
        this.consume(token_1.TokenType.LEFT_PAREN, 'Expeceted "(" after "for".');
        // Get initializer
        let initializer;
        if (this.match(token_1.TokenType.SEMI)) {
            initializer = undefined;
        }
        else if (this.match(token_1.TokenType.VAR)) {
            initializer = this.varDeclaration();
        }
        else {
            initializer = this.expressionStatement();
        }
        // Get condition
        let condition;
        if (!this.check(token_1.TokenType.SEMI)) {
            condition = this.expression();
        }
        this.consume(token_1.TokenType.SEMI, 'Expected ";" after for condition.');
        // Get increment
        let increment;
        if (!this.check(token_1.TokenType.RIGHT_PAREN)) {
            increment = this.expression();
        }
        this.consume(token_1.TokenType.RIGHT_PAREN, 'Expected ")" after for clauses.');
        try {
            this.loopDepth++;
            // Get body
            let body = this.statement();
            // If the increment is defined, add it at the end of the body block
            if (increment) {
                body = new Stmt.Block([body, new Stmt.Expression(increment)]);
            }
            // If no condition is defined, then set it to true
            if (!condition) {
                condition = new Expr.Literal(true);
            }
            body = new Stmt.While(condition, body);
            // If an intializer is defined the add it before the while loop execution
            if (initializer) {
                body = new Stmt.Block([initializer, body]);
            }
            return body;
        }
        finally {
            this.loopDepth--;
        }
    }
    // breakStmt -> "break" ";" ;
    breakStatement() {
        if (this.loopDepth <= 0) {
            this.error(this.previous(), 'Must be inside a loop to use "break".');
        }
        this.consume(token_1.TokenType.SEMI, 'Expected ";" after "break".');
        return new Stmt.Break();
    }
    returnStatement() {
        const keywrod = this.previous();
        let value = new Expr.Literal(null);
        if (!this.check(token_1.TokenType.SEMI)) {
            value = this.expression();
        }
        this.consume(token_1.TokenType.SEMI, 'Expected ";" after return value.');
        return new Stmt.Return(keywrod, value);
    }
    // printStmt -> "print" expr ";" ;
    printStatement() {
        const expr = this.expression();
        this.consume(token_1.TokenType.SEMI, 'Expected ";" at the end of the expression.');
        return new Stmt.Print(expr);
    }
    // exprStmt -> expression ";"
    expressionStatement() {
        const expr = this.expression();
        this.consume(token_1.TokenType.SEMI, 'Expected ";" at the end of the expression.');
        return new Stmt.Expression(expr);
    }
    // block -> (declaration)* "}" ;
    block() {
        const statements = [];
        while (!this.check(token_1.TokenType.RIGHT_BRACE) && !this.isAtEnd()) {
            const statement = this.declaration();
            if (statement) {
                statements.push(statement);
            }
        }
        this.consume(token_1.TokenType.RIGHT_BRACE, 'Expected "}" after block.');
        return statements;
    }
    // expression → assignment
    expression() {
        return this.assignment();
    }
    // assignment -> ( call "." )? identifier "=" assignment | logic_or ;
    assignment() {
        const expr = this.or();
        if (this.match(token_1.TokenType.EQUAL)) {
            const equals = this.previous();
            const value = this.assignment();
            if (expr instanceof Expr.Variable) {
                return new Expr.Assign(expr.name, value);
            }
            else if (expr instanceof Expr.Get) {
                return new Expr.Set(expr.object, expr.name, value);
            }
            this.error(equals, 'Invalid assignment target.');
        }
        return expr;
    }
    // logic_or -> logic_and ( "||" logic_and )*
    or() {
        let expr = this.and();
        while (this.match(token_1.TokenType.OR) && !this.isAtEnd()) {
            const operator = this.previous();
            const right = this.and();
            expr = new Expr.Logical(expr, operator, right);
        }
        return expr;
    }
    // logic_and -> equality ( "&&" equality )*
    and() {
        let expr = this.equality();
        while (this.match(token_1.TokenType.AND) && !this.isAtEnd()) {
            const operator = this.previous();
            const right = this.and();
            expr = new Expr.Logical(expr, operator, right);
        }
        return expr;
    }
    // coma -> equality ( "," equality )* ;
    coma() {
        let expr = this.equality();
        while (this.match(token_1.TokenType.COMMA)) {
            const operator = this.previous();
            const right = this.equality();
            expr = new Expr.Binary(expr, operator, right);
        }
        return expr;
    }
    // equality → comparison ( ( "!=" | "==" ) comparison )* ;
    equality() {
        let expr = this.comparison();
        while (this.match(token_1.TokenType.BANG_EQUAL, token_1.TokenType.EQUAL_EQUAL)) {
            const operator = this.previous();
            const right = this.comparison();
            expr = new Expr.Binary(expr, operator, right);
        }
        return expr;
    }
    // comparison → addition ( ( ">" | ">=" | "<" | "<=" ) addition )* ;
    comparison() {
        let expr = this.addition();
        while (this.match(token_1.TokenType.GREATER, token_1.TokenType.GREATE_EQUAL, token_1.TokenType.LESS, token_1.TokenType.LESS_EQUAL)) {
            const operator = this.previous();
            const right = this.addition();
            expr = new Expr.Binary(expr, operator, right);
        }
        return expr;
    }
    // addition → multiplication ( ( "-" | "+" ) multiplication )* ;
    addition() {
        let expr = this.multiplication();
        while (this.match(token_1.TokenType.PLUS, token_1.TokenType.MINUS)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new Expr.Binary(expr, operator, right);
        }
        return expr;
    }
    // multiplication → unary ( ( "/" | "*" ) unary )* ;
    multiplication() {
        let expr = this.unary();
        while (this.match(token_1.TokenType.SLASH, token_1.TokenType.STAR)) {
            const operator = this.previous();
            const right = this.multiplication();
            expr = new Expr.Binary(expr, operator, right);
        }
        return expr;
    }
    // unary → ( "!" | "-" ) unary
    //         | call ;
    unary() {
        if (this.match(token_1.TokenType.BANG, token_1.TokenType.MINUS)) {
            const operator = this.previous();
            const right = this.unary();
            return new Expr.Unary(operator, right);
        }
        else {
            return this.call();
        }
    }
    // call -> primary ( "(" arguments? ")" | "." IDENTIFIER )* ;
    call() {
        let expr = this.primary();
        while (true) {
            if (this.match(token_1.TokenType.LEFT_PAREN)) {
                expr = this.finishCall(expr);
            }
            else if (this.match(token_1.TokenType.DOT)) {
                const name = this.consume(token_1.TokenType.IDENTIFIER, 'Expected property name after ".".');
                expr = new Expr.Get(expr, name);
            }
            else {
                break;
            }
        }
        return expr;
    }
    // arguments -> expr ("," expr)*
    finishCall(callee) {
        const args = [];
        if (!this.check(token_1.TokenType.RIGHT_PAREN)) {
            do {
                if (args.length > 8) {
                    this.error(this.peek(), 'Cannot have more than 8 arguments.');
                }
                args.push(this.expression());
            } while (this.match(token_1.TokenType.COMMA));
        }
        const paren = this.consume(token_1.TokenType.RIGHT_PAREN, 'Expected ")" after arguments.');
        return new Expr.Call(callee, paren, args);
    }
    // primary → NUMBER | STRING | "false" | "true" | "nil" | "(" expression ")" | INDENTIFIER ;
    primary() {
        if (this.match(token_1.TokenType.FALSE)) {
            return new Expr.Literal(false);
        }
        else if (this.match(token_1.TokenType.TRUE)) {
            return new Expr.Literal(true);
        }
        else if (this.match(token_1.TokenType.NIL)) {
            return new Expr.Literal(null);
        }
        if (this.match(token_1.TokenType.NUMBER, token_1.TokenType.STRING)) {
            return new Expr.Literal(this.previous().literal);
        }
        if (this.match(token_1.TokenType.LEFT_PAREN)) {
            let expr = this.expression();
            this.consume(token_1.TokenType.RIGHT_PAREN, `Expected ')' after expression.`);
            return new Expr.Grouping(expr);
        }
        if (this.match(token_1.TokenType.IDENTIFIER)) {
            return new Expr.Variable(this.previous());
        }
        if (this.match(token_1.TokenType.FUN)) {
            return this.functionBody('function');
        }
        if (this.match(token_1.TokenType.THIS)) {
            return new Expr.This(this.previous());
        }
        throw this.error(this.peek(), 'Expected expression');
    }
    match(...types) {
        for (let type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }
    check(type) {
        return this.isAtEnd() ? false : this.peek().type === type;
    }
    advance() {
        if (!this.isAtEnd()) {
            this.current++;
        }
        return this.previous();
    }
    isAtEnd() {
        return this.peek().type === token_1.TokenType.EOF;
    }
    peek() {
        return this.tokens[this.current];
    }
    previous() {
        return this.tokens[this.current - 1];
    }
    consume(type, message) {
        if (this.check(type)) {
            return this.advance();
        }
        else {
            throw this.error(this.peek(), message);
        }
    }
    synchronize() {
        this.advance();
        while (!this.isAtEnd()) {
            switch (this.peek().type) {
                case token_1.TokenType.CLASS:
                case token_1.TokenType.FUN:
                case token_1.TokenType.VAR:
                case token_1.TokenType.FOR:
                case token_1.TokenType.IF:
                case token_1.TokenType.WHILE:
                case token_1.TokenType.PRINT:
                case token_1.TokenType.RETURN:
                    return;
            }
            this.advance();
        }
    }
    error(token, message) {
        this.runner.errorToken(token, message);
        return new ParserError();
    }
}
exports.default = Parser;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* /!\ Genreated via "npm run genreate-ast" /!\ */
Object.defineProperty(exports, "__esModule", { value: true });
class Expr {
}
exports.Expr = Expr;
class Assign extends Expr {
    constructor(name, value) {
        super();
        this.name = name;
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitAssignExpr(this);
    }
}
exports.Assign = Assign;
class Binary extends Expr {
    constructor(left, operator, right) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitBinaryExpr(this);
    }
}
exports.Binary = Binary;
class Grouping extends Expr {
    constructor(expr) {
        super();
        this.expr = expr;
    }
    accept(visitor) {
        return visitor.visitGroupingExpr(this);
    }
}
exports.Grouping = Grouping;
class Literal extends Expr {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitLiteralExpr(this);
    }
}
exports.Literal = Literal;
class Unary extends Expr {
    constructor(operation, right) {
        super();
        this.operation = operation;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitUnaryExpr(this);
    }
}
exports.Unary = Unary;
class Call extends Expr {
    constructor(callee, paren, args) {
        super();
        this.callee = callee;
        this.paren = paren;
        this.args = args;
    }
    accept(visitor) {
        return visitor.visitCallExpr(this);
    }
}
exports.Call = Call;
class Get extends Expr {
    constructor(object, name) {
        super();
        this.object = object;
        this.name = name;
    }
    accept(visitor) {
        return visitor.visitGetExpr(this);
    }
}
exports.Get = Get;
class Set extends Expr {
    constructor(object, name, value) {
        super();
        this.object = object;
        this.name = name;
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitSetExpr(this);
    }
}
exports.Set = Set;
class This extends Expr {
    constructor(keyword) {
        super();
        this.keyword = keyword;
    }
    accept(visitor) {
        return visitor.visitThisExpr(this);
    }
}
exports.This = This;
class Logical extends Expr {
    constructor(left, operator, right) {
        super();
        this.left = left;
        this.operator = operator;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitLogicalExpr(this);
    }
}
exports.Logical = Logical;
class Variable extends Expr {
    constructor(name) {
        super();
        this.name = name;
    }
    accept(visitor) {
        return visitor.visitVariableExpr(this);
    }
}
exports.Variable = Variable;
class Function extends Expr {
    constructor(parameter, body) {
        super();
        this.parameter = parameter;
        this.body = body;
    }
    accept(visitor) {
        return visitor.visitFunctionExpr(this);
    }
}
exports.Function = Function;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __webpack_require__(0);
function isDigit(c) {
    return c >= '0' && c <= '9';
}
function isAlpha(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
function isAlphaNumeric(c) {
    return isAlpha(c) || isDigit(c);
}
const KEYWORDS = new Map([
    ['and', token_1.TokenType.AND],
    ['class', token_1.TokenType.CLASS],
    ['else', token_1.TokenType.ELSE],
    ['false', token_1.TokenType.FALSE],
    ['for', token_1.TokenType.FOR],
    ['if', token_1.TokenType.IF],
    ['nil', token_1.TokenType.NIL],
    ['or', token_1.TokenType.OR],
    ['print', token_1.TokenType.PRINT],
    ['return', token_1.TokenType.RETURN],
    ['super', token_1.TokenType.SUPER],
    ['this', token_1.TokenType.THIS],
    ['true', token_1.TokenType.TRUE],
    ['var', token_1.TokenType.VAR],
    ['while', token_1.TokenType.WHILE],
    ['break', token_1.TokenType.BREAK],
    ['fun', token_1.TokenType.FUN],
]);
class Scanner {
    constructor(source, runner) {
        this.tokens = [];
        this.start = 0;
        this.current = 0;
        this.line = 1;
        this.source = source;
        this.runner = runner;
    }
    scanTokens() {
        while (!this.isAtEnd()) {
            this.start = this.current;
            this.scanToken();
        }
        this.tokens.push(new token_1.default(token_1.TokenType.EOF, '', null, this.line));
        return this.tokens;
    }
    isAtEnd() {
        return this.current >= this.source.length;
    }
    advance() {
        return this.source.charAt(this.current++);
    }
    match(char) {
        if (this.isAtEnd()) {
            return false;
        }
        else if (this.source.charAt(this.current) !== char) {
            return false;
        }
        this.current++;
        return true;
    }
    peek() {
        return this.isAtEnd() ? '\0' : this.source.charAt(this.current);
    }
    peekNext() {
        return this.current + 1 >= this.source.length
            ? '\0'
            : this.source.charAt(this.current + 1);
    }
    addToken(type, literal = null) {
        const lexeme = this.source.slice(this.start, this.current);
        this.tokens.push(new token_1.default(type, lexeme, literal, this.line));
    }
    scanToken() {
        const c = this.advance();
        switch (c) {
            case '(':
                this.addToken(token_1.TokenType.LEFT_PAREN);
                break;
            case ')':
                this.addToken(token_1.TokenType.RIGHT_PAREN);
                break;
            case '{':
                this.addToken(token_1.TokenType.LEFT_BRACE);
                break;
            case '}':
                this.addToken(token_1.TokenType.RIGHT_BRACE);
                break;
            case ',':
                this.addToken(token_1.TokenType.COMMA);
                break;
            case '.':
                this.addToken(token_1.TokenType.DOT);
                break;
            case '.':
                this.addToken(token_1.TokenType.DOT);
                break;
            case '-':
                this.addToken(token_1.TokenType.MINUS);
                break;
            case '+':
                this.addToken(token_1.TokenType.PLUS);
                break;
            case ';':
                this.addToken(token_1.TokenType.SEMI);
                break;
            case '*':
                this.addToken(token_1.TokenType.STAR);
                break;
            case '!':
                this.addToken(this.match('=') ? token_1.TokenType.BANG_EQUAL : token_1.TokenType.BANG);
                break;
            case '=':
                this.addToken(this.match('=') ? token_1.TokenType.EQUAL_EQUAL : token_1.TokenType.EQUAL);
                break;
            case '<':
                this.addToken(this.match('=') ? token_1.TokenType.LESS_EQUAL : token_1.TokenType.LESS);
                break;
            case '>':
                this.addToken(this.match('=')
                    ? token_1.TokenType.GREATE_EQUAL
                    : token_1.TokenType.GREATER);
                break;
            case '/':
                if (this.match('/')) {
                    // A comment goes untile the end of the line
                    while (this.peek() !== '\n' && !this.isAtEnd()) {
                        this.advance();
                    }
                }
                else if (this.match('*')) {
                    // A comment goes untile the end of the line
                    while (this.peek() !== '*' &&
                        this.peekNext() !== '/' &&
                        !this.isAtEnd()) {
                        if (this.peek() === '\n') {
                            this.line++;
                        }
                        this.advance();
                    }
                    if (this.peek() !== '/') {
                        // Discard closing */
                        this.advance();
                        this.advance();
                    }
                }
                else {
                    this.addToken(token_1.TokenType.SLASH);
                }
                break;
            case ' ':
            case '\r':
            case '\t':
                // Ignore whitespaces
                break;
            case '\n':
                this.line++;
                break;
            case '"':
                this.string();
                break;
            default:
                if (isDigit(c)) {
                    this.number();
                }
                else if (isAlpha(c)) {
                    this.identifier();
                }
                else {
                    this.runner.error(this.line, `Unexpected character ${c}`);
                }
        }
    }
    string() {
        while (this.peek() !== '"' && !this.isAtEnd()) {
            if (this.peek() == '\n') {
                this.line++;
            }
            this.advance();
        }
        if (this.isAtEnd()) {
            this.runner.error(this.line, 'Unterminated string.');
            return;
        }
        // Consume closing '"'
        this.advance();
        // Trimmed surrounding quotes
        const value = this.source.slice(this.start + 1, this.current - 1);
        this.addToken(token_1.TokenType.STRING, value);
    }
    number() {
        while (isDigit(this.peek())) {
            this.advance();
        }
        // Floating numbers
        let isFloat = false;
        if (this.peek() === '.' && isDigit(this.peekNext())) {
            // Consume '.'
            this.advance();
            isFloat = true;
            while (isDigit(this.peek())) {
                this.advance();
            }
        }
        // Parse literal according to the type
        const value = this.source.slice(this.start, this.current);
        const literal = isFloat ? parseFloat(value) : parseFloat(value);
        this.addToken(token_1.TokenType.NUMBER, literal);
    }
    identifier() {
        while (isAlphaNumeric(this.peek())) {
            this.advance();
        }
        const text = this.source.slice(this.start, this.current);
        let type = KEYWORDS.get(text);
        if (type == null) {
            type = token_1.TokenType.IDENTIFIER;
        }
        this.addToken(type);
    }
}
exports.default = Scanner;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = __webpack_require__(3);
const interpreter_1 = __webpack_require__(1);
const Stmt = __webpack_require__(2);
class LoxCallable {
}
exports.LoxCallable = LoxCallable;
class LoxFunction extends LoxCallable {
    constructor(name, declaration, closure, isInitilizer) {
        super();
        this.name = name;
        this.declaration = declaration;
        this.closure = closure;
        this.isInitilizer = isInitilizer;
    }
    get arity() {
        return this.declaration.parameter.length;
    }
    call(interpreter, args) {
        const environment = new environment_1.default(this.closure);
        for (let i = 0; i < this.arity; i++) {
            environment.define(this.declaration.parameter[i].lexeme, args[i]);
        }
        const body = new Stmt.Block(this.declaration.body);
        try {
            interpreter.executeBlock(body, environment);
        }
        catch (error) {
            if (error instanceof interpreter_1.ReturnException) {
                return error.value;
            }
            throw error;
        }
        if (this.isInitilizer) {
            return environment.getAt(0, 'this');
        }
    }
    bind(instance) {
        const environment = new environment_1.default(this.closure);
        environment.define('this', instance);
        return new LoxFunction(this.name, this.declaration, environment, this.isInitilizer);
    }
    toString() {
        return `<fn ${this.name || 'anonymous'}>`;
    }
}
exports.LoxFunction = LoxFunction;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interpreter_1 = __webpack_require__(1);
class LoxInstance {
    constructor(klass) {
        this.fields = new Map();
        this.klass = klass;
    }
    get(name) {
        if (!this.klass) {
            return;
        }
        if (this.fields.has(name.lexeme)) {
            return this.fields.get(name.lexeme);
        }
        const method = this.klass.findMethod(this, name);
        if (method) {
            return method;
        }
        throw new interpreter_1.RuntimeException(name, `Undefined property ${name.lexeme}.`);
    }
    set(name, value) {
        this.fields.set(name.lexeme, value);
    }
    toString() {
        if (!this.klass) {
            return;
        }
        return `<Instance ${this.klass.name}>`;
    }
}
exports.LoxInstance = LoxInstance;
class LoxClass extends LoxInstance {
    constructor(metaclass, name, methods) {
        super(metaclass);
        this.name = name;
        this.methods = methods;
    }
    call(interpreter, ...args) {
        const instance = new LoxInstance(this);
        const init = this.methods['init'];
        if (init) {
            init.bind(instance).call(interpreter, args);
        }
        return instance;
    }
    findMethod(instance, name) {
        if (name.lexeme in this.methods) {
            return this.methods[name.lexeme].bind(instance);
        }
    }
    get arity() {
        const init = this.methods['init'];
        return init ? init.arity : 0;
    }
    toString() {
        return `<Class ${this.name}>`;
    }
}
exports.LoxClass = LoxClass;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __webpack_require__(0);
var VariableState;
(function (VariableState) {
    VariableState[VariableState["DECLARED"] = 0] = "DECLARED";
    VariableState[VariableState["DEFINED"] = 1] = "DEFINED";
    VariableState[VariableState["READ"] = 2] = "READ";
})(VariableState || (VariableState = {}));
var FunctionType;
(function (FunctionType) {
    FunctionType[FunctionType["NONE"] = 0] = "NONE";
    FunctionType[FunctionType["FUNCTION"] = 1] = "FUNCTION";
    FunctionType[FunctionType["METHOD"] = 2] = "METHOD";
    FunctionType[FunctionType["INITIALIZER"] = 3] = "INITIALIZER";
})(FunctionType || (FunctionType = {}));
var ClassType;
(function (ClassType) {
    ClassType[ClassType["NONE"] = 0] = "NONE";
    ClassType[ClassType["CLASS"] = 1] = "CLASS";
})(ClassType || (ClassType = {}));
class Resolver {
    constructor(interpreter, runner) {
        this.scopes = [];
        this.functionType = FunctionType.NONE;
        this.classType = ClassType.NONE;
        this.runner = runner;
        this.interpreter = interpreter;
    }
    visitBlockStmt(stmt) {
        this.beginScope();
        this.resolve(stmt.statements);
        const scope = this.endScope();
        for (let variable of scope.values()) {
            if (variable.state < VariableState.READ &&
                variable.name.type !== token_1.TokenType.THIS) {
                this.runner.errorToken(variable.name, 'Unused variable.');
            }
        }
    }
    visitFunctionStmt(stmt) {
        this.declare(stmt.name);
        this.define(stmt.name);
        this.resolveFunction(stmt.fn, FunctionType.FUNCTION);
    }
    visitFunctionExpr(expr) {
        this.resolveFunction(expr, FunctionType.FUNCTION);
    }
    visitVarStmt(stmt) {
        this.declare(stmt.name);
        if (stmt.initializer) {
            this.resolveExpr(stmt.initializer);
        }
        this.define(stmt.name);
    }
    visitVariableExpr(expr) {
        if (this.scopes.length) {
            const variable = this.currentScope().get(expr.name.lexeme);
            if (variable && variable.state === VariableState.DECLARED) {
                this.runner.errorToken(expr.name, 'Cannot read variable before own init.');
            }
        }
        this.resolveLocal(expr, expr.name, true);
    }
    visitAssignExpr(expr) {
        this.resolveExpr(expr.value);
        this.resolveLocal(expr, expr.name, false);
    }
    visitGetExpr(expr) {
        this.resolveExpr(expr.object);
    }
    visitSetExpr(expr) {
        this.resolveExpr(expr.value);
        this.resolveExpr(expr.object);
    }
    visitClassStmt(stmt) {
        const currentClassType = this.classType;
        this.classType = ClassType.CLASS;
        this.declare(stmt.name);
        for (let method of stmt.methods) {
            this.beginScope();
            this.currentScope().set('this', {
                name: new token_1.default(token_1.TokenType.THIS, 'this', undefined, stmt.name.line),
                state: VariableState.DEFINED,
            });
            let type = FunctionType.METHOD;
            if (method.name.lexeme === 'init') {
                type = FunctionType.INITIALIZER;
            }
            this.resolveFunction(method.fn, type);
            this.endScope();
        }
        for (let method of stmt.classMethods) {
            this.beginScope();
            this.currentScope().set('this', {
                name: new token_1.default(token_1.TokenType.THIS, 'this', undefined, stmt.name.line),
                state: VariableState.DEFINED,
            });
            this.resolveFunction(method.fn, FunctionType.METHOD);
            this.endScope();
        }
        this.define(stmt.name);
        this.classType = currentClassType;
    }
    visitThisExpr(expr) {
        if (this.classType !== ClassType.CLASS) {
            this.runner.errorToken(expr.keyword, 'Can only be used in class methods.');
        }
        this.resolveLocal(expr, expr.keyword, true);
    }
    visitExpressionStmt(stmt) {
        this.resolveExpr(stmt.expr);
    }
    visitIfStmt(stmt) {
        this.resolveExpr(stmt.condition);
        this.resolveStmt(stmt.thenBranch);
        if (stmt.elseBranch) {
            this.resolveStmt(stmt.elseBranch);
        }
    }
    visitPrintStmt(stmt) {
        this.resolveExpr(stmt.expr);
    }
    visitReturnStmt(stmt) {
        if (this.functionType === FunctionType.NONE) {
            this.runner.errorToken(stmt.keyword, 'Cannot return from top level.');
        }
        else if (this.functionType === FunctionType.INITIALIZER) {
            this.runner.errorToken(stmt.keyword, 'Cannot return a value from the intializer.');
        }
        this.resolveExpr(stmt.value);
    }
    visitWhileStmt(stmt) {
        this.resolveExpr(stmt.condition);
        this.resolveStmt(stmt.body);
    }
    visitBinaryExpr(expr) {
        this.resolveExpr(expr.left);
        this.resolveExpr(expr.right);
    }
    visitCallExpr(expr) {
        this.resolveExpr(expr.callee);
        for (let arg of expr.args) {
            this.resolveExpr(arg);
        }
    }
    visitGroupingExpr(expr) {
        this.resolveExpr(expr.expr);
    }
    visitLiteralExpr(expr) { }
    visitLogicalExpr(expr) {
        this.resolveExpr(expr.left);
        this.resolveExpr(expr.right);
    }
    visitUnaryExpr(expr) {
        this.resolveExpr(expr.right);
    }
    visitBreakStmt() { }
    beginScope() {
        this.scopes.push(new Map());
    }
    endScope() {
        return this.scopes.pop();
    }
    declare(name) {
        if (!this.scopes.length) {
            return;
        }
        const current = this.currentScope();
        if (current.has(name.lexeme)) {
            this.runner.errorToken(name, 'Duplicate variable declaration in the scope.');
        }
        current.set(name.lexeme, {
            name,
            state: VariableState.DECLARED,
        });
    }
    define(name) {
        if (!this.scopes.length) {
            return;
        }
        this.currentScope().set(name.lexeme, {
            name,
            state: VariableState.DEFINED,
        });
    }
    currentScope() {
        return this.scopes[this.scopes.length - 1];
    }
    resolveFunction(fn, type) {
        const enclosingType = this.functionType;
        this.functionType = type;
        this.beginScope();
        for (let param of fn.parameter) {
            this.declare(param);
            this.define(param);
        }
        this.resolve(fn.body);
        this.endScope();
        this.functionType = enclosingType;
    }
    resolveLocal(expr, name, isRead) {
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            if (this.scopes[i].has(name.lexeme)) {
                this.interpreter.resolve(expr, this.scopes.length - 1 - i);
                this.scopes[i].get(name.lexeme).state = VariableState.READ;
            }
        }
    }
    // Dirty code after need to be refactored
    resolve(statements) {
        for (let statement of statements) {
            this.resolveStmt(statement);
        }
    }
    resolveStmt(statement) {
        statement.accept(this);
    }
    resolveExpr(expr) {
        expr.accept(this);
    }
}
exports.default = Resolver;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjc5ZDIzYzk2ZWM1ZTYwZjE2ZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW50ZXJwcmV0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXN0L3N0bXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXlncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXlncm91bmQvcHJlc2V0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ydW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcGFyc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FzdC9leHByLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY2FsbGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0lBTUksWUFBWSxJQUFlLEVBQUUsTUFBYyxFQUFFLE9BQVksRUFBRSxJQUFZO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFRLEVBQUUsQ0FBUTtRQUM1QixNQUFNLENBQUMsQ0FDSCxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJO1lBQ2pCLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFDckIsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsT0FBTztZQUN2QixDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ3BCLENBQUM7SUFDTixDQUFDO0NBQ0o7QUF6QkQsd0JBeUJDO0FBRUQsSUFBWSxTQWtEWDtBQWxERCxXQUFZLFNBQVM7SUFDakIsMkJBQTJCO0lBQzNCLHFEQUFVO0lBQ1YsdURBQVc7SUFDWCxxREFBVTtJQUNWLHVEQUFXO0lBQ1gsMkNBQUs7SUFDTCx1Q0FBRztJQUNILDJDQUFLO0lBQ0wseUNBQUk7SUFDSix5Q0FBSTtJQUNKLDJDQUFLO0lBQ0wsMENBQUk7SUFFSixnQ0FBZ0M7SUFDaEMsMENBQUk7SUFDSixzREFBVTtJQUNWLDRDQUFLO0lBQ0wsd0RBQVc7SUFDWCxnREFBTztJQUNQLDBEQUFZO0lBQ1osMENBQUk7SUFDSixzREFBVTtJQUVWLFdBQVc7SUFDWCxzREFBVTtJQUNWLDhDQUFNO0lBQ04sOENBQU07SUFFTixXQUFXO0lBQ1gsd0NBQUc7SUFDSCw0Q0FBSztJQUNMLDBDQUFJO0lBQ0osNENBQUs7SUFDTCx3Q0FBRztJQUNILHdDQUFHO0lBQ0gsc0NBQUU7SUFDRix3Q0FBRztJQUNILHNDQUFFO0lBQ0YsNENBQUs7SUFDTCw4Q0FBTTtJQUNOLDRDQUFLO0lBQ0wsMENBQUk7SUFDSiwwQ0FBSTtJQUNKLHdDQUFHO0lBQ0gsNENBQUs7SUFDTCw0Q0FBSztJQUVMLFNBQVM7SUFDVCx3Q0FBRztBQUNQLENBQUMsRUFsRFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFrRHBCOzs7Ozs7Ozs7O0FDNUVELHVDQUEyQztBQUczQyw2Q0FBd0M7QUFDeEMsMkNBQXNEO0FBQ3RELHdDQUFnRDtBQUVoRCxzQkFBOEIsU0FBUSxLQUFLO0lBRXZDLFlBQVksS0FBWSxFQUFFLE9BQWU7UUFDckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBTkQsNENBTUM7QUFFRCxvQkFBcUIsU0FBUSxLQUFLO0NBQUc7QUFFckMscUJBQTZCLFNBQVEsS0FBSztJQUV0QyxZQUFZLEtBQVU7UUFDbEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUFORCwwQ0FNQztBQUVEO0lBUUksWUFBWSxNQUFjO1FBSmpCLFdBQU0sR0FBMkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFHOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ2YsT0FBTyxFQUNQLElBQUksV0FBWSxTQUFRLHNCQUFXO1lBQS9COztnQkFDQSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1lBSWQsQ0FBQztZQUhHLElBQUk7Z0JBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixDQUFDO1NBQ0osRUFBRSxDQUNOLENBQUM7SUFDTixDQUFDO0lBRUQsU0FBUyxDQUFDLFVBQXVCO1FBQzdCLElBQUksQ0FBQztZQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU8sT0FBTyxDQUFDLFNBQW9CO1FBQ2hDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQW1CO1FBQ2pDLE1BQU0sRUFBRSxHQUFHLElBQUksc0JBQVcsQ0FDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2hCLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLFVBQVUsRUFDZixLQUFLLENBQ1IsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFtQjtRQUNqQyxNQUFNLENBQUMsSUFBSSxzQkFBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQWlCO1FBQzdCLElBQUksS0FBSyxDQUFDO1FBQ1YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsTUFBTSxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWM7UUFDdkIsSUFBSSxLQUFLLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFtQjtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxjQUFjLENBQUMsSUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFL0MsTUFBTSxZQUFZLEdBQW9DLEVBQUUsQ0FBQztRQUN6RCxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLHNCQUFXLENBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNsQixNQUFNLENBQUMsRUFBRSxFQUNULElBQUksQ0FBQyxVQUFVLEVBQ2YsS0FBSyxDQUNSLENBQUM7UUFDTixDQUFDO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxnQkFBUSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFOUUsTUFBTSxPQUFPLEdBQW9DLEVBQUUsQ0FBQztRQUNwRCxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLHNCQUFXLENBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNsQixNQUFNLENBQUMsRUFBRSxFQUNULElBQUksQ0FBQyxVQUFVLEVBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUNoQyxDQUFDO1FBQ04sQ0FBQztRQUVELE1BQU0sS0FBSyxHQUFHLElBQUksZ0JBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBcUI7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFnQjtRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFnQjtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFhO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFnQjtRQUMzQixJQUFJLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELE1BQU0sS0FBSyxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNWLE1BQU0sSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBa0I7UUFDL0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssaUJBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBaUI7UUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBa0I7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQW1CO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQWdCO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFLLGlCQUFTLENBQUMsS0FBSztnQkFDaEIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2xCLEtBQUssaUJBQVMsQ0FBQyxJQUFJO2dCQUNmLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFlO1FBQ3pCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksc0JBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksZ0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLElBQUksZ0JBQWdCLENBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQ1YsMkNBQTJDLENBQzlDLENBQUM7UUFDTixDQUFDO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLElBQUksZ0JBQWdCLENBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQ1YsWUFBWSxFQUFFLENBQUMsS0FBSyxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUMzRCxDQUFDO1FBQ04sQ0FBQztRQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWM7UUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsRUFBRSxDQUFDLENBQUMsTUFBTSxZQUFZLG1CQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsTUFBTSxJQUFJLGdCQUFnQixDQUN0QixJQUFJLENBQUMsSUFBSSxFQUNULGlDQUFpQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFjO1FBQ3ZCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLFlBQVksbUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLElBQUksZ0JBQWdCLENBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQ1QsNkJBQTZCLENBQ2hDLENBQUM7UUFDTixDQUFDO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFpQjtRQUM3QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekIsS0FBSyxpQkFBUyxDQUFDLElBQUk7Z0JBQ2YsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDTixPQUFPLElBQUksS0FBSyxRQUFRO29CQUN4QixPQUFPLEtBQUssS0FBSyxRQUNyQixDQUFDLENBQUMsQ0FBQztvQkFDQyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxNQUFNLElBQUksZ0JBQWdCLENBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQ2IsdUNBQXVDLENBQzFDLENBQUM7WUFFTixLQUFLLGlCQUFTLENBQUMsS0FBSztnQkFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUV4QixLQUFLLGlCQUFTLENBQUMsS0FBSztnQkFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUV4QixLQUFLLGlCQUFTLENBQUMsSUFBSTtnQkFDZixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBRXhCLEtBQUssaUJBQVMsQ0FBQyxPQUFPO2dCQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBRXhCLEtBQUssaUJBQVMsQ0FBQyxZQUFZO2dCQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1lBRXpCLEtBQUssaUJBQVMsQ0FBQyxJQUFJO2dCQUNmLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDckQsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFFeEIsS0FBSyxpQkFBUyxDQUFDLFVBQVU7Z0JBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDckQsTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7WUFFekIsS0FBSyxpQkFBUyxDQUFDLFVBQVU7Z0JBQ3JCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXRDLEtBQUssaUJBQVMsQ0FBQyxXQUFXO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFnQixFQUFFLFdBQXdCO1FBQ25ELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7WUFFOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUNMLENBQUM7Z0JBQVMsQ0FBQztZQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQWU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFlLEVBQUUsS0FBYTtRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGNBQWMsQ0FBQyxJQUFXLEVBQUUsSUFBZTtRQUMvQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUFFTyxRQUFRLENBQUMsS0FBVTtRQUN2QixNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssU0FBUztZQUM3QixDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRU8sT0FBTyxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxRQUFlLEVBQUUsT0FBWTtRQUNwRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUNyRSxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQixDQUFDLFFBQWUsRUFBRSxJQUFTLEVBQUUsS0FBVTtRQUM5RCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQXBXRCw4QkFvV0M7Ozs7Ozs7OztBQzlYRCxrREFBa0Q7O0FBa0JsRDtDQUVDO0FBRkQsb0JBRUM7QUFFRCxXQUFtQixTQUFRLElBQUk7SUFFM0IsWUFBWSxVQUFrQjtRQUMxQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNKO0FBVEQsc0JBU0M7QUFFRCxnQkFBd0IsU0FBUSxJQUFJO0lBRWhDLFlBQVksSUFBVTtRQUNsQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0o7QUFURCxnQ0FTQztBQUVELFdBQW1CLFNBQVEsSUFBSTtJQUkzQixZQUFZLElBQVcsRUFBRSxPQUFtQixFQUFFLFlBQXdCO1FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUFiRCxzQkFhQztBQUVELFFBQWdCLFNBQVEsSUFBSTtJQUl4QixZQUNJLFNBQWUsRUFDZixVQUFnQixFQUNoQixVQUE0QjtRQUU1QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNKO0FBakJELGdCQWlCQztBQUVELFdBQW1CLFNBQVEsSUFBSTtJQUczQixZQUFZLFNBQWUsRUFBRSxJQUFVO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUFYRCxzQkFXQztBQUVELFdBQW1CLFNBQVEsSUFBSTtJQUMzQjtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUFQRCxzQkFPQztBQUVELFdBQW1CLFNBQVEsSUFBSTtJQUUzQixZQUFZLElBQVU7UUFDbEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTSxDQUFJLE9BQXVCO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQVRELHNCQVNDO0FBRUQsU0FBaUIsU0FBUSxJQUFJO0lBR3pCLFlBQVksSUFBVyxFQUFFLFdBQWlCO1FBQ3RDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0o7QUFYRCxrQkFXQztBQUVELGNBQXNCLFNBQVEsSUFBSTtJQUc5QixZQUFZLElBQVcsRUFBRSxFQUFnQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFYRCw0QkFXQztBQUVELFlBQW9CLFNBQVEsSUFBSTtJQUc1QixZQUFZLE9BQWMsRUFBRSxLQUFXO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFYRCx3QkFXQzs7Ozs7Ozs7OztBQ25KRCw2Q0FBaUQ7QUFFakQ7SUFJSSxZQUFZLFNBQXVCO1FBRm5DLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1FBRzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLEtBQVU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBVyxFQUFFLEtBQVU7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sSUFBSSw4QkFBZ0IsQ0FDdEIsSUFBSSxFQUNKLDJCQUEyQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQzdDLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQixFQUFFLElBQVcsRUFBRSxLQUFVO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVc7UUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELE1BQU0sSUFBSSw4QkFBZ0IsQ0FDdEIsSUFBSSxFQUNKLDJCQUEyQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQzdDLENBQUM7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQWdCLEVBQUUsSUFBWTtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxRQUFRLENBQUMsUUFBZ0I7UUFDckIsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Q0FDSjtBQWpERCw4QkFpREM7Ozs7Ozs7Ozs7QUNwREQseUNBQW9DO0FBQ3BDLHdDQUFvQztBQVNwQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFzQixDQUFDO0FBQ25GLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFFLENBQUM7QUFDekQsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBRSxDQUFDO0FBQ25FLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUUsQ0FBQztBQUVqRSxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxpQkFBTyxDQUFDLENBQUMsQ0FBQztJQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWhELE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFNUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0FBRTNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEdBQUcsRUFBRTtJQUMzQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1FBQ3hELEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztRQUN6QixRQUFRLEVBQUUsS0FBSztLQUNsQixDQUFDLENBQUM7SUFFSCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1FBQ2xELEtBQUssRUFBRSxFQUFFO1FBRVQsV0FBVyxFQUFFLEtBQUs7UUFDbEIsb0JBQW9CLEVBQUUsS0FBSztRQUUzQixRQUFRLEVBQUUsSUFBSTtRQUNkLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLHlCQUF5QixFQUFFLElBQUk7UUFFL0IsT0FBTyxFQUFFO1lBQ0wsT0FBTyxFQUFFLEtBQUs7U0FDakI7UUFFRCxLQUFLLEVBQUUsU0FBUztLQUNuQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNuQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNyQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEMsTUFBTSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBQzlCLE1BQU0sVUFBVSxHQUFHLFVBQVMsR0FBVztZQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQVc7Z0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2xCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELEdBQUcsQ0FBQyxHQUFXO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNoQixVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBVztnQkFDZixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDakIsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQ0QsS0FBSyxDQUFDLEdBQVc7Z0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1QixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQ3JGVSxlQUFPLEdBQWE7SUFDN0I7UUFDSSxJQUFJLEVBQUUsY0FBYztRQUNwQixLQUFLLEVBQUUsdUJBQXVCO0tBQ2pDO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsQ0FDZjs7Q0FFQyxDQUNRO0tBQ0o7SUFDRDtRQUNJLElBQUksRUFBRSxjQUFjO1FBQ3BCLEtBQUssRUFBRSxDQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JDLENBQ1E7S0FDSjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLENBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWlDQyxDQUNRO0tBQ0o7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLENBQ2Y7Q0FDQyxDQUNRO0tBQ0o7Q0FDSjs7Ozs7Ozs7OztBQ3RGRCx3Q0FBOEI7QUFDOUIseUNBQWdDO0FBQ2hDLHVDQUEyQztBQUMzQyw2Q0FBOEQ7QUFDOUQsMkNBQWtDO0FBR2xDO0lBT0ksWUFBWSxNQUFjO1FBTjFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFLaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELEdBQUcsQ0FBQyxNQUFjO1FBQ2QsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBWSxFQUFFLE9BQWU7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBWSxFQUFFLE9BQWU7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBdUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsT0FBZTtRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksV0FBVyxLQUFLLEtBQUssT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0NBQ0o7QUFyREQseUJBcURDOzs7Ozs7Ozs7O0FDM0RELHVDQUEyQztBQUUzQyxvQ0FBbUM7QUFDbkMsb0NBQW1DO0FBQ25DLHNDQUFtQztBQUVuQyxpQkFBa0IsU0FBUSxLQUFLO0NBQUc7QUFFbEM7SUFPSSxZQUFZLE1BQWUsRUFBRSxNQUFjO1FBSDNDLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBR1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELEtBQUs7UUFDRCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNaLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0REFBNEQ7SUFDcEQsV0FBVztRQUNmLElBQUksQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUE0QjtJQUM1QixtREFBbUQ7SUFDM0MsUUFBUSxDQUFDLElBQVk7UUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FDckIsaUJBQVMsQ0FBQyxVQUFVLEVBQ3BCLFlBQVksSUFBSSxRQUFRLENBQzNCLENBQUM7UUFFRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxZQUFZLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFTLENBQUMsVUFBVSxFQUFFLHNCQUFzQixJQUFJLFFBQVEsQ0FBQyxDQUFDO1FBRXZFLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsR0FBRyxDQUFDO2dCQUNBLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FDTixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQ1gscUNBQXFDLENBQ3hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxVQUFVLENBQUMsSUFBSSxDQUNYLElBQUksQ0FBQyxPQUFPLENBQ1IsaUJBQVMsQ0FBQyxVQUFVLEVBQ3BCLDBCQUEwQixDQUM3QixDQUNKLENBQUM7WUFDTixDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzFDLENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFTLENBQUMsV0FBVyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBUyxDQUFDLFVBQVUsRUFBRSx1QkFBdUIsSUFBSSxRQUFRLENBQUMsQ0FBQztRQUV4RSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDhDQUE4QztJQUN0QyxnQkFBZ0I7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FDckIsaUJBQVMsQ0FBQyxVQUFVLEVBQ3BCLGdDQUFnQyxDQUNuQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBUyxDQUFDLFVBQVUsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRXJFLE1BQU0sT0FBTyxHQUFvQixFQUFFLENBQUM7UUFDcEMsTUFBTSxZQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUV6QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDM0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQVMsQ0FBQyxXQUFXLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUVqRSxNQUFNLENBQUMsSUFBSSxZQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsZ0RBQWdEO0lBQ3hDLGNBQWM7UUFDbEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FDckIsaUJBQVMsQ0FBQyxVQUFVLEVBQ3BCLDBCQUEwQixDQUM3QixDQUFDO1FBRUYsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQVMsQ0FBQyxJQUFJLEVBQUUseUNBQXlDLENBQUMsQ0FBQztRQUN4RSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQscUdBQXFHO0lBQzdGLFNBQVM7UUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBRUQscUVBQXFFO0lBQzdELFdBQVc7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFTLENBQUMsVUFBVSxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDL0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQVMsQ0FBQyxXQUFXLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztRQUV4RSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEMsSUFBSSxVQUFVLENBQUM7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQscURBQXFEO0lBQzdDLGNBQWM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBUyxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUNSLGlCQUFTLENBQUMsV0FBVyxFQUNyQixxQ0FBcUMsQ0FDeEMsQ0FBQztRQUVGLElBQUksQ0FBQztZQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFOUIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztnQkFBUyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLDJEQUEyRDtJQUNuRCxZQUFZO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQVMsQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUVqRSxrQkFBa0I7UUFDbEIsSUFBSSxXQUFXLENBQUM7UUFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3QyxDQUFDO1FBRUQsZ0JBQWdCO1FBQ2hCLElBQUksU0FBUyxDQUFDO1FBQ2QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQVMsQ0FBQyxJQUFJLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVsRSxnQkFBZ0I7UUFDaEIsSUFBSSxTQUFTLENBQUM7UUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBUyxDQUFDLFdBQVcsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQztZQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVqQixXQUFXO1lBQ1gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRTVCLG1FQUFtRTtZQUNuRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNaLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBRUQsa0RBQWtEO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDYixTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV2Qyx5RUFBeUU7WUFDekUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztnQkFBUyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQTZCO0lBQ3JCLGNBQWM7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLHVDQUF1QyxDQUMxQyxDQUFDO1FBQ04sQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQVMsQ0FBQyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLGVBQWU7UUFDbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhDLElBQUksS0FBSyxHQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBUyxDQUFDLElBQUksRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1FBRWpFLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxrQ0FBa0M7SUFDMUIsY0FBYztRQUNsQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FDUixpQkFBUyxDQUFDLElBQUksRUFDZCw0Q0FBNEMsQ0FDL0MsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDZCQUE2QjtJQUNyQixtQkFBbUI7UUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQ1IsaUJBQVMsQ0FBQyxJQUFJLEVBQ2QsNENBQTRDLENBQy9DLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQ0FBZ0M7SUFDeEIsS0FBSztRQUNULE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV0QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDM0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXJDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQVMsQ0FBQyxXQUFXLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQkFBMEI7SUFDbEIsVUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHFFQUFxRTtJQUM3RCxVQUFVO1FBQ2QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQy9CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUVoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDRDQUE0QztJQUNwQyxFQUFFO1FBQ04sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXRCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDJDQUEyQztJQUNuQyxHQUFHO1FBQ1AsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHVDQUF1QztJQUMvQixJQUFJO1FBQ1IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxRQUFRO1FBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLFVBQVUsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDN0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNoQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCxVQUFVO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNCLE9BQ0ksSUFBSSxDQUFDLEtBQUssQ0FDTixpQkFBUyxDQUFDLE9BQU8sRUFDakIsaUJBQVMsQ0FBQyxZQUFZLEVBQ3RCLGlCQUFTLENBQUMsSUFBSSxFQUNkLGlCQUFTLENBQUMsVUFBVSxDQUN2QixFQUNILENBQUM7WUFDQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0VBQWdFO0lBQ3hELFFBQVE7UUFDWixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNqRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3BDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsb0RBQW9EO0lBQzVDLGNBQWM7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDWCxLQUFLO1FBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCw2REFBNkQ7SUFDckQsSUFBSTtRQUNSLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUxQixPQUFPLElBQUksRUFBRSxDQUFDO1lBQ1YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUNyQixpQkFBUyxDQUFDLFVBQVUsRUFDcEIsbUNBQW1DLENBQ3RDLENBQUM7Z0JBQ0YsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUssQ0FBQztZQUNWLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0NBQWdDO0lBQ3hCLFVBQVUsQ0FBQyxNQUFpQjtRQUNoQyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQztnQkFDQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxFQUNYLG9DQUFvQyxDQUN2QyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNqQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzFDLENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUN0QixpQkFBUyxDQUFDLFdBQVcsRUFDckIsK0JBQStCLENBQ2xDLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDRGQUE0RjtJQUNwRixPQUFPO1FBQ1gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUU3QixJQUFJLENBQUMsT0FBTyxDQUNSLGlCQUFTLENBQUMsV0FBVyxFQUNyQixnQ0FBZ0MsQ0FDbkMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLEtBQUssQ0FBQyxHQUFHLEtBQWtCO1FBQy9CLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sS0FBSyxDQUFDLElBQWU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztJQUM5RCxDQUFDO0lBRU8sT0FBTztRQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLE9BQU87UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxpQkFBUyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxDQUFDO0lBRU8sSUFBSTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sUUFBUTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLE9BQU8sQ0FBQyxJQUFlLEVBQUUsT0FBZTtRQUM1QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWYsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLGlCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUNyQixLQUFLLGlCQUFTLENBQUMsR0FBRyxDQUFDO2dCQUNuQixLQUFLLGlCQUFTLENBQUMsR0FBRyxDQUFDO2dCQUNuQixLQUFLLGlCQUFTLENBQUMsR0FBRyxDQUFDO2dCQUNuQixLQUFLLGlCQUFTLENBQUMsRUFBRSxDQUFDO2dCQUNsQixLQUFLLGlCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUNyQixLQUFLLGlCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUNyQixLQUFLLGlCQUFTLENBQUMsTUFBTTtvQkFDakIsTUFBTSxDQUFDO1lBQ2YsQ0FBQztZQUVELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDO0lBQ0wsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFZLEVBQUUsT0FBZTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBemtCRCx5QkF5a0JDOzs7Ozs7Ozs7QUNsbEJELGtEQUFrRDs7QUFvQmxEO0NBRUM7QUFGRCxvQkFFQztBQUVELFlBQW9CLFNBQVEsSUFBSTtJQUc1QixZQUFZLElBQVcsRUFBRSxLQUFXO1FBQ2hDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFYRCx3QkFXQztBQUVELFlBQW9CLFNBQVEsSUFBSTtJQUk1QixZQUFZLElBQVUsRUFBRSxRQUFlLEVBQUUsS0FBVztRQUNoRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBYkQsd0JBYUM7QUFFRCxjQUFzQixTQUFRLElBQUk7SUFFOUIsWUFBWSxJQUFVO1FBQ2xCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQVRELDRCQVNDO0FBRUQsYUFBcUIsU0FBUSxJQUFJO0lBRTdCLFlBQVksS0FBVTtRQUNsQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFURCwwQkFTQztBQUVELFdBQW1CLFNBQVEsSUFBSTtJQUczQixZQUFZLFNBQWdCLEVBQUUsS0FBVztRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNKO0FBWEQsc0JBV0M7QUFFRCxVQUFrQixTQUFRLElBQUk7SUFJMUIsWUFBWSxNQUFZLEVBQUUsS0FBWSxFQUFFLElBQVk7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTSxDQUFJLE9BQXVCO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSjtBQWJELG9CQWFDO0FBRUQsU0FBaUIsU0FBUSxJQUFJO0lBR3pCLFlBQVksTUFBWSxFQUFFLElBQVc7UUFDakMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTSxDQUFJLE9BQXVCO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSjtBQVhELGtCQVdDO0FBRUQsU0FBaUIsU0FBUSxJQUFJO0lBSXpCLFlBQVksTUFBWSxFQUFFLElBQVcsRUFBRSxLQUFXO1FBQzlDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0o7QUFiRCxrQkFhQztBQUVELFVBQWtCLFNBQVEsSUFBSTtJQUUxQixZQUFZLE9BQWM7UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBQ0QsTUFBTSxDQUFJLE9BQXVCO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSjtBQVRELG9CQVNDO0FBRUQsYUFBcUIsU0FBUSxJQUFJO0lBSTdCLFlBQVksSUFBVSxFQUFFLFFBQWUsRUFBRSxLQUFXO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBSSxPQUF1QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDSjtBQWJELDBCQWFDO0FBRUQsY0FBc0IsU0FBUSxJQUFJO0lBRTlCLFlBQVksSUFBVztRQUNuQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFURCw0QkFTQztBQUVELGNBQXNCLFNBQVEsSUFBSTtJQUc5QixZQUFZLFNBQWtCLEVBQUUsSUFBWTtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNLENBQUksT0FBdUI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFYRCw0QkFXQzs7Ozs7Ozs7OztBQ2pMRCx1Q0FBMkM7QUFFM0MsaUJBQWlCLENBQVM7SUFDdEIsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUNoQyxDQUFDO0FBRUQsaUJBQWlCLENBQVM7SUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQsd0JBQXdCLENBQVM7SUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELE1BQU0sUUFBUSxHQUEyQixJQUFJLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztJQUN4QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEVBQUUsQ0FBQztJQUNwQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEVBQUUsQ0FBQztJQUNwQixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztJQUN4QixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztJQUN4QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztJQUN0QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztDQUN6QixDQUFDLENBQUM7QUFFSDtJQVNJLFlBQVksTUFBYyxFQUFFLE1BQWM7UUFMMUMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFHTCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsVUFBVTtRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQUssQ0FBQyxpQkFBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxPQUFPO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUVPLE9BQU87UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLEtBQUssQ0FBQyxJQUFZO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLElBQUk7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sUUFBUTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDekMsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sUUFBUSxDQUFDLElBQWUsRUFBRSxVQUFlLElBQUk7UUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLFNBQVM7UUFDYixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNSLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUNULElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQkFBUyxDQUFDLElBQUksQ0FDMUQsQ0FBQztnQkFDRixLQUFLLENBQUM7WUFFVixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLFFBQVEsQ0FDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQVMsQ0FBQyxLQUFLLENBQzVELENBQUM7Z0JBQ0YsS0FBSyxD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QUMzQixDQUFDO0lBRU8sV0FBVyxDQUFDLElBQWU7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0o7QUEzUkQsMkJBMlJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNzlkMjNjOTZlYzVlNjBmMTZkNiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuIHtcbiAgICB0eXBlOiBUb2tlblR5cGU7XG4gICAgbGV4ZW1lOiBzdHJpbmc7XG4gICAgbGl0ZXJhbDogYW55O1xuICAgIGxpbmU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgbGV4ZW1lOiBzdHJpbmcsIGxpdGVyYWw6IGFueSwgbGluZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubGV4ZW1lID0gbGV4ZW1lO1xuICAgICAgICB0aGlzLmxpdGVyYWwgPSBsaXRlcmFsO1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFske3RoaXMudHlwZX1dICR7dGhpcy5sZXhlbWV9ICR7dGhpcy5saXRlcmFsfWA7XG4gICAgfVxuXG4gICAgc3RhdGljIGVxdWFscyhhOiBUb2tlbiwgYjogVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGEudHlwZSA9PT0gYi50eXBlICYmXG4gICAgICAgICAgICBhLmxleGVtZSA9PT0gYi5sZXhlbWUgJiZcbiAgICAgICAgICAgIGEubGl0ZXJhbCA9PT0gYi5saXRlcmFsICYmXG4gICAgICAgICAgICBhLmxpbmUgPT09IGIubGluZVxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgICAvLyBTaW5nbGUgY2hhcmFjdGVyIHRva2Vucy5cbiAgICBMRUZUX1BBUkVOLFxuICAgIFJJR0hUX1BBUkVOLFxuICAgIExFRlRfQlJBQ0UsXG4gICAgUklHSFRfQlJBQ0UsXG4gICAgQ09NTUEsXG4gICAgRE9ULFxuICAgIE1JTlVTLFxuICAgIFBMVVMsXG4gICAgU0VNSSxcbiAgICBTTEFTSCxcbiAgICBTVEFSLFxuXG4gICAgLy8gT25lIG9mIHR3byBjaGFyYWN0ZXJzIHRva2Vucy5cbiAgICBCQU5HLFxuICAgIEJBTkdfRVFVQUwsXG4gICAgRVFVQUwsXG4gICAgRVFVQUxfRVFVQUwsXG4gICAgR1JFQVRFUixcbiAgICBHUkVBVEVfRVFVQUwsXG4gICAgTEVTUyxcbiAgICBMRVNTX0VRVUFMLFxuXG4gICAgLy8gTGl0ZXJhbHNcbiAgICBJREVOVElGSUVSLFxuICAgIFNUUklORyxcbiAgICBOVU1CRVIsXG5cbiAgICAvLyBLZXl3b3Jkc1xuICAgIEFORCxcbiAgICBDTEFTUyxcbiAgICBFTFNFLFxuICAgIEZBTFNFLFxuICAgIEZVTixcbiAgICBGT1IsXG4gICAgSUYsXG4gICAgTklMLFxuICAgIE9SLFxuICAgIFBSSU5ULFxuICAgIFJFVFVSTixcbiAgICBTVVBFUixcbiAgICBUSElTLFxuICAgIFRSVUUsXG4gICAgVkFSLFxuICAgIFdISUxFLFxuICAgIEJSRUFLLFxuXG4gICAgLy8gT3RoZXJzXG4gICAgRU9GLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdG9rZW4udHMiLCJpbXBvcnQgUnVubmVyIGZyb20gJy4vcnVubmVyJztcbmltcG9ydCBUb2tlbiwgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcbmltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9hc3QvZXhwcic7XG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vYXN0L3N0bXQnO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgTG94Q2FsbGFibGUsIExveEZ1bmN0aW9uIH0gZnJvbSAnLi9jYWxsYWJsZSc7XG5pbXBvcnQgeyBMb3hDbGFzcywgTG94SW5zdGFuY2UgfSBmcm9tICcuL2NsYXNzJztcblxuZXhwb3J0IGNsYXNzIFJ1bnRpbWVFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgdG9rZW46IFRva2VuO1xuICAgIGNvbnN0cnVjdG9yKHRva2VuOiBUb2tlbiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxufVxuXG5jbGFzcyBCcmVha0V4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHt9XG5cbmV4cG9ydCBjbGFzcyBSZXR1cm5FeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgdmFsdWU6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVycHJldGVyXG4gICAgaW1wbGVtZW50cyBFeHByLkV4cHJWaXNpdG9yPGFueT4sIFN0bXQuU3RtdFZpc2l0b3I8dm9pZD4ge1xuICAgIHJ1bm5lcjogUnVubmVyO1xuXG4gICAgcmVhZG9ubHkgbG9jYWxzOiBNYXA8RXhwci5FeHByLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICAgIHJlYWRvbmx5IGdsb2JhbHMgPSBuZXcgRW52aXJvbm1lbnQoKTtcbiAgICBwcml2YXRlIGV2aXJvbm1lbnQgPSB0aGlzLmdsb2JhbHM7XG5cbiAgICBjb25zdHJ1Y3RvcihydW5uZXI6IFJ1bm5lcikge1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHJ1bm5lcjtcblxuICAgICAgICB0aGlzLmdsb2JhbHMuZGVmaW5lKFxuICAgICAgICAgICAgJ2Nsb2NrJyxcbiAgICAgICAgICAgIG5ldyBjbGFzcyBDbG9jayBleHRlbmRzIExveENhbGxhYmxlIHtcbiAgICAgICAgICAgICAgICBhcml0eSA9IDA7XG4gICAgICAgICAgICAgICAgY2FsbCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSgpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGludGVycHJldChzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3RhdGVtZW50IG9mIHN0YXRlbWVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJ1bnRpbWVFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5lci5ydW50aW1lRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleGVjdXRlKHN0YXRlbWVudDogU3RtdC5TdG10KSB7XG4gICAgICAgIHN0YXRlbWVudC5hY2NlcHQodGhpcyk7XG4gICAgfVxuXG4gICAgdmlzaXRGdW5jdGlvblN0bXQoc3RtdDogU3RtdC5GdW5jdGlvbikge1xuICAgICAgICBjb25zdCBmbiA9IG5ldyBMb3hGdW5jdGlvbihcbiAgICAgICAgICAgIHN0bXQubmFtZS5sZXhlbWUsXG4gICAgICAgICAgICBzdG10LmZuLFxuICAgICAgICAgICAgdGhpcy5ldmlyb25tZW50LFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZXZpcm9ubWVudC5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgZm4pO1xuICAgIH1cblxuICAgIHZpc2l0RnVuY3Rpb25FeHByKGV4cHI6IEV4cHIuRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMb3hGdW5jdGlvbih1bmRlZmluZWQsIGV4cHIsIHRoaXMuZXZpcm9ubWVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHZpc2l0UmV0dXJuU3RtdChzdG10OiBTdG10LlJldHVybikge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChzdG10LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgUmV0dXJuRXhjZXB0aW9uKHZhbHVlKTtcbiAgICB9XG5cbiAgICB2aXNpdFZhclN0bXQoc3RtdDogU3RtdC5WYXIpIHtcbiAgICAgICAgbGV0IHZhbHVlOiBhbnkgPSBudWxsO1xuICAgICAgICBpZiAoc3RtdC5pbml0aWFsaXplciAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC5pbml0aWFsaXplcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2aXJvbm1lbnQuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBFeHByLlZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvb2t1cFZhcmlhYmxlKGV4cHIubmFtZSwgZXhwcik7XG4gICAgfVxuXG4gICAgdmlzaXRDbGFzc1N0bXQoc3RtdDogU3RtdC5DbGFzcykge1xuICAgICAgICB0aGlzLmV2aXJvbm1lbnQuZGVmaW5lKHN0bXQubmFtZS5sZXhlbWUsIG51bGwpO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzTWV0aG9kczogeyBbbmFtZTogc3RyaW5nXTogTG94RnVuY3Rpb24gfSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBtZXRob2Qgb2Ygc3RtdC5jbGFzc01ldGhvZHMpIHtcbiAgICAgICAgICAgIGNsYXNzTWV0aG9kc1ttZXRob2QubmFtZS5sZXhlbWVdID0gbmV3IExveEZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgIG1ldGhvZC5uYW1lLmxleGVtZSxcbiAgICAgICAgICAgICAgICBtZXRob2QuZm4sXG4gICAgICAgICAgICAgICAgdGhpcy5ldmlyb25tZW50LFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ldGFjbGFzcyA9IG5ldyBMb3hDbGFzcyhudWxsLCBgJHtzdG10Lm5hbWUubGV4ZW1lfW1ldGFgLCBjbGFzc01ldGhvZHMpO1xuXG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IHsgW25hbWU6IHN0cmluZ106IExveEZ1bmN0aW9uIH0gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgbWV0aG9kIG9mIHN0bXQubWV0aG9kcykge1xuICAgICAgICAgICAgbWV0aG9kc1ttZXRob2QubmFtZS5sZXhlbWVdID0gbmV3IExveEZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgIG1ldGhvZC5uYW1lLmxleGVtZSxcbiAgICAgICAgICAgICAgICBtZXRob2QuZm4sXG4gICAgICAgICAgICAgICAgdGhpcy5ldmlyb25tZW50LFxuICAgICAgICAgICAgICAgIG1ldGhvZC5uYW1lLmxleGVtZSA9PT0gJ2luaXQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtsYXNzID0gbmV3IExveENsYXNzKG1ldGFjbGFzcywgc3RtdC5uYW1lLmxleGVtZSwgbWV0aG9kcyk7XG4gICAgICAgIHRoaXMuZXZpcm9ubWVudC5hc3NpZ24oc3RtdC5uYW1lLCBrbGFzcyk7XG4gICAgfVxuXG4gICAgdmlzaXRUaGlzRXhwcihleHByOiBFeHByLlRoaXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwVmFyaWFibGUoZXhwci5rZXl3b3JkLCBleHByKTtcbiAgICB9XG5cbiAgICB2aXNpdEV4cHJlc3Npb25TdG10KHN0bXQ6IFN0bXQuRXhwcmVzc2lvbikge1xuICAgICAgICB0aGlzLmV2YWx1YXRlKHN0bXQuZXhwcik7XG4gICAgfVxuXG4gICAgdmlzaXRQcmludFN0bXQoc3RtdDogU3RtdC5QcmludCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoc3RtdC5leHByKTtcbiAgICAgICAgdGhpcy5ydW5uZXIubG9nZ2VyLmxvZyh2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBTdG10LkJsb2NrKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZUJsb2NrKHN0bXQsIG5ldyBFbnZpcm9ubWVudCh0aGlzLmV2aXJvbm1lbnQpKTtcbiAgICB9XG5cbiAgICB2aXNpdElmU3RtdChzdG10OiBTdG10LklmKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVHJ1dGh5KHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pKSkge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQudGhlbkJyYW5jaCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RtdC5lbHNlQnJhbmNoKSB7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC5lbHNlQnJhbmNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFN0bXQuV2hpbGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmlzVHJ1dGh5KHRoaXMuZXZhbHVhdGUoc3RtdC5jb25kaXRpb24pKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10LmJvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQnJlYWtFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpc2l0QnJlYWtTdG10KCkge1xuICAgICAgICB0aHJvdyBuZXcgQnJlYWtFeGNlcHRpb24oKTtcbiAgICB9XG5cbiAgICB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IEV4cHIuTG9naWNhbCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xuXG4gICAgICAgIGlmIChleHByLm9wZXJhdG9yLnR5cGUgPT09IFRva2VuVHlwZS5PUikge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcnV0aHkobGVmdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RydXRoeShsZWZ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XG4gICAgfVxuXG4gICAgdmlzaXRBc3NpZ25FeHByKGV4cHI6IEV4cHIuQXNzaWduKTogYW55IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmV2YWx1YXRlKGV4cHIudmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5sb2NhbHMuZ2V0KGV4cHIpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ldmlyb25tZW50LmFzc2lnbkF0KGRpc3RhbmNlLCBleHByLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFscy5hc3NpZ24oZXhwci5uYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmlzaXRMaXRlcmFsRXhwcihleHByOiBFeHByLkxpdGVyYWwpOiBhbnkge1xuICAgICAgICByZXR1cm4gZXhwci52YWx1ZTtcbiAgICB9XG5cbiAgICB2aXNpdEdyb3VwaW5nRXhwcihleHByOiBFeHByLkdyb3VwaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGUoZXhwci5leHByKTtcbiAgICB9XG5cbiAgICB2aXNpdFVuYXJ5RXhwcihleHByOiBFeHByLlVuYXJ5KTogYW55IHtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmV2YWx1YXRlKGV4cHIucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAoZXhwci5vcGVyYXRpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTUlOVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIC1yaWdodDtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkJBTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzVHJ1dGh5KHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZpc2l0Q2FsbEV4cHIoZXhwcjogRXhwci5DYWxsKTogYW55IHtcbiAgICAgICAgY29uc3QgZm4gPSB0aGlzLmV2YWx1YXRlKGV4cHIuY2FsbGVlKTtcblxuICAgICAgICBpZiAoIShmbiBpbnN0YW5jZW9mIExveENhbGxhYmxlKSAmJiAhKGZuIGluc3RhbmNlb2YgTG94Q2xhc3MpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUnVudGltZUV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgICBleHByLnBhcmVuLFxuICAgICAgICAgICAgICAgICdDYW4gb25seSBjYWxsIGZ1bmN0aW9uIGFuZCBjbGFzcyBtZXRob2RzLicsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXJncyA9IGV4cHIuYXJncy5tYXAoYXJnID0+IHRoaXMuZXZhbHVhdGUoYXJnKSk7XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoICE9PSBmbi5hcml0eSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFeGNlcHRpb24oXG4gICAgICAgICAgICAgICAgZXhwci5wYXJlbixcbiAgICAgICAgICAgICAgICBgRXhwZWN0ZWQgJHtmbi5hcml0eX0gYXJndW1lbnRzIGJ1dCBnb3QgJHthcmdzLmxlbmd0aH0uYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBhcmdzKTtcbiAgICB9XG5cbiAgICB2aXNpdEdldEV4cHIoZXhwcjogRXhwci5HZXQpOiBhbnkge1xuICAgICAgICBjb25zdCBvYmplY3QgPSB0aGlzLmV2YWx1YXRlKGV4cHIub2JqZWN0KTtcblxuICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTG94SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuZ2V0KGV4cHIubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgUnVudGltZUV4Y2VwdGlvbihcbiAgICAgICAgICAgIGV4cHIubmFtZSxcbiAgICAgICAgICAgICdPbmx5IGluc3RhbmNlcyBoYXZlIHByb3BlcnRpZXMuJyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB2aXNpdFNldEV4cHIoZXhwcjogRXhwci5TZXQpOiBhbnkge1xuICAgICAgICBjb25zdCBvYmplY3QgPSB0aGlzLmV2YWx1YXRlKGV4cHIub2JqZWN0KTtcblxuICAgICAgICBpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBMb3hJbnN0YW5jZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgIGV4cHIubmFtZSxcbiAgICAgICAgICAgICAgICAnT25seSBpbnN0YW5jZXMgaGF2ZSBmaWVsZHMuJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XG4gICAgICAgIG9iamVjdC5zZXQoZXhwci5uYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2aXNpdEJpbmFyeUV4cHIoZXhwcjogRXhwci5CaW5hcnkpOiBhbnkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5ldmFsdWF0ZShleHByLmxlZnQpO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XG5cbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdG9yLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlBMVVM6XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcmlnaHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcobGVmdCkgKyBTdHJpbmcocmlnaHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBsZWZ0ID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmlnaHQgPT09ICdudW1iZXInXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICsgcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFeGNlcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIGV4cHIub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgICdPcGVyYW5kcyBtdXN0IGJlIDIgc3RyaW5ncyBvciBudW1iZXJzJyxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NSU5VUzpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IC0gcmlnaHQ7XG5cbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlNMQVNIOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kcyhleHByLm9wZXJhdG9yLCBsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodDtcblxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU1RBUjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHQ7XG5cbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkdSRUFURVI6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja051bWJlck9wZXJhbmRzKGV4cHIub3BlcmF0b3IsIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA+IHJpZ2h0O1xuXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5HUkVBVEVfRVFVQUw6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja051bWJlck9wZXJhbmRzKGV4cHIub3BlcmF0b3IsIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA+PSByaWdodDtcblxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTEVTUzpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IDwgcmlnaHQ7XG5cbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkxFU1NfRVFVQUw6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja051bWJlck9wZXJhbmRzKGV4cHIub3BlcmF0b3IsIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA8PSByaWdodDtcblxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQkFOR19FUVVBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNFcXVhbChsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkVRVUFMX0VRVUFMOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRXF1YWwobGVmdCwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZXhlY3V0ZUJsb2NrKHN0bXQ6IFN0bXQuQmxvY2ssIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0VudiA9IHRoaXMuZXZpcm9ubWVudDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5ldmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHN0YXRlbWVudCBvZiBzdG10LnN0YXRlbWVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RhdGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuZXZpcm9ubWVudCA9IHByZXZpb3VzRW52O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGUoZXhwcjogRXhwci5FeHByKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGV4cHIuYWNjZXB0KHRoaXMpO1xuICAgIH1cblxuICAgIHJlc29sdmUoZXhwcjogRXhwci5FeHByLCBkZXB0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubG9jYWxzLnNldChleHByLCBkZXB0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb29rdXBWYXJpYWJsZShuYW1lOiBUb2tlbiwgZXhwcjogRXhwci5FeHByKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5sb2NhbHMuZ2V0KGV4cHIpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmlyb25tZW50LmdldEF0KGRpc3RhbmNlLCBuYW1lLmxleGVtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxzLmdldChuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNUcnV0aHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgIDogdmFsdWUgPT0gbnVsbCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRXF1YWwoYTogYW55LCBiOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSB0eXBlb2YgYiA/IGEgPT0gYiA6IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tOdW1iZXJPcGVyYW5kKG9wZXJhdG9yOiBUb2tlbiwgb3BlcmFuZDogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3BlcmFuZCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKG9wZXJhdG9yLCAnT3BlcmFuZCBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrTnVtYmVyT3BlcmFuZHMob3BlcmF0b3I6IFRva2VuLCBsZWZ0OiBhbnksIHJpZ2h0OiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgcmlnaHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUnVudGltZUV4Y2VwdGlvbihvcGVyYXRvciwgJ09wZXJhbmRzIG11c3QgYmUgMiBudW1iZXJzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9pbnRlcnByZXRlci50cyIsIi8qIC8hXFwgR2VucmVhdGVkIHZpYSBcIm5wbSBydW4gZ2VucmVhdGUtYXN0XCIgLyFcXCAqL1xuXG5pbXBvcnQgVG9rZW4gZnJvbSAnLi4vdG9rZW4nO1xuaW1wb3J0IHsgRXhwciwgRnVuY3Rpb24gYXMgRnVuY3Rpb25FeHByIH0gZnJvbSAnLi9leHByJztcblxuZXhwb3J0IGludGVyZmFjZSBTdG10VmlzaXRvcjxWPiB7XG4gICAgdmlzaXRCbG9ja1N0bXQoc3RtdDogQmxvY2spOiBWO1xuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogRXhwcmVzc2lvbik6IFY7XG4gICAgdmlzaXRDbGFzc1N0bXQoc3RtdDogQ2xhc3MpOiBWO1xuICAgIHZpc2l0SWZTdG10KHN0bXQ6IElmKTogVjtcbiAgICB2aXNpdFdoaWxlU3RtdChzdG10OiBXaGlsZSk6IFY7XG4gICAgdmlzaXRCcmVha1N0bXQoc3RtdDogQnJlYWspOiBWO1xuICAgIHZpc2l0UHJpbnRTdG10KHN0bXQ6IFByaW50KTogVjtcbiAgICB2aXNpdFZhclN0bXQoc3RtdDogVmFyKTogVjtcbiAgICB2aXNpdEZ1bmN0aW9uU3RtdChzdG10OiBGdW5jdGlvbik6IFY7XG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFJldHVybik6IFY7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdG10IHtcbiAgICBhYnN0cmFjdCBhY2NlcHQ8Vj4odmlzaXRpb3I6IFN0bXRWaXNpdG9yPFY+KTogVjtcbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrIGV4dGVuZHMgU3RtdCB7XG4gICAgc3RhdGVtZW50czogU3RtdFtdO1xuICAgIGNvbnN0cnVjdG9yKHN0YXRlbWVudHM6IFN0bXRbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCbG9ja1N0bXQodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFN0bXQge1xuICAgIGV4cHI6IEV4cHI7XG4gICAgY29uc3RydWN0b3IoZXhwcjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cHIgPSBleHByO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHByZXNzaW9uU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzcyBleHRlbmRzIFN0bXQge1xuICAgIG5hbWU6IFRva2VuO1xuICAgIG1ldGhvZHM6IEZ1bmN0aW9uW107XG4gICAgY2xhc3NNZXRob2RzOiBGdW5jdGlvbltdO1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IFRva2VuLCBtZXRob2RzOiBGdW5jdGlvbltdLCBjbGFzc01ldGhvZHM6IEZ1bmN0aW9uW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5tZXRob2RzID0gbWV0aG9kcztcbiAgICAgICAgdGhpcy5jbGFzc01ldGhvZHMgPSBjbGFzc01ldGhvZHM7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBTdG10VmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENsYXNzU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZiBleHRlbmRzIFN0bXQge1xuICAgIGNvbmRpdGlvbjogRXhwcjtcbiAgICB0aGVuQnJhbmNoOiBTdG10O1xuICAgIGVsc2VCcmFuY2g6IFN0bXQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNvbmRpdGlvbjogRXhwcixcbiAgICAgICAgdGhlbkJyYW5jaDogU3RtdCxcbiAgICAgICAgZWxzZUJyYW5jaDogU3RtdCB8IHVuZGVmaW5lZCxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMudGhlbkJyYW5jaCA9IHRoZW5CcmFuY2g7XG4gICAgICAgIHRoaXMuZWxzZUJyYW5jaCA9IGVsc2VCcmFuY2g7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBTdG10VmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdElmU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaGlsZSBleHRlbmRzIFN0bXQge1xuICAgIGNvbmRpdGlvbjogRXhwcjtcbiAgICBib2R5OiBTdG10O1xuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogRXhwciwgYm9keTogU3RtdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0V2hpbGVTdG10KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyZWFrIGV4dGVuZHMgU3RtdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBTdG10VmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJyZWFrU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmludCBleHRlbmRzIFN0bXQge1xuICAgIGV4cHI6IEV4cHI7XG4gICAgY29uc3RydWN0b3IoZXhwcjogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV4cHIgPSBleHByO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcmludFN0bXQodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyIGV4dGVuZHMgU3RtdCB7XG4gICAgbmFtZTogVG9rZW47XG4gICAgaW5pdGlhbGl6ZXI6IEV4cHI7XG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIGluaXRpYWxpemVyOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIFN0bXQge1xuICAgIG5hbWU6IFRva2VuO1xuICAgIGZuOiBGdW5jdGlvbkV4cHI7XG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIGZuOiBGdW5jdGlvbkV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5mbiA9IGZuO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGdW5jdGlvblN0bXQodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV0dXJuIGV4dGVuZHMgU3RtdCB7XG4gICAga2V5d29yZDogVG9rZW47XG4gICAgdmFsdWU6IEV4cHI7XG4gICAgY29uc3RydWN0b3Ioa2V5d29yZDogVG9rZW4sIHZhbHVlOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UmV0dXJuU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9hc3Qvc3RtdC50cyIsImltcG9ydCBUb2tlbiBmcm9tICcuL3Rva2VuJztcbmltcG9ydCB7IFJ1bnRpbWVFeGNlcHRpb24gfSBmcm9tICcuL2ludGVycHJldGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52aXJvbm1lbnQge1xuICAgIGVuY2xvc2luZz86IEVudmlyb25tZW50O1xuICAgIHZhbHVlcyA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbmNsb3Npbmc/OiBFbnZpcm9ubWVudCkge1xuICAgICAgICB0aGlzLmVuY2xvc2luZyA9IGVuY2xvc2luZztcbiAgICB9XG5cbiAgICBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYXNzaWduKG5hbWU6IFRva2VuLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZS5sZXhlbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcy5zZXQobmFtZS5sZXhlbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVuY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5lbmNsb3NpbmcuYXNzaWduKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgYFVuZGVmaW5lZCB2YXJpYWJsZSBmb3IgXCIke25hbWUubGV4ZW1lfVwiLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXNzaWduQXQoZGlzdGFuY2U6IG51bWJlciwgbmFtZTogVG9rZW4sIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5jZXN0b3IoZGlzdGFuY2UpLnZhbHVlcy5zZXQobmFtZS5sZXhlbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQobmFtZTogVG9rZW4pOiBhbnkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzKG5hbWUubGV4ZW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChuYW1lLmxleGVtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY2xvc2luZy5nZXQobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgUnVudGltZUV4Y2VwdGlvbihcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBgVW5kZWZpbmVkIHZhcmlhYmxlIGZvciBcIiR7bmFtZS5sZXhlbWV9XCIuYCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRBdChkaXN0YW5jZTogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5jZXN0b3IoZGlzdGFuY2UpLnZhbHVlcy5nZXQobmFtZSk7XG4gICAgfVxuXG4gICAgYW5jZXN0b3IoZGlzdGFuY2U6IG51bWJlcik6IEVudmlyb25tZW50IHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlID09PSAwID8gdGhpcyA6IHRoaXMuZW5jbG9zaW5nIS5hbmNlc3RvcihkaXN0YW5jZSAtIDEpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2Vudmlyb25tZW50LnRzIiwiaW1wb3J0IHsgcHJlc2V0cyB9IGZyb20gJy4vcHJlc2V0cyc7XG5pbXBvcnQgUnVubmVyIGZyb20gJy4uL2NvcmUvcnVubmVyJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cgeyBcbiAgICAgICAgcmVxdWlyZTogYW55O1xuICAgICAgICBtb25hY286IGFueTtcbiAgICB9XG59XG5cbmNvbnN0IHByZXNldFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVzZXQtc2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5jb25zdCBydW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcnVuLWJ1dHRvbicpITtcbmNvbnN0IGVkaXRvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWNvbnRhaW5lcicpITtcbmNvbnN0IGxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodC1jb250YWluZXInKSE7XG5cbmZvciAobGV0IHByZXNldCBvZiBwcmVzZXRzKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgXG4gICAgb3B0aW9uLnRleHQgPSBwcmVzZXQubmFtZTtcbiAgICBvcHRpb24udmFsdWUgPSBwcmVzZXQudmFsdWU7XG5cbiAgICBwcmVzZXRTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxud2luZG93LnJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgJ3ZzJzogJ21vbmFjby1lZGl0b3InIH19KTtcblxud2luZG93LnJlcXVpcmUoWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSwgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5tb25hY28uZWRpdG9yLmNyZWF0ZShlZGl0b3JDb250YWluZXIsIHtcbiAgICAgICAgdmFsdWU6IHByZXNldFNlbGVjdC52YWx1ZSxcbiAgICAgICAgbGFuZ3VhZ2U6ICdsb3gnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbG9nID0gd2luZG93Lm1vbmFjby5lZGl0b3IuY3JlYXRlKGxvZ0NvbnRhaW5lciwge1xuICAgICAgICB2YWx1ZTogJycsXG5cbiAgICAgICAgbGluZU51bWJlcnM6IGZhbHNlLFxuICAgICAgICBzY3JvbGxCZXlvbmRMYXN0TGluZTogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgY29udGV4dG1lbnU6IGZhbHNlLFxuICAgICAgICBoaWRlQ3Vyc29ySW5PdmVydmlld1J1bGVyOiB0cnVlLFxuXG4gICAgICAgIG1pbmltYXA6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgdGhlbWU6ICd2cy1kYXJrJyxcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5sYXlvdXQoKTtcbiAgICAgICAgbG9nLmxheW91dCgpO1xuICAgIH0pO1xuICAgIFxuICAgIHByZXNldFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5zZXRWYWx1ZShwcmVzZXRTZWxlY3QudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcnVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVkaXRvci5nZXRWYWx1ZSgpO1xuXG4gICAgICAgIGNvbnN0IGxvZ0xpbmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBhZGRMb2dMaW5lID0gZnVuY3Rpb24obXNnOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGxvZ0xpbmVzLnB1c2gobXNnKTtcbiAgICAgICAgICAgIGxvZy5zZXRWYWx1ZShsb2dMaW5lcy5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBydW5uZXIgPSBuZXcgUnVubmVyKHtcbiAgICAgICAgICAgIGRlYnVnKG1zZzogc3RyaW5nKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcobXNnKVxuICAgICAgICAgICAgICAgIGFkZExvZ0xpbmUoYPCflI4gJHttc2d9YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nKG1zZzogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKVxuICAgICAgICAgICAgICAgIGFkZExvZ0xpbmUoYCAgJHttc2d9YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FybmluZyhtc2c6IHN0cmluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihtc2cpXG4gICAgICAgICAgICAgICAgYWRkTG9nTGluZShg4pqg77iPICR7bXNnfWApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yKG1zZzogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgICAgICAgICAgIGFkZExvZ0xpbmUoYO+4j+KdjCAke21zZ31gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJ1bm5lci5ydW4odmFsdWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdyZWFkeScpO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsYXlncm91bmQvaW5kZXgudHMiLCJpbnRlcmZhY2UgUHJlc2V0IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdmFsdWU6IHN0cmluZywgXG59XG5cbmV4cG9ydCBjb25zdCBwcmVzZXRzOiBQcmVzZXRbXSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdIZWxsbyB3b3JsZCEnLFxuICAgICAgICB2YWx1ZTogYHByaW50IFwiSGVsbG8gV29ybGQhXCI7YCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0V4cHJlc3Npb25zJyxcbiAgICAgICAgdmFsdWU6IChcbmB2YXIgYXZnID0gKDUgKyA3KSAvIDI7XG5wcmludCBcIkF2ZXJhZ2U6IFwiICsgYXZnO1xuYFxuICAgICAgICApXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGbG93IENvbnRyb2wnLFxuICAgICAgICB2YWx1ZTogKFxuYHZhciBjb25kaXRpb24gPSB0cnVlO1xuaWYgKGNvbmRpdGlvbikge1xuICAgIHByaW50IFwieWVzXCI7XG59IGVsc2Uge1xuICAgIHByaW50IFwibm9cIjtcbn1cblxudmFyIGEgPSAxO1xud2hpbGUgKGEgPCAxMCkge1xuICAgIHByaW50IGE7XG4gICAgYSA9IGEgKyAxO1xufVxuXG5mb3IgKHZhciBhID0gMTsgYSA8IDEwOyBhID0gYSArIDEpIHtcbiAgICBwcmludCBhO1xufVxuYFxuICAgICAgICApXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGdW5jdGlvbicsXG4gICAgICAgIHZhbHVlOiAoXG5gZnVuIGZpYm9uYWNjaShuKSB7XG4gICAgaWYgKG4gPD0gMSkgcmV0dXJuIG47XG4gICAgcmV0dXJuIGZpYm9uYWNjaShuIC0gMikgKyBmaWJvbmFjY2kobiAtIDEpO1xufVxuXG5mb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpID0gaSArIDEpIHtcbiAgICBwcmludCBmaWJvbmFjY2koaSk7XG59XG5cbmZ1biBtYWtlQ2xvc3VyZSgpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgZnVuIGNvdW50KCkge1xuICAgICAgICBpID0gaSArIDE7XG4gICAgICAgIHByaW50IGk7XG4gICAgfVxuXG4gIHJldHVybiBjb3VudDtcbn1cblxudmFyIGNvdW50ZXIgPSBtYWtlQ2xvc3VyZSgpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSA9IGkgKyAxKSB7XG4gICAgcHJpbnQgY291bnRlcigpO1xufVxuXG5mdW4gdGltZXMobiwgZm4pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkgPSBpICsgMSkge1xuICAgICAgICBmbihuKTtcbiAgICB9XG59XG5cbnRpbWVzKGZuIChuKSB7XG4gICAgcHJpbnQgbjtcbn0pXG5gXG4gICAgICAgIClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NsYXNzZXMnLFxuICAgICAgICB2YWx1ZTogKFxuYC8vIFRvZG9cbmBcbiAgICAgICAgKVxuICAgIH1cbl1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxheWdyb3VuZC9wcmVzZXRzLnRzIiwiaW1wb3J0IFBhcnNlciBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgU2Nhbm5lciBmcm9tICcuL3NjYW5uZXInO1xuaW1wb3J0IFRva2VuLCB7IFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IEludGVycHJldGVyLCB7IFJ1bnRpbWVFeGNlcHRpb24gfSBmcm9tICcuL2ludGVycHJldGVyJztcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVubmVyIHtcbiAgICBoYWRFcnJvciA9IGZhbHNlO1xuICAgIGhhZFJ1bnRpbWVFcnJvciA9IGZhbHNlO1xuICAgIGludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKHRoaXMpO1xuXG4gICAgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IExvZ2dlcikge1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB9XG5cbiAgICBydW4oc291cmNlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKHNvdXJjZSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHNjYW5uZXIuc2NhblRva2VucygpO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIodG9rZW5zLCB0aGlzKTtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50cyA9IHBhcnNlci5wYXJzZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcih0aGlzLmludGVycHJldGVyLCB0aGlzKTtcbiAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZShzdGF0ZW1lbnRzKTtcblxuICAgICAgICBpZiAodGhpcy5oYWRFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnRlcnByZXRlci5pbnRlcnByZXQoc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgZXJyb3IobGluZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRFcnJvcihsaW5lLCAnJywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZXJyb3JUb2tlbih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkVPRikge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRFcnJvcih0b2tlbi5saW5lLCAnYXQgZW5kJywgbWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydEVycm9yKHRva2VuLmxpbmUsIGBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiYCwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBydW50aW1lRXJyb3IoZXJyb3I6IFJ1bnRpbWVFeGNlcHRpb24pIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYFtsaW5lICR7ZXJyb3IudG9rZW4ubGluZX1dICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgdGhpcy5oYWRSdW50aW1lRXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlcG9ydEVycm9yKGxpbmU6IG51bWJlciwgd2hlcmU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbbGluZSAke2xpbmV9XSBFcnJvciAke3doZXJlfTogJHttZXNzYWdlfWApO1xuICAgICAgICB0aGlzLmhhZEVycm9yID0gdHJ1ZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9ydW5uZXIudHMiLCJpbXBvcnQgUnVubmVyIGZyb20gJy4vcnVubmVyJztcbmltcG9ydCBUb2tlbiwgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcblxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL2FzdC9zdG10JztcbmltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9hc3QvZXhwcic7XG5pbXBvcnQgeyBDbGFzcyB9IGZyb20gJy4vYXN0L3N0bXQnO1xuXG5jbGFzcyBQYXJzZXJFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlciB7XG4gICAgcnVubmVyOiBSdW5uZXI7XG5cbiAgICB0b2tlbnM6IFRva2VuW107XG4gICAgY3VycmVudCA9IDA7XG4gICAgbG9vcERlcHRoID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHRva2VuczogVG9rZW5bXSwgcnVubmVyOiBSdW5uZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuICAgIH1cblxuICAgIHBhcnNlKCk6IFN0bXQuU3RtdFtdIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50cyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVjbGFyYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICAgIH1cblxuICAgIC8vIGRlY2xhcmF0aW9uIOKGkiBmdW5EZWNsIHwgdmFyRGVjbCB8IGNsYXNzRGVjbCB8IHN0YXRlbWVudCA7XG4gICAgcHJpdmF0ZSBkZWNsYXJhdGlvbigpOiBTdG10LlN0bXQgfCB1bmRlZmluZWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZVTikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jdGlvbignZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVkFSKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNMQVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzRGVjbGFyYXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBQYXJzZXJFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZ1bkRlY2wgLT4gXCJmdW5cIiBmdW5jdGlvblxuICAgIC8vIGZ1bmN0aW9uIC0+IElERU5USUZJRVIgXCIoXCIgcGFyYW1ldGVycz8gXCIpXCIgYmxvY2tcbiAgICBwcml2YXRlIGZ1bmN0aW9uKGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLklERU5USUZJRVIsXG4gICAgICAgICAgICBgRXhwZWN0ZWQgJHtraW5kfSBuYW1lLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuZnVuY3Rpb25Cb2R5KGtpbmQpO1xuXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jdGlvbihuYW1lLCBib2R5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZ1bmN0aW9uQm9keShraW5kOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MRUZUX1BBUkVOLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgJHtraW5kfSBuYW1lLmApO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SSUdIVF9QQVJFTikpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWVrKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIDggcGFyYW1ldGVycy4nLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5UeXBlLklERU5USUZJRVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAnRXhwZWN0ZWQgcGFyYW1ldGVyIG5hbWUuJyxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ09NTUEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUklHSFRfUEFSRU4sICdFeHBlY3RlZCBcIilcIiBhZnRlciBwYXJhbWV0ZXJzLicpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxFRlRfQlJBQ0UsIGBFeHBlY3RlZCBcIntcIiBiZWZvcmUgJHtraW5kfSBib2R5LmApO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmJsb2NrKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkZ1bmN0aW9uKHBhcmFtZXRlcnMsIGJvZHkpO1xuICAgIH1cblxuICAgIC8vIGNsYXNzRGVjbCAtPiBJREVOVElGSUVSIFwie1wiIGZ1bmN0aW9uKiBcIn1cIiA7XG4gICAgcHJpdmF0ZSBjbGFzc0RlY2xhcmF0aW9uKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLklERU5USUZJRVIsXG4gICAgICAgICAgICAnRXhwZWN0ZWQgYSBuYW1lIGZvciB0aGUgY2xhc3MuJyxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxFRlRfQlJBQ0UsICdFeHBlY3RlZCBcIntcIiBhZnRlciBjbGFzcyBuYW1lLicpO1xuXG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IFN0bXQuRnVuY3Rpb25bXSA9IFtdO1xuICAgICAgICBjb25zdCBjbGFzc01ldGhvZHM6IFN0bXQuRnVuY3Rpb25bXSA9IFtdO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0F0RW5kKCkgJiYgIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJJR0hUX0JSQUNFKSkge1xuICAgICAgICAgICAgY29uc3QgaXNTdGF0aWMgPSB0aGlzLm1hdGNoKFRva2VuVHlwZS5DTEFTUyk7XG4gICAgICAgICAgICAoaXNTdGF0aWMgPyBjbGFzc01ldGhvZHMgOiBtZXRob2RzKS5wdXNoKHRoaXMuZnVuY3Rpb24oJ21ldGhvZCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUklHSFRfQlJBQ0UsICdFeHBlY3RlZCBcIn1cIiBhZnRlciBjbGFzcy4nKTtcblxuICAgICAgICByZXR1cm4gbmV3IENsYXNzKG5hbWUsIG1ldGhvZHMsIGNsYXNzTWV0aG9kcyk7XG4gICAgfVxuXG4gICAgLy8gdmFyRGVjbCAtPiBJREVOVElGSUVSIChcIj1cIiBleHByZXNzaW9uKT8gXCI7XCIgO1xuICAgIHByaXZhdGUgdmFyRGVjbGFyYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuSURFTlRJRklFUixcbiAgICAgICAgICAgICdFeHBlY3RlZCBhIHZhcmlhYmxlIG5hbWUnLFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBpbml0aWFsaXplciA9IHRoaXMubWF0Y2goVG9rZW5UeXBlLkVRVUFMKVxuICAgICAgICAgICAgPyB0aGlzLmV4cHJlc3Npb24oKVxuICAgICAgICAgICAgOiBuZXcgRXhwci5MaXRlcmFsKG51bGwpO1xuXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU0VNSSwgJ0V4cGVjdGVkIFwiO1wiIGFmdGVyIHZhcmlhYmxlIGRlY2xhcmF0aW9uJyk7XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5WYXIobmFtZSwgaW5pdGlhbGl6ZXIpO1xuICAgIH1cblxuICAgIC8vc3RhdGVtZW50IOKGkiBleHByU3RtdCB8IHByaW50U3RtdCB8IGJsb2NrIHwgaWZTdG10IHwgd2hpbGVTdG10ICB8IGZvclN0bXQgfCBicmVha1N0bXQgfCByZXR1cm5TdG10IDtcbiAgICBwcml2YXRlIHN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUFJJTlQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludFN0YXRlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxFRlRfQlJBQ0UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuQmxvY2sodGhpcy5ibG9jaygpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JRikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuV0hJTEUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGlsZVN0YXRlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZPUikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvclN0YXRlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJSRUFLKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtTdGF0ZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SRVRVUk4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmU3RtdCDihpIgXCJpZlwiIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgc3RhdGVtZW50ICggXCJlbHNlXCIgc3RhdGVtZW50ICk/IDtcbiAgICBwcml2YXRlIGlmU3RhdGVtZW50KCkge1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxFRlRfUEFSRU4sICdFeHBlY3RlZCBcIihcIiBhZnRlciBcImlmXCIuJyk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJJR0hUX1BBUkVOLCAnRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgaWYgY29uZGl0aW9uLicpO1xuXG4gICAgICAgIGNvbnN0IHRoZW5CcmFuY2ggPSB0aGlzLnN0YXRlbWVudCgpO1xuICAgICAgICBsZXQgZWxzZUJyYW5jaDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVMU0UpKSB7XG4gICAgICAgICAgICBlbHNlQnJhbmNoID0gdGhpcy5zdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5JZihjb25kaXRpb24sIHRoZW5CcmFuY2gsIGVsc2VCcmFuY2gpO1xuICAgIH1cblxuICAgIC8vIHdoaWxlU3RtdCAtPiBcIndoaWxlXCIgXCIoXCIgY29uZGl0aW9uIFwiKVwiIHN0YXRlbWVudCA7XG4gICAgcHJpdmF0ZSB3aGlsZVN0YXRlbWVudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MRUZUX1BBUkVOLCAnRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgXCJ3aGlsZVwiLicpO1xuICAgICAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLlJJR0hUX1BBUkVOLFxuICAgICAgICAgICAgJ0V4cGVjdGVkIFwiKVwiIGFmdGVyIHdoaWxlIGNvbmRpdGlvbi4nLFxuICAgICAgICApO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmxvb3BEZXB0aCsrO1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuc3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5XaGlsZShjb25kaXRpb24sIGJvZHkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5sb29wRGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZvclN0bXQgLT4gXCJmb3JcIiBcIihcIiAodmFyRGVjbCB8IGV4cHJTdG10IHwgXCI7XCIpIGV4cHI/IFwiO1wiIGV4cHI/KSBzdGF0ZW1lbnQgO1xuICAgIC8vIEZvciBsb29wIGlzIGltcGxlbWVudGVkIGJ5IGRlc3VnYXJpbmcgaXQgdG8gYSB3aGlsZSBsb29wXG4gICAgcHJpdmF0ZSBmb3JTdGF0ZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTEVGVF9QQVJFTiwgJ0V4cGVjZXRlZCBcIihcIiBhZnRlciBcImZvclwiLicpO1xuXG4gICAgICAgIC8vIEdldCBpbml0aWFsaXplclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TRU1JKSkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVkFSKSkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGNvbmRpdGlvblxuICAgICAgICBsZXQgY29uZGl0aW9uO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlNFTUkpKSB7XG4gICAgICAgICAgICBjb25kaXRpb24gPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNFTUksICdFeHBlY3RlZCBcIjtcIiBhZnRlciBmb3IgY29uZGl0aW9uLicpO1xuXG4gICAgICAgIC8vIEdldCBpbmNyZW1lbnRcbiAgICAgICAgbGV0IGluY3JlbWVudDtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SSUdIVF9QQVJFTikpIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUklHSFRfUEFSRU4sICdFeHBlY3RlZCBcIilcIiBhZnRlciBmb3IgY2xhdXNlcy4nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5sb29wRGVwdGgrKztcblxuICAgICAgICAgICAgLy8gR2V0IGJvZHlcbiAgICAgICAgICAgIGxldCBib2R5ID0gdGhpcy5zdGF0ZW1lbnQoKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGluY3JlbWVudCBpcyBkZWZpbmVkLCBhZGQgaXQgYXQgdGhlIGVuZCBvZiB0aGUgYm9keSBibG9ja1xuICAgICAgICAgICAgaWYgKGluY3JlbWVudCkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbYm9keSwgbmV3IFN0bXQuRXhwcmVzc2lvbihpbmNyZW1lbnQpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG5vIGNvbmRpdGlvbiBpcyBkZWZpbmVkLCB0aGVuIHNldCBpdCB0byB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBFeHByLkxpdGVyYWwodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5ID0gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBib2R5KTtcblxuICAgICAgICAgICAgLy8gSWYgYW4gaW50aWFsaXplciBpcyBkZWZpbmVkIHRoZSBhZGQgaXQgYmVmb3JlIHRoZSB3aGlsZSBsb29wIGV4ZWN1dGlvblxuICAgICAgICAgICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IG5ldyBTdG10LkJsb2NrKFtpbml0aWFsaXplciwgYm9keV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMubG9vcERlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBicmVha1N0bXQgLT4gXCJicmVha1wiIFwiO1wiIDtcbiAgICBwcml2YXRlIGJyZWFrU3RhdGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy5sb29wRGVwdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzKCksXG4gICAgICAgICAgICAgICAgJ011c3QgYmUgaW5zaWRlIGEgbG9vcCB0byB1c2UgXCJicmVha1wiLicsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TRU1JLCAnRXhwZWN0ZWQgXCI7XCIgYWZ0ZXIgXCJicmVha1wiLicpO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQnJlYWsoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJldHVyblN0YXRlbWVudCgpIHtcbiAgICAgICAgY29uc3Qga2V5d3JvZCA9IHRoaXMucHJldmlvdXMoKTtcblxuICAgICAgICBsZXQgdmFsdWU6IEV4cHIuRXhwciA9IG5ldyBFeHByLkxpdGVyYWwobnVsbCk7XG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuU0VNSSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNFTUksICdFeHBlY3RlZCBcIjtcIiBhZnRlciByZXR1cm4gdmFsdWUuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlJldHVybihrZXl3cm9kLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gcHJpbnRTdG10IC0+IFwicHJpbnRcIiBleHByIFwiO1wiIDtcbiAgICBwcml2YXRlIHByaW50U3RhdGVtZW50KCkge1xuICAgICAgICBjb25zdCBleHByID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5TRU1JLFxuICAgICAgICAgICAgJ0V4cGVjdGVkIFwiO1wiIGF0IHRoZSBlbmQgb2YgdGhlIGV4cHJlc3Npb24uJyxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlByaW50KGV4cHIpO1xuICAgIH1cblxuICAgIC8vIGV4cHJTdG10IC0+IGV4cHJlc3Npb24gXCI7XCJcbiAgICBwcml2YXRlIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLlNFTUksXG4gICAgICAgICAgICAnRXhwZWN0ZWQgXCI7XCIgYXQgdGhlIGVuZCBvZiB0aGUgZXhwcmVzc2lvbi4nLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRXhwcmVzc2lvbihleHByKTtcbiAgICB9XG5cbiAgICAvLyBibG9jayAtPiAoZGVjbGFyYXRpb24pKiBcIn1cIiA7XG4gICAgcHJpdmF0ZSBibG9jaygpOiBTdG10LlN0bXRbXSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJJR0hUX0JSQUNFKSAmJiAhdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVjbGFyYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SSUdIVF9CUkFDRSwgJ0V4cGVjdGVkIFwifVwiIGFmdGVyIGJsb2NrLicpO1xuICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgICB9XG5cbiAgICAvLyBleHByZXNzaW9uIOKGkiBhc3NpZ25tZW50XG4gICAgcHJpdmF0ZSBleHByZXNzaW9uKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbiAgICB9XG5cbiAgICAvLyBhc3NpZ25tZW50IC0+ICggY2FsbCBcIi5cIiApPyBpZGVudGlmaWVyIFwiPVwiIGFzc2lnbm1lbnQgfCBsb2dpY19vciA7XG4gICAgcHJpdmF0ZSBhc3NpZ25tZW50KCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLm9yKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVRVUFMKSkge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxzID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmFzc2lnbm1lbnQoKTtcblxuICAgICAgICAgICAgaWYgKGV4cHIgaW5zdGFuY2VvZiBFeHByLlZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkFzc2lnbihleHByLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlNldChleHByLm9iamVjdCwgZXhwci5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZXJyb3IoZXF1YWxzLCAnSW52YWxpZCBhc3NpZ25tZW50IHRhcmdldC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIC8vIGxvZ2ljX29yIC0+IGxvZ2ljX2FuZCAoIFwifHxcIiBsb2dpY19hbmQgKSpcbiAgICBwcml2YXRlIG9yKCkge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuYW5kKCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk9SKSAmJiAhdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmFuZCgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIC8vIGxvZ2ljX2FuZCAtPiBlcXVhbGl0eSAoIFwiJiZcIiBlcXVhbGl0eSApKlxuICAgIHByaXZhdGUgYW5kKCkge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQU5EKSAmJiAhdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmFuZCgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIC8vIGNvbWEgLT4gZXF1YWxpdHkgKCBcIixcIiBlcXVhbGl0eSApKiA7XG4gICAgcHJpdmF0ZSBjb21hKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5lcXVhbGl0eSgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5DT01NQSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmVxdWFsaXR5KCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICAvLyBlcXVhbGl0eSDihpIgY29tcGFyaXNvbiAoICggXCIhPVwiIHwgXCI9PVwiICkgY29tcGFyaXNvbiApKiA7XG4gICAgcHJpdmF0ZSBlcXVhbGl0eSgpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuY29tcGFyaXNvbigpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5CQU5HX0VRVUFMLCBUb2tlblR5cGUuRVFVQUxfRVFVQUwpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5jb21wYXJpc29uKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICAvLyBjb21wYXJpc29uIOKGkiBhZGRpdGlvbiAoICggXCI+XCIgfCBcIj49XCIgfCBcIjxcIiB8IFwiPD1cIiApIGFkZGl0aW9uICkqIDtcbiAgICBwcml2YXRlIGNvbXBhcmlzb24oKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XG5cbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgdGhpcy5tYXRjaChcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuR1JFQVRFUixcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuR1JFQVRFX0VRVUFMLFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5MRVNTLFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5MRVNTX0VRVUFMLFxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmFkZGl0aW9uKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbiDihpIgbXVsdGlwbGljYXRpb24gKCAoIFwiLVwiIHwgXCIrXCIgKSBtdWx0aXBsaWNhdGlvbiApKiA7XG4gICAgcHJpdmF0ZSBhZGRpdGlvbigpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuUExVUywgVG9rZW5UeXBlLk1JTlVTKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIC8vIG11bHRpcGxpY2F0aW9uIOKGkiB1bmFyeSAoICggXCIvXCIgfCBcIipcIiApIHVuYXJ5ICkqIDtcbiAgICBwcml2YXRlIG11bHRpcGxpY2F0aW9uKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy51bmFyeSgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TTEFTSCwgVG9rZW5UeXBlLlNUQVIpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5tdWx0aXBsaWNhdGlvbigpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgLy8gdW5hcnkg4oaSICggXCIhXCIgfCBcIi1cIiApIHVuYXJ5XG4gICAgLy8gICAgICAgICB8IGNhbGwgO1xuICAgIHByaXZhdGUgdW5hcnkoKTogRXhwci5FeHByIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJBTkcsIFRva2VuVHlwZS5NSU5VUykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVW5hcnkob3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbGwgLT4gcHJpbWFyeSAoIFwiKFwiIGFyZ3VtZW50cz8gXCIpXCIgfCBcIi5cIiBJREVOVElGSUVSICkqIDtcbiAgICBwcml2YXRlIGNhbGwoKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLnByaW1hcnkoKTtcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxFRlRfUEFSRU4pKSB7XG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMuZmluaXNoQ2FsbChleHByKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRE9UKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICAgICAgICAgIFRva2VuVHlwZS5JREVOVElGSUVSLFxuICAgICAgICAgICAgICAgICAgICAnRXhwZWN0ZWQgcHJvcGVydHkgbmFtZSBhZnRlciBcIi5cIi4nLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkdldChleHByLCBuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICAvLyBhcmd1bWVudHMgLT4gZXhwciAoXCIsXCIgZXhwcikqXG4gICAgcHJpdmF0ZSBmaW5pc2hDYWxsKGNhbGxlZTogRXhwci5FeHByKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgYXJncyA9IFtdO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJJR0hUX1BBUkVOKSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVlaygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Nhbm5vdCBoYXZlIG1vcmUgdGhhbiA4IGFyZ3VtZW50cy4nLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5DT01NQSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyZW4gPSB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuUklHSFRfUEFSRU4sXG4gICAgICAgICAgICAnRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgYXJndW1lbnRzLicsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkNhbGwoY2FsbGVlLCBwYXJlbiwgYXJncyk7XG4gICAgfVxuXG4gICAgLy8gcHJpbWFyeSDihpIgTlVNQkVSIHwgU1RSSU5HIHwgXCJmYWxzZVwiIHwgXCJ0cnVlXCIgfCBcIm5pbFwiIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIiB8IElOREVOVElGSUVSIDtcbiAgICBwcml2YXRlIHByaW1hcnkoKTogRXhwci5FeHByIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZBTFNFKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwoZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRSVUUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5OSUwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5OVU1CRVIsIFRva2VuVHlwZS5TVFJJTkcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbCh0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTEVGVF9QQVJFTikpIHtcbiAgICAgICAgICAgIGxldCBleHByID0gdGhpcy5leHByZXNzaW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuUklHSFRfUEFSRU4sXG4gICAgICAgICAgICAgICAgYEV4cGVjdGVkICcpJyBhZnRlciBleHByZXNzaW9uLmAsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR3JvdXBpbmcoZXhwcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSURFTlRJRklFUikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5WYXJpYWJsZSh0aGlzLnByZXZpb3VzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZVTikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQm9keSgnZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5USElTKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlRoaXModGhpcy5wcmV2aW91cygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHRoaXMuZXJyb3IodGhpcy5wZWVrKCksICdFeHBlY3RlZCBleHByZXNzaW9uJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYXRjaCguLi50eXBlczogVG9rZW5UeXBlW10pIHtcbiAgICAgICAgZm9yIChsZXQgdHlwZSBvZiB0eXBlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrKHR5cGU6IFRva2VuVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0F0RW5kKCkgPyBmYWxzZSA6IHRoaXMucGVlaygpLnR5cGUgPT09IHR5cGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZHZhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0F0RW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkVPRjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnRdO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJldmlvdXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzeW5jaHJvbml6ZSgpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBlZWsoKS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQ0xBU1M6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRlVOOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlZBUjpcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5GT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuSUY6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuV0hJTEU6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUFJJTlQ6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUkVUVVJOOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcnJvcih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJ1bm5lci5lcnJvclRva2VuKHRva2VuLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZXJFcnJvcigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3BhcnNlci50cyIsIi8qIC8hXFwgR2VucmVhdGVkIHZpYSBcIm5wbSBydW4gZ2VucmVhdGUtYXN0XCIgLyFcXCAqL1xuXG5pbXBvcnQgVG9rZW4gZnJvbSAnLi4vdG9rZW4nO1xuaW1wb3J0IHsgU3RtdCB9IGZyb20gJy4vc3RtdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Vj4ge1xuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBWO1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBWO1xuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEdyb3VwaW5nKTogVjtcbiAgICB2aXNpdExpdGVyYWxFeHByKGV4cHI6IExpdGVyYWwpOiBWO1xuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogVjtcbiAgICB2aXNpdENhbGxFeHByKGV4cHI6IENhbGwpOiBWO1xuICAgIHZpc2l0R2V0RXhwcihleHByOiBHZXQpOiBWO1xuICAgIHZpc2l0U2V0RXhwcihleHByOiBTZXQpOiBWO1xuICAgIHZpc2l0VGhpc0V4cHIoZXhwcjogVGhpcyk6IFY7XG4gICAgdmlzaXRMb2dpY2FsRXhwcihleHByOiBMb2dpY2FsKTogVjtcbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBWYXJpYWJsZSk6IFY7XG4gICAgdmlzaXRGdW5jdGlvbkV4cHIoZXhwcjogRnVuY3Rpb24pOiBWO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXhwciB7XG4gICAgYWJzdHJhY3QgYWNjZXB0PFY+KHZpc2l0aW9yOiBFeHByVmlzaXRvcjxWPik6IFY7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ24gZXh0ZW5kcyBFeHByIHtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICB2YWx1ZTogRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgdmFsdWU6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBc3NpZ25FeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIGxlZnQ6IEV4cHI7XG4gICAgb3BlcmF0b3I6IFRva2VuO1xuICAgIHJpZ2h0OiBFeHByO1xuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBFeHByVmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJpbmFyeUV4cHIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JvdXBpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBleHByOiBFeHByO1xuICAgIGNvbnN0cnVjdG9yKGV4cHI6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByID0gZXhwcjtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R3JvdXBpbmdFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWwgZXh0ZW5kcyBFeHByIHtcbiAgICB2YWx1ZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcih0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIG9wZXJhdGlvbjogVG9rZW47XG4gICAgcmlnaHQ6IEV4cHI7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0aW9uOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICBjYWxsZWU6IEV4cHI7XG4gICAgcGFyZW46IFRva2VuO1xuICAgIGFyZ3M6IEV4cHJbXTtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWU6IEV4cHIsIHBhcmVuOiBUb2tlbiwgYXJnczogRXhwcltdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBFeHByVmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENhbGxFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldCBleHRlbmRzIEV4cHIge1xuICAgIG9iamVjdDogRXhwcjtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3Q6IEV4cHIsIG5hbWU6IFRva2VuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHZXRFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldCBleHRlbmRzIEV4cHIge1xuICAgIG9iamVjdDogRXhwcjtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICB2YWx1ZTogRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3Q6IEV4cHIsIG5hbWU6IFRva2VuLCB2YWx1ZTogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTZXRFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRoaXMgZXh0ZW5kcyBFeHByIHtcbiAgICBrZXl3b3JkOiBUb2tlbjtcbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUaGlzRXhwcih0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2dpY2FsIGV4dGVuZHMgRXhwciB7XG4gICAgbGVmdDogRXhwcjtcbiAgICBvcGVyYXRvcjogVG9rZW47XG4gICAgcmlnaHQ6IEV4cHI7XG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TG9naWNhbEV4cHIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFeHByIHtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJpYWJsZUV4cHIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBFeHByIHtcbiAgICBwYXJhbWV0ZXI6IFRva2VuW107XG4gICAgYm9keTogU3RtdFtdO1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcjogVG9rZW5bXSwgYm9keTogU3RtdFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGdW5jdGlvbkV4cHIodGhpcyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvYXN0L2V4cHIudHMiLCJpbXBvcnQgUnVubmVyIGZyb20gJy4vcnVubmVyJztcbmltcG9ydCBUb2tlbiwgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcblxuZnVuY3Rpb24gaXNEaWdpdChjOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYyA+PSAnMCcgJiYgYyA8PSAnOSc7XG59XG5cbmZ1bmN0aW9uIGlzQWxwaGEoYzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChjID49ICdhJyAmJiBjIDw9ICd6JykgfHwgKGMgPj0gJ0EnICYmIGMgPD0gJ1onKTtcbn1cblxuZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoYzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzQWxwaGEoYykgfHwgaXNEaWdpdChjKTtcbn1cblxuY29uc3QgS0VZV09SRFM6IE1hcDxzdHJpbmcsIFRva2VuVHlwZT4gPSBuZXcgTWFwKFtcbiAgICBbJ2FuZCcsIFRva2VuVHlwZS5BTkRdLFxuICAgIFsnY2xhc3MnLCBUb2tlblR5cGUuQ0xBU1NdLFxuICAgIFsnZWxzZScsIFRva2VuVHlwZS5FTFNFXSxcbiAgICBbJ2ZhbHNlJywgVG9rZW5UeXBlLkZBTFNFXSxcbiAgICBbJ2ZvcicsIFRva2VuVHlwZS5GT1JdLFxuICAgIFsnaWYnLCBUb2tlblR5cGUuSUZdLFxuICAgIFsnbmlsJywgVG9rZW5UeXBlLk5JTF0sXG4gICAgWydvcicsIFRva2VuVHlwZS5PUl0sXG4gICAgWydwcmludCcsIFRva2VuVHlwZS5QUklOVF0sXG4gICAgWydyZXR1cm4nLCBUb2tlblR5cGUuUkVUVVJOXSxcbiAgICBbJ3N1cGVyJywgVG9rZW5UeXBlLlNVUEVSXSxcbiAgICBbJ3RoaXMnLCBUb2tlblR5cGUuVEhJU10sXG4gICAgWyd0cnVlJywgVG9rZW5UeXBlLlRSVUVdLFxuICAgIFsndmFyJywgVG9rZW5UeXBlLlZBUl0sXG4gICAgWyd3aGlsZScsIFRva2VuVHlwZS5XSElMRV0sXG4gICAgWydicmVhaycsIFRva2VuVHlwZS5CUkVBS10sXG4gICAgWydmdW4nLCBUb2tlblR5cGUuRlVOXSxcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FubmVyIHtcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBydW5uZXI6IFJ1bm5lcjtcblxuICAgIHRva2VuczogVG9rZW5bXSA9IFtdO1xuICAgIHN0YXJ0ID0gMDtcbiAgICBjdXJyZW50ID0gMDtcbiAgICBsaW5lID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nLCBydW5uZXI6IFJ1bm5lcikge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBydW5uZXI7XG4gICAgfVxuXG4gICAgc2NhblRva2VucygpIHtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuc2NhblRva2VuKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGUuRU9GLCAnJywgbnVsbCwgdGhpcy5saW5lKSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQXRFbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPj0gdGhpcy5zb3VyY2UubGVuZ3RoO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWR2YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQrKyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYXRjaChjaGFyOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCkgIT09IGNoYXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXRFbmQoKSA/ICdcXDAnIDogdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZWVrTmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudCArIDEgPj0gdGhpcy5zb3VyY2UubGVuZ3RoXG4gICAgICAgICAgICA/ICdcXDAnXG4gICAgICAgICAgICA6IHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRva2VuKHR5cGU6IFRva2VuVHlwZSwgbGl0ZXJhbDogYW55ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBsZXhlbWUgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbih0eXBlLCBsZXhlbWUsIGxpdGVyYWwsIHRoaXMubGluZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2NhblRva2VuKCkge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTEVGVF9QQVJFTik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJJR0hUX1BBUkVOKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTEVGVF9CUkFDRSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJJR0hUX0JSQUNFKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ09NTUEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5ET1QpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5ET1QpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5NSU5VUyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlBMVVMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICc7JzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5TRU1JKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuU1RBUik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5CQU5HX0VRVUFMIDogVG9rZW5UeXBlLkJBTkcsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkVRVUFMX0VRVUFMIDogVG9rZW5UeXBlLkVRVUFMLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5MRVNTX0VRVUFMIDogVG9rZW5UeXBlLkxFU1MsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCgnPScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRva2VuVHlwZS5HUkVBVEVfRVFVQUxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogVG9rZW5UeXBlLkdSRUFURVIsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBIGNvbW1lbnQgZ29lcyB1bnRpbGUgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09ICdcXG4nICYmICF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goJyonKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBIGNvbW1lbnQgZ29lcyB1bnRpbGUgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZWsoKSAhPT0gJyonICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZWtOZXh0KCkgIT09ICcvJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuaXNBdEVuZCgpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGluZSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNjYXJkIGNsb3NpbmcgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5TTEFTSCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHdoaXRlc3BhY2VzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChpc0RpZ2l0KGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FscGhhKGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yKHRoaXMubGluZSwgYFVuZXhwZWN0ZWQgY2hhcmFjdGVyICR7Y31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0cmluZygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpICE9PSAnXCInICYmICF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5lci5lcnJvcih0aGlzLmxpbmUsICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29uc3VtZSBjbG9zaW5nICdcIidcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgLy8gVHJpbW1lZCBzdXJyb3VuZGluZyBxdW90ZXNcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0ICsgMSwgdGhpcy5jdXJyZW50IC0gMSk7XG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlNUUklORywgdmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbnVtYmVyKCkge1xuICAgICAgICB3aGlsZSAoaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmxvYXRpbmcgbnVtYmVyc1xuICAgICAgICBsZXQgaXNGbG9hdCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICcuJyAmJiBpc0RpZ2l0KHRoaXMucGVla05leHQoKSkpIHtcbiAgICAgICAgICAgIC8vIENvbnN1bWUgJy4nXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIGlzRmxvYXQgPSB0cnVlO1xuXG4gICAgICAgICAgICB3aGlsZSAoaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIGxpdGVyYWwgYWNjb3JkaW5nIHRvIHRoZSB0eXBlXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgY29uc3QgbGl0ZXJhbCA9IGlzRmxvYXQgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLk5VTUJFUiwgbGl0ZXJhbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCkge1xuICAgICAgICB3aGlsZSAoaXNBbHBoYU51bWVyaWModGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xuXG4gICAgICAgIGxldCB0eXBlID0gS0VZV09SRFMuZ2V0KHRleHQpO1xuICAgICAgICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFRva2VuKHR5cGUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3NjYW5uZXIudHMiLCJpbXBvcnQgeyBMb3hJbnN0YW5jZSB9IGZyb20gJy4vY2xhc3MnO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IEludGVycHJldGVyLCB7IFJldHVybkV4Y2VwdGlvbiB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xuXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vYXN0L3N0bXQnO1xuaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL2FzdC9leHByJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExveENhbGxhYmxlIHtcbiAgICBhYnN0cmFjdCBhcml0eTogbnVtYmVyO1xuICAgIGFic3RyYWN0IGNhbGwoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCAuLi5hcmdzOiBhbnlbXSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIExveEZ1bmN0aW9uIGV4dGVuZHMgTG94Q2FsbGFibGUge1xuICAgIGNsb3N1cmU6IEVudmlyb25tZW50O1xuICAgIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBkZWNsYXJhdGlvbjogRXhwci5GdW5jdGlvbjtcbiAgICBpc0luaXRpbGl6ZXI6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgICAgICBkZWNsYXJhdGlvbjogRXhwci5GdW5jdGlvbixcbiAgICAgICAgY2xvc3VyZTogRW52aXJvbm1lbnQsXG4gICAgICAgIGlzSW5pdGlsaXplcjogYm9vbGVhbixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICAgICAgICB0aGlzLmNsb3N1cmUgPSBjbG9zdXJlO1xuICAgICAgICB0aGlzLmlzSW5pdGlsaXplciA9IGlzSW5pdGlsaXplcjtcbiAgICB9XG5cbiAgICBnZXQgYXJpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uLnBhcmFtZXRlci5sZW5ndGg7XG4gICAgfVxuXG4gICAgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIGFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuY2xvc3VyZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyaXR5OyBpKyspIHtcbiAgICAgICAgICAgIGVudmlyb25tZW50LmRlZmluZSh0aGlzLmRlY2xhcmF0aW9uLnBhcmFtZXRlcltpXS5sZXhlbWUsIGFyZ3NbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBTdG10LkJsb2NrKHRoaXMuZGVjbGFyYXRpb24uYm9keSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGludGVycHJldGVyLmV4ZWN1dGVCbG9jayhib2R5LCBlbnZpcm9ubWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXR1cm5FeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWxpemVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZW52aXJvbm1lbnQuZ2V0QXQoMCwgJ3RoaXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQoaW5zdGFuY2U6IExveEluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuY2xvc3VyZSk7XG4gICAgICAgIGVudmlyb25tZW50LmRlZmluZSgndGhpcycsIGluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBMb3hGdW5jdGlvbihcbiAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgIHRoaXMuZGVjbGFyYXRpb24sXG4gICAgICAgICAgICBlbnZpcm9ubWVudCxcbiAgICAgICAgICAgIHRoaXMuaXNJbml0aWxpemVyLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYDxmbiAke3RoaXMubmFtZSB8fCAnYW5vbnltb3VzJ30+YDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9jYWxsYWJsZS50cyIsImltcG9ydCBUb2tlbiBmcm9tICcuL3Rva2VuJztcbmltcG9ydCB7IExveENhbGxhYmxlLCBMb3hGdW5jdGlvbiB9IGZyb20gJy4vY2FsbGFibGUnO1xuaW1wb3J0IEludGVycHJldGVyLCB7IFJ1bnRpbWVFeGNlcHRpb24gfSBmcm9tICcuL2ludGVycHJldGVyJztcblxuZXhwb3J0IGNsYXNzIExveEluc3RhbmNlIHtcbiAgICBrbGFzczogTG94Q2xhc3MgfCBudWxsO1xuICAgIGZpZWxkczogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcblxuICAgIGNvbnN0cnVjdG9yKGtsYXNzOiBMb3hDbGFzcyB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5rbGFzcyA9IGtsYXNzO1xuICAgIH1cblxuICAgIGdldChuYW1lOiBUb2tlbikge1xuICAgICAgICBpZiAoIXRoaXMua2xhc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5oYXMobmFtZS5sZXhlbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMuZ2V0KG5hbWUubGV4ZW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMua2xhc3MuZmluZE1ldGhvZCh0aGlzLCBuYW1lKTtcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKG5hbWUsIGBVbmRlZmluZWQgcHJvcGVydHkgJHtuYW1lLmxleGVtZX0uYCk7XG4gICAgfVxuXG4gICAgc2V0KG5hbWU6IFRva2VuLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuZmllbGRzLnNldChuYW1lLmxleGVtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMua2xhc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGA8SW5zdGFuY2UgJHt0aGlzLmtsYXNzLm5hbWV9PmA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG94Q2xhc3MgZXh0ZW5kcyBMb3hJbnN0YW5jZSBpbXBsZW1lbnRzIExveENhbGxhYmxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbWV0aG9kczogeyBbbmFtZTogc3RyaW5nXTogTG94RnVuY3Rpb24gfTtcblxuICAgIGNvbnN0cnVjdG9yKG1ldGFjbGFzczogTG94Q2xhc3MgfCBudWxsLCBuYW1lOiBzdHJpbmcsIG1ldGhvZHM6IHsgW25hbWU6IHN0cmluZ106IExveEZ1bmN0aW9uIH0pIHtcbiAgICAgICAgc3VwZXIobWV0YWNsYXNzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5tZXRob2RzID0gbWV0aG9kcztcbiAgICB9XG5cbiAgICBjYWxsKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTG94SW5zdGFuY2UodGhpcyk7XG5cbiAgICAgICAgY29uc3QgaW5pdCA9IHRoaXMubWV0aG9kc1snaW5pdCddO1xuICAgICAgICBpZiAoaW5pdCkge1xuICAgICAgICAgICAgaW5pdC5iaW5kKGluc3RhbmNlKS5jYWxsKGludGVycHJldGVyLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBmaW5kTWV0aG9kKGluc3RhbmNlOiBMb3hJbnN0YW5jZSwgbmFtZTogVG9rZW4pIHtcbiAgICAgICAgaWYgKG5hbWUubGV4ZW1lIGluIHRoaXMubWV0aG9kcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWV0aG9kc1tuYW1lLmxleGVtZV0uYmluZChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgYXJpdHkoKSB7XG4gICAgICAgIGNvbnN0IGluaXQgPSB0aGlzLm1ldGhvZHNbJ2luaXQnXTtcbiAgICAgICAgcmV0dXJuIGluaXQgPyBpbml0LmFyaXR5IDogMDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGA8Q2xhc3MgJHt0aGlzLm5hbWV9PmA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvY2xhc3MudHMiLCJpbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vYXN0L2V4cHInO1xuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL2FzdC9zdG10JztcbmltcG9ydCBJbnRlcnByZXRlciBmcm9tICcuL2ludGVycHJldGVyJztcbmltcG9ydCBUb2tlbiwgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcbmltcG9ydCBSdW5uZXIgZnJvbSAnLi9ydW5uZXInO1xuXG5lbnVtIFZhcmlhYmxlU3RhdGUge1xuICAgIERFQ0xBUkVELFxuICAgIERFRklORUQsXG4gICAgUkVBRCxcbn1cblxuaW50ZXJmYWNlIFNjb3BlVmFyaWFibGUge1xuICAgIG5hbWU6IFRva2VuO1xuICAgIHN0YXRlOiBWYXJpYWJsZVN0YXRlO1xufVxuXG50eXBlIFNjb3BlID0gTWFwPHN0cmluZywgU2NvcGVWYXJpYWJsZT47XG5cbmVudW0gRnVuY3Rpb25UeXBlIHtcbiAgICBOT05FLFxuICAgIEZVTkNUSU9OLFxuICAgIE1FVEhPRCxcbiAgICBJTklUSUFMSVpFUixcbn1cblxuZW51bSBDbGFzc1R5cGUge1xuICAgIE5PTkUsXG4gICAgQ0xBU1MsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc29sdmVyXG4gICAgaW1wbGVtZW50cyBFeHByLkV4cHJWaXNpdG9yPHZvaWQ+LCBTdG10LlN0bXRWaXNpdG9yPHZvaWQ+IHtcbiAgICBydW5uZXI6IFJ1bm5lcjtcbiAgICBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXI7XG4gICAgc2NvcGVzOiBTY29wZVtdID0gW107XG5cbiAgICBmdW5jdGlvblR5cGUgPSBGdW5jdGlvblR5cGUuTk9ORTtcbiAgICBjbGFzc1R5cGUgPSBDbGFzc1R5cGUuTk9ORTtcblxuICAgIGNvbnN0cnVjdG9yKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgcnVubmVyOiBSdW5uZXIpIHtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBydW5uZXI7XG4gICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIgPSBpbnRlcnByZXRlcjtcbiAgICB9XG5cbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBTdG10LkJsb2NrKSB7XG4gICAgICAgIHRoaXMuYmVnaW5TY29wZSgpO1xuICAgICAgICB0aGlzLnJlc29sdmUoc3RtdC5zdGF0ZW1lbnRzKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzLmVuZFNjb3BlKCk7XG5cbiAgICAgICAgZm9yIChsZXQgdmFyaWFibGUgb2Ygc2NvcGUhLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdmFyaWFibGUuc3RhdGUgPCBWYXJpYWJsZVN0YXRlLlJFQUQgJiZcbiAgICAgICAgICAgICAgICB2YXJpYWJsZS5uYW1lLnR5cGUgIT09IFRva2VuVHlwZS5USElTXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5lci5lcnJvclRva2VuKHZhcmlhYmxlLm5hbWUsICdVbnVzZWQgdmFyaWFibGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aXNpdEZ1bmN0aW9uU3RtdChzdG10OiBTdG10LkZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVjbGFyZShzdG10Lm5hbWUpO1xuICAgICAgICB0aGlzLmRlZmluZShzdG10Lm5hbWUpO1xuXG4gICAgICAgIHRoaXMucmVzb2x2ZUZ1bmN0aW9uKHN0bXQuZm4sIEZ1bmN0aW9uVHlwZS5GVU5DVElPTik7XG4gICAgfVxuXG4gICAgdmlzaXRGdW5jdGlvbkV4cHIoZXhwcjogRXhwci5GdW5jdGlvbikge1xuICAgICAgICB0aGlzLnJlc29sdmVGdW5jdGlvbihleHByLCBGdW5jdGlvblR5cGUuRlVOQ1RJT04pO1xuICAgIH1cblxuICAgIHZpc2l0VmFyU3RtdChzdG10OiBTdG10LlZhcikge1xuICAgICAgICB0aGlzLmRlY2xhcmUoc3RtdC5uYW1lKTtcblxuICAgICAgICBpZiAoc3RtdC5pbml0aWFsaXplcikge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlRXhwcihzdG10LmluaXRpYWxpemVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVmaW5lKHN0bXQubmFtZSk7XG4gICAgfVxuXG4gICAgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogRXhwci5WYXJpYWJsZSkge1xuICAgICAgICBpZiAodGhpcy5zY29wZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuY3VycmVudFNjb3BlKCkuZ2V0KGV4cHIubmFtZS5sZXhlbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGUgJiYgdmFyaWFibGUuc3RhdGUgPT09IFZhcmlhYmxlU3RhdGUuREVDTEFSRUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5lci5lcnJvclRva2VuKFxuICAgICAgICAgICAgICAgICAgICBleHByLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdDYW5ub3QgcmVhZCB2YXJpYWJsZSBiZWZvcmUgb3duIGluaXQuJyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNvbHZlTG9jYWwoZXhwciwgZXhwci5uYW1lLCB0cnVlKTtcbiAgICB9XG5cbiAgICB2aXNpdEFzc2lnbkV4cHIoZXhwcjogRXhwci5Bc3NpZ24pIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlRXhwcihleHByLnZhbHVlKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlTG9jYWwoZXhwciwgZXhwci5uYW1lLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdmlzaXRHZXRFeHByKGV4cHI6IEV4cHIuR2V0KSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoZXhwci5vYmplY3QpO1xuICAgIH1cblxuICAgIHZpc2l0U2V0RXhwcihleHByOiBFeHByLlNldCkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIudmFsdWUpO1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIub2JqZWN0KTtcbiAgICB9XG5cbiAgICB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc1R5cGUgPSB0aGlzLmNsYXNzVHlwZTtcbiAgICAgICAgdGhpcy5jbGFzc1R5cGUgPSBDbGFzc1R5cGUuQ0xBU1M7XG5cbiAgICAgICAgdGhpcy5kZWNsYXJlKHN0bXQubmFtZSk7XG5cbiAgICAgICAgZm9yIChsZXQgbWV0aG9kIG9mIHN0bXQubWV0aG9kcykge1xuICAgICAgICAgICAgdGhpcy5iZWdpblNjb3BlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY29wZSgpLnNldCgndGhpcycsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXcgVG9rZW4oVG9rZW5UeXBlLlRISVMsICd0aGlzJywgdW5kZWZpbmVkLCBzdG10Lm5hbWUubGluZSksXG4gICAgICAgICAgICAgICAgc3RhdGU6IFZhcmlhYmxlU3RhdGUuREVGSU5FRCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgdHlwZSA9IEZ1bmN0aW9uVHlwZS5NRVRIT0Q7XG4gICAgICAgICAgICBpZiAobWV0aG9kLm5hbWUubGV4ZW1lID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gRnVuY3Rpb25UeXBlLklOSVRJQUxJWkVSO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVGdW5jdGlvbihtZXRob2QuZm4sIHR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzLmVuZFNjb3BlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBtZXRob2Qgb2Ygc3RtdC5jbGFzc01ldGhvZHMpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5TY29wZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5zZXQoJ3RoaXMnLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV3IFRva2VuKFRva2VuVHlwZS5USElTLCAndGhpcycsIHVuZGVmaW5lZCwgc3RtdC5uYW1lLmxpbmUpLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBWYXJpYWJsZVN0YXRlLkRFRklORUQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlRnVuY3Rpb24obWV0aG9kLmZuLCBGdW5jdGlvblR5cGUuTUVUSE9EKTtcblxuICAgICAgICAgICAgdGhpcy5lbmRTY29wZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWZpbmUoc3RtdC5uYW1lKTtcblxuICAgICAgICB0aGlzLmNsYXNzVHlwZSA9IGN1cnJlbnRDbGFzc1R5cGU7XG4gICAgfVxuXG4gICAgdmlzaXRUaGlzRXhwcihleHByOiBFeHByLlRoaXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xhc3NUeXBlICE9PSBDbGFzc1R5cGUuQ0xBU1MpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yVG9rZW4oXG4gICAgICAgICAgICAgICAgZXhwci5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICdDYW4gb25seSBiZSB1c2VkIGluIGNsYXNzIG1ldGhvZHMuJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc29sdmVMb2NhbChleHByLCBleHByLmtleXdvcmQsIHRydWUpO1xuICAgIH1cblxuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogU3RtdC5FeHByZXNzaW9uKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoc3RtdC5leHByKTtcbiAgICB9XG5cbiAgICB2aXNpdElmU3RtdChzdG10OiBTdG10LklmKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoc3RtdC5jb25kaXRpb24pO1xuICAgICAgICB0aGlzLnJlc29sdmVTdG10KHN0bXQudGhlbkJyYW5jaCk7XG5cbiAgICAgICAgaWYgKHN0bXQuZWxzZUJyYW5jaCkge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlU3RtdChzdG10LmVsc2VCcmFuY2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlzaXRQcmludFN0bXQoc3RtdDogU3RtdC5QcmludCkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKHN0bXQuZXhwcik7XG4gICAgfVxuXG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFN0bXQuUmV0dXJuKSB7XG4gICAgICAgIGlmICh0aGlzLmZ1bmN0aW9uVHlwZSA9PT0gRnVuY3Rpb25UeXBlLk5PTkUpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yVG9rZW4oXG4gICAgICAgICAgICAgICAgc3RtdC5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICdDYW5ub3QgcmV0dXJuIGZyb20gdG9wIGxldmVsLicsXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnVuY3Rpb25UeXBlID09PSBGdW5jdGlvblR5cGUuSU5JVElBTElaRVIpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yVG9rZW4oXG4gICAgICAgICAgICAgICAgc3RtdC5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICdDYW5ub3QgcmV0dXJuIGEgdmFsdWUgZnJvbSB0aGUgaW50aWFsaXplci4nLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoc3RtdC52YWx1ZSk7XG4gICAgfVxuXG4gICAgdmlzaXRXaGlsZVN0bXQoc3RtdDogU3RtdC5XaGlsZSkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKHN0bXQuY29uZGl0aW9uKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlU3RtdChzdG10LmJvZHkpO1xuICAgIH1cblxuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBFeHByLkJpbmFyeSkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIubGVmdCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoZXhwci5yaWdodCk7XG4gICAgfVxuXG4gICAgdmlzaXRDYWxsRXhwcihleHByOiBFeHByLkNhbGwpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlRXhwcihleHByLmNhbGxlZSk7XG5cbiAgICAgICAgZm9yIChsZXQgYXJnIG9mIGV4cHIuYXJncykge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlRXhwcihhcmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogRXhwci5Hcm91cGluZykge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIuZXhwcik7XG4gICAgfVxuXG4gICAgdmlzaXRMaXRlcmFsRXhwcihleHByOiBFeHByLkxpdGVyYWwpIHt9XG5cbiAgICB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IEV4cHIuTG9naWNhbCkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIubGVmdCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoZXhwci5yaWdodCk7XG4gICAgfVxuXG4gICAgdmlzaXRVbmFyeUV4cHIoZXhwcjogRXhwci5VbmFyeSkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIucmlnaHQpO1xuICAgIH1cblxuICAgIHZpc2l0QnJlYWtTdG10KCkge31cblxuICAgIHByaXZhdGUgYmVnaW5TY29wZSgpIHtcbiAgICAgICAgdGhpcy5zY29wZXMucHVzaChuZXcgTWFwKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5kU2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3Blcy5wb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlY2xhcmUobmFtZTogVG9rZW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjb3Blcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRTY29wZSgpO1xuXG4gICAgICAgIGlmIChjdXJyZW50LmhhcyhuYW1lLmxleGVtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yVG9rZW4oXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAnRHVwbGljYXRlIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGluIHRoZSBzY29wZS4nLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnQuc2V0KG5hbWUubGV4ZW1lLCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RhdGU6IFZhcmlhYmxlU3RhdGUuREVDTEFSRUQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVmaW5lKG5hbWU6IFRva2VuKSB7XG4gICAgICAgIGlmICghdGhpcy5zY29wZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRTY29wZSgpLnNldChuYW1lLmxleGVtZSwge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0YXRlOiBWYXJpYWJsZVN0YXRlLkRFRklORUQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3VycmVudFNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXNbdGhpcy5zY29wZXMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlRnVuY3Rpb24oZm46IEV4cHIuRnVuY3Rpb24sIHR5cGU6IEZ1bmN0aW9uVHlwZSkge1xuICAgICAgICBjb25zdCBlbmNsb3NpbmdUeXBlID0gdGhpcy5mdW5jdGlvblR5cGU7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25UeXBlID0gdHlwZTtcblxuICAgICAgICB0aGlzLmJlZ2luU2NvcGUoKTtcblxuICAgICAgICBmb3IgKGxldCBwYXJhbSBvZiBmbi5wYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVjbGFyZShwYXJhbSk7XG4gICAgICAgICAgICB0aGlzLmRlZmluZShwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvbHZlKGZuLmJvZHkpO1xuXG4gICAgICAgIHRoaXMuZW5kU2NvcGUoKTtcblxuICAgICAgICB0aGlzLmZ1bmN0aW9uVHlwZSA9IGVuY2xvc2luZ1R5cGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlTG9jYWwoZXhwcjogRXhwci5FeHByLCBuYW1lOiBUb2tlbiwgaXNSZWFkOiBib29sZWFuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNjb3Blcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGVzW2ldLmhhcyhuYW1lLmxleGVtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVycHJldGVyLnJlc29sdmUoZXhwciwgdGhpcy5zY29wZXMubGVuZ3RoIC0gMSAtIGkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZXNbaV0uZ2V0KG5hbWUubGV4ZW1lKSEuc3RhdGUgPSBWYXJpYWJsZVN0YXRlLlJFQUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXJ0eSBjb2RlIGFmdGVyIG5lZWQgdG8gYmUgcmVmYWN0b3JlZFxuXG4gICAgcmVzb2x2ZShzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSkge1xuICAgICAgICBmb3IgKGxldCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlU3RtdChzdGF0ZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlU3RtdChzdGF0ZW1lbnQ6IFN0bXQuU3RtdCkge1xuICAgICAgICBzdGF0ZW1lbnQuYWNjZXB0KHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzb2x2ZUV4cHIoZXhwcjogRXhwci5FeHByKSB7XG4gICAgICAgIGV4cHIuYWNjZXB0KHRoaXMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3Jlc29sdmVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==