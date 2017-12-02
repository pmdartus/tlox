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
window.require.config({ paths: { 'vs': '/monaco-editor' } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDMxNmUyODMzOWI4MzFjMTM1M2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW50ZXJwcmV0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXN0L3N0bXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXlncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXlncm91bmQvcHJlc2V0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9ydW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcGFyc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FzdC9leHByLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3NjYW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY2FsbGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0lB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RVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxDQUFDO1lBRVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxDQUFDO1lBRVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxDQUFDO1lBRVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxDQUFDO1lBRVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDO1lBRVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDO1lBRVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDO1lBRVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGlCQUFTLENBQUMsSUFBSSxDQUMxRCxDQUFDO2dCQUNGLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsUUFBUSxDQUNULElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxpQkFBUyxDQUFDLEtBQUssQ0FDNUQsQ0FBQztnQkFDRixLQUFLLENBQUM7WUFFVixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLFFBQVEsQ0FDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsaUJBQVMsQ0FBQyxJQUFJLENBQzFELENBQUM7Z0JBQ0YsS0FBSyxDQUFDO1lBRVYsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxRQUFRLENBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLGlCQUFTLENBQUMsWUFBWTtvQkFDeEIsQ0FBQyxDQUFDLGlCQUFTLENBQUMsT0FBTyxDQUMxQixDQUFDO2dCQUNGLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsNENBQTRDO29CQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6Qiw0Q0FBNEM7b0JBQzVDLE9BQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUc7d0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFHO3dCQUN2QixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDakIsQ0FBQzt3QkFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNoQixDQUFDO3dCQUVELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbkIsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDdEIscUJBQXFCO3dCQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLElBQUk7Z0JBQ0wscUJBQXFCO2dCQUNyQixLQUFLLENBQUM7WUFFVixLQUFLLElBQUk7Z0JBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLEtBQUssQ0FBQztZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsS0FBSyxDQUFDO1lBRVY7Z0JBQ0ksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO1FBQ1QsQ0FBQztJQUNMLENBQUM7SUFFTyxNQUFNO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixDQUFDO1lBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVmLDZCQUE2QjtRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLE1BQU07UUFDVixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBRUQsbUJBQW1CO1FBQ25CLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsY0FBYztZQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFZixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNMLENBQUM7UUFFRCxzQ0FBc0M7UUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxVQUFVO1FBQ2QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLEdBQUcsaUJBQVMsQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBdlBELDBCQXVQQzs7Ozs7Ozs7OztBQ3pSRCw2Q0FBd0M7QUFDeEMsNkNBQTZEO0FBRTdELG9DQUFtQztBQUduQztDQUdDO0FBSEQsa0NBR0M7QUFFRCxpQkFBeUIsU0FBUSxXQUFXO0lBTXhDLFlBQ0ksSUFBd0IsRUFDeEIsV0FBMEIsRUFDMUIsT0FBb0IsRUFDcEIsWUFBcUI7UUFFckIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxDQUFDLFdBQXdCLEVBQUUsSUFBVztRQUN0QyxNQUFNLFdBQVcsR0FBRyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUM7WUFDRCxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNiLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSw2QkFBZSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQztZQUVELE1BQU0sS0FBSyxDQUFDO1FBQ2hCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLENBQUMsUUFBcUI7UUFDdEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsSUFBSSxXQUFXLENBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFdBQVcsRUFDaEIsV0FBVyxFQUNYLElBQUksQ0FBQyxZQUFZLENBQ3BCLENBQUM7SUFDTixDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxHQUFHLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBN0RELGtDQTZEQzs7Ozs7Ozs7OztBQ3ZFRCw2Q0FBOEQ7QUFFOUQ7SUFJSSxZQUFZLEtBQXNCO1FBRmxDLFdBQU0sR0FBcUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUdqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVc7UUFDWCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxNQUFNLElBQUksOEJBQWdCLENBQUMsSUFBSSxFQUFFLHNCQUFzQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVcsRUFBRSxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFFBQVE7UUFDSixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELE1BQU0sQ0FBQyxhQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDM0MsQ0FBQztDQUNKO0FBcENELGtDQW9DQztBQUVELGNBQXNCLFNBQVEsV0FBVztJQUlyQyxZQUFZLFNBQTBCLEVBQUUsSUFBWSxFQUFFLE9BQXdDO1FBQzFGLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDLFdBQXdCLEVBQUUsR0FBRyxJQUFXO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLFFBQXFCLEVBQUUsSUFBVztRQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUFuQ0QsNEJBbUNDOzs7Ozs7Ozs7O0FDMUVELHVDQUEyQztBQUczQyxJQUFLLGFBSUo7QUFKRCxXQUFLLGFBQWE7SUFDZCx5REFBUTtJQUNSLHVEQUFPO0lBQ1AsaURBQUk7QUFDUixDQUFDLEVBSkksYUFBYSxLQUFiLGFBQWEsUUFJakI7QUFTRCxJQUFLLFlBS0o7QUFMRCxXQUFLLFlBQVk7SUFDYiwrQ0FBSTtJQUNKLHVEQUFRO0lBQ1IsbURBQU07SUFDTiw2REFBVztBQUNmLENBQUMsRUFMSSxZQUFZLEtBQVosWUFBWSxRQUtoQjtBQUVELElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNWLHlDQUFJO0lBQ0osMkNBQUs7QUFDVCxDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQUVEO0lBU0ksWUFBWSxXQUF3QixFQUFFLE1BQWM7UUFMcEQsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDakMsY0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFHdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFnQjtRQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTlCLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLEtBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQ0MsUUFBUSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSTtnQkFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssaUJBQVMsQ0FBQyxJQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDOUQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBbUI7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBbUI7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxZQUFZLENBQUMsSUFBYztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQW1CO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFM0QsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUNsQixJQUFJLENBQUMsSUFBSSxFQUNULHVDQUF1QyxDQUMxQyxDQUFDO1lBQ04sQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBaUI7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFjO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBZ0I7UUFDM0IsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQzVCLElBQUksRUFBRSxJQUFJLGVBQUssQ0FBQyxpQkFBUyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNsRSxLQUFLLEVBQUUsYUFBYSxDQUFDLE9BQU87YUFDL0IsQ0FBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxDQUFDO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUM1QixJQUFJLEVBQUUsSUFBSSxlQUFLLENBQUMsaUJBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbEUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxPQUFPO2FBQy9CLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBZTtRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUNsQixJQUFJLENBQUMsT0FBTyxFQUNaLG9DQUFvQyxDQUN2QyxDQUFDO1FBQ04sQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQXFCO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYTtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFnQjtRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQWlCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQ1osK0JBQStCLENBQ2xDLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQ1osNENBQTRDLENBQy9DLENBQUM7UUFDTixDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFnQjtRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQWlCO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBZTtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBbUI7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQWtCLElBQUcsQ0FBQztJQUV2QyxnQkFBZ0IsQ0FBQyxJQUFrQjtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQWdCO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxjQUFjLEtBQUksQ0FBQztJQUVYLFVBQVU7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLFFBQVE7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sT0FBTyxDQUFDLElBQVc7UUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQ2xCLElBQUksRUFDSiw4Q0FBOEMsQ0FDakQsQ0FBQztRQUNOLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSTtZQUNKLEtBQUssRUFBRSxhQUFhLENBQUMsUUFBUTtTQUNoQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sTUFBTSxDQUFDLElBQVc7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQyxJQUFJO1lBQ0osS0FBSyxFQUFFLGFBQWEsQ0FBQyxPQUFPO1NBQy9CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxZQUFZO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyxlQUFlLENBQUMsRUFBaUIsRUFBRSxJQUFrQjtRQUN6RCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRU8sWUFBWSxDQUFDLElBQWUsRUFBRSxJQUFXLEVBQUUsTUFBZTtRQUM5RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRTNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNoRSxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBeUM7SUFFekMsT0FBTyxDQUFDLFVBQXVCO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVcsQ0FBQyxTQUFvQjtRQUNwQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBZTtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQTNSRCwyQkEyUkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQzMTZlMjgzMzliODMxYzEzNTNjIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW4ge1xuICAgIHR5cGU6IFRva2VuVHlwZTtcbiAgICBsZXhlbWU6IHN0cmluZztcbiAgICBsaXRlcmFsOiBhbnk7XG4gICAgbGluZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogVG9rZW5UeXBlLCBsZXhlbWU6IHN0cmluZywgbGl0ZXJhbDogYW55LCBsaW5lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5sZXhlbWUgPSBsZXhlbWU7XG4gICAgICAgIHRoaXMubGl0ZXJhbCA9IGxpdGVyYWw7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgWyR7dGhpcy50eXBlfV0gJHt0aGlzLmxleGVtZX0gJHt0aGlzLmxpdGVyYWx9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXF1YWxzKGE6IFRva2VuLCBiOiBUb2tlbikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYS50eXBlID09PSBiLnR5cGUgJiZcbiAgICAgICAgICAgIGEubGV4ZW1lID09PSBiLmxleGVtZSAmJlxuICAgICAgICAgICAgYS5saXRlcmFsID09PSBiLmxpdGVyYWwgJiZcbiAgICAgICAgICAgIGEubGluZSA9PT0gYi5saW5lXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICAgIC8vIFNpbmdsZSBjaGFyYWN0ZXIgdG9rZW5zLlxuICAgIExFRlRfUEFSRU4sXG4gICAgUklHSFRfUEFSRU4sXG4gICAgTEVGVF9CUkFDRSxcbiAgICBSSUdIVF9CUkFDRSxcbiAgICBDT01NQSxcbiAgICBET1QsXG4gICAgTUlOVVMsXG4gICAgUExVUyxcbiAgICBTRU1JLFxuICAgIFNMQVNILFxuICAgIFNUQVIsXG5cbiAgICAvLyBPbmUgb2YgdHdvIGNoYXJhY3RlcnMgdG9rZW5zLlxuICAgIEJBTkcsXG4gICAgQkFOR19FUVVBTCxcbiAgICBFUVVBTCxcbiAgICBFUVVBTF9FUVVBTCxcbiAgICBHUkVBVEVSLFxuICAgIEdSRUFURV9FUVVBTCxcbiAgICBMRVNTLFxuICAgIExFU1NfRVFVQUwsXG5cbiAgICAvLyBMaXRlcmFsc1xuICAgIElERU5USUZJRVIsXG4gICAgU1RSSU5HLFxuICAgIE5VTUJFUixcblxuICAgIC8vIEtleXdvcmRzXG4gICAgQU5ELFxuICAgIENMQVNTLFxuICAgIEVMU0UsXG4gICAgRkFMU0UsXG4gICAgRlVOLFxuICAgIEZPUixcbiAgICBJRixcbiAgICBOSUwsXG4gICAgT1IsXG4gICAgUFJJTlQsXG4gICAgUkVUVVJOLFxuICAgIFNVUEVSLFxuICAgIFRISVMsXG4gICAgVFJVRSxcbiAgICBWQVIsXG4gICAgV0hJTEUsXG4gICAgQlJFQUssXG5cbiAgICAvLyBPdGhlcnNcbiAgICBFT0YsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS90b2tlbi50cyIsImltcG9ydCBSdW5uZXIgZnJvbSAnLi9ydW5uZXInO1xuaW1wb3J0IFRva2VuLCB7IFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL2FzdC9leHByJztcbmltcG9ydCAqIGFzIFN0bXQgZnJvbSAnLi9hc3Qvc3RtdCc7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBMb3hDYWxsYWJsZSwgTG94RnVuY3Rpb24gfSBmcm9tICcuL2NhbGxhYmxlJztcbmltcG9ydCB7IExveENsYXNzLCBMb3hJbnN0YW5jZSB9IGZyb20gJy4vY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgUnVudGltZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICB0b2tlbjogVG9rZW47XG4gICAgY29uc3RydWN0b3IodG9rZW46IFRva2VuLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG59XG5cbmNsYXNzIEJyZWFrRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige31cblxuZXhwb3J0IGNsYXNzIFJldHVybkV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICB2YWx1ZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJwcmV0ZXJcbiAgICBpbXBsZW1lbnRzIEV4cHIuRXhwclZpc2l0b3I8YW55PiwgU3RtdC5TdG10VmlzaXRvcjx2b2lkPiB7XG4gICAgcnVubmVyOiBSdW5uZXI7XG5cbiAgICByZWFkb25seSBsb2NhbHM6IE1hcDxFeHByLkV4cHIsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gICAgcmVhZG9ubHkgZ2xvYmFscyA9IG5ldyBFbnZpcm9ubWVudCgpO1xuICAgIHByaXZhdGUgZXZpcm9ubWVudCA9IHRoaXMuZ2xvYmFscztcblxuICAgIGNvbnN0cnVjdG9yKHJ1bm5lcjogUnVubmVyKSB7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuXG4gICAgICAgIHRoaXMuZ2xvYmFscy5kZWZpbmUoXG4gICAgICAgICAgICAnY2xvY2snLFxuICAgICAgICAgICAgbmV3IGNsYXNzIENsb2NrIGV4dGVuZHMgTG94Q2FsbGFibGUge1xuICAgICAgICAgICAgICAgIGFyaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBjYWxsKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KCksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaW50ZXJwcmV0KHN0YXRlbWVudHM6IFN0bXQuU3RtdFtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUnVudGltZUV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMucnVubmVyLnJ1bnRpbWVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGV4ZWN1dGUoc3RhdGVtZW50OiBTdG10LlN0bXQpIHtcbiAgICAgICAgc3RhdGVtZW50LmFjY2VwdCh0aGlzKTtcbiAgICB9XG5cbiAgICB2aXNpdEZ1bmN0aW9uU3RtdChzdG10OiBTdG10LkZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZuID0gbmV3IExveEZ1bmN0aW9uKFxuICAgICAgICAgICAgc3RtdC5uYW1lLmxleGVtZSxcbiAgICAgICAgICAgIHN0bXQuZm4sXG4gICAgICAgICAgICB0aGlzLmV2aXJvbm1lbnQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5ldmlyb25tZW50LmRlZmluZShzdG10Lm5hbWUubGV4ZW1lLCBmbik7XG4gICAgfVxuXG4gICAgdmlzaXRGdW5jdGlvbkV4cHIoZXhwcjogRXhwci5GdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IExveEZ1bmN0aW9uKHVuZGVmaW5lZCwgZXhwciwgdGhpcy5ldmlyb25tZW50LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFN0bXQuUmV0dXJuKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKHN0bXQudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSZXR1cm5FeGNlcHRpb24odmFsdWUpO1xuICAgIH1cblxuICAgIHZpc2l0VmFyU3RtdChzdG10OiBTdG10LlZhcikge1xuICAgICAgICBsZXQgdmFsdWU6IGFueSA9IG51bGw7XG4gICAgICAgIGlmIChzdG10LmluaXRpYWxpemVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmluaXRpYWxpemVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZpcm9ubWVudC5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHZpc2l0VmFyaWFibGVFeHByKGV4cHI6IEV4cHIuVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwVmFyaWFibGUoZXhwci5uYW1lLCBleHByKTtcbiAgICB9XG5cbiAgICB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKSB7XG4gICAgICAgIHRoaXMuZXZpcm9ubWVudC5kZWZpbmUoc3RtdC5uYW1lLmxleGVtZSwgbnVsbCk7XG5cbiAgICAgICAgY29uc3QgY2xhc3NNZXRob2RzOiB7IFtuYW1lOiBzdHJpbmddOiBMb3hGdW5jdGlvbiB9ID0ge307XG4gICAgICAgIGZvciAobGV0IG1ldGhvZCBvZiBzdG10LmNsYXNzTWV0aG9kcykge1xuICAgICAgICAgICAgY2xhc3NNZXRob2RzW21ldGhvZC5uYW1lLmxleGVtZV0gPSBuZXcgTG94RnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgbWV0aG9kLm5hbWUubGV4ZW1lLFxuICAgICAgICAgICAgICAgIG1ldGhvZC5mbixcbiAgICAgICAgICAgICAgICB0aGlzLmV2aXJvbm1lbnQsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWV0YWNsYXNzID0gbmV3IExveENsYXNzKG51bGwsIGAke3N0bXQubmFtZS5sZXhlbWV9bWV0YWAsIGNsYXNzTWV0aG9kcyk7XG5cbiAgICAgICAgY29uc3QgbWV0aG9kczogeyBbbmFtZTogc3RyaW5nXTogTG94RnVuY3Rpb24gfSA9IHt9O1xuICAgICAgICBmb3IgKGxldCBtZXRob2Qgb2Ygc3RtdC5tZXRob2RzKSB7XG4gICAgICAgICAgICBtZXRob2RzW21ldGhvZC5uYW1lLmxleGVtZV0gPSBuZXcgTG94RnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgbWV0aG9kLm5hbWUubGV4ZW1lLFxuICAgICAgICAgICAgICAgIG1ldGhvZC5mbixcbiAgICAgICAgICAgICAgICB0aGlzLmV2aXJvbm1lbnQsXG4gICAgICAgICAgICAgICAgbWV0aG9kLm5hbWUubGV4ZW1lID09PSAnaW5pdCcsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2xhc3MgPSBuZXcgTG94Q2xhc3MobWV0YWNsYXNzLCBzdG10Lm5hbWUubGV4ZW1lLCBtZXRob2RzKTtcbiAgICAgICAgdGhpcy5ldmlyb25tZW50LmFzc2lnbihzdG10Lm5hbWUsIGtsYXNzKTtcbiAgICB9XG5cbiAgICB2aXNpdFRoaXNFeHByKGV4cHI6IEV4cHIuVGhpcykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb29rdXBWYXJpYWJsZShleHByLmtleXdvcmQsIGV4cHIpO1xuICAgIH1cblxuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogU3RtdC5FeHByZXNzaW9uKSB7XG4gICAgICAgIHRoaXMuZXZhbHVhdGUoc3RtdC5leHByKTtcbiAgICB9XG5cbiAgICB2aXNpdFByaW50U3RtdChzdG10OiBTdG10LlByaW50KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShzdG10LmV4cHIpO1xuICAgICAgICB0aGlzLnJ1bm5lci5sb2dnZXIubG9nKHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHZpc2l0QmxvY2tTdG10KHN0bXQ6IFN0bXQuQmxvY2spIHtcbiAgICAgICAgdGhpcy5leGVjdXRlQmxvY2soc3RtdCwgbmV3IEVudmlyb25tZW50KHRoaXMuZXZpcm9ubWVudCkpO1xuICAgIH1cblxuICAgIHZpc2l0SWZTdG10KHN0bXQ6IFN0bXQuSWYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUcnV0aHkodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikpKSB7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoc3RtdC50aGVuQnJhbmNoKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdG10LmVsc2VCcmFuY2gpIHtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdG10LmVsc2VCcmFuY2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlzaXRXaGlsZVN0bXQoc3RtdDogU3RtdC5XaGlsZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuaXNUcnV0aHkodGhpcy5ldmFsdWF0ZShzdG10LmNvbmRpdGlvbikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKHN0bXQuYm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBCcmVha0V4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlzaXRCcmVha1N0bXQoKSB7XG4gICAgICAgIHRocm93IG5ldyBCcmVha0V4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIHZpc2l0TG9naWNhbEV4cHIoZXhwcjogRXhwci5Mb2dpY2FsKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XG5cbiAgICAgICAgaWYgKGV4cHIub3BlcmF0b3IudHlwZSA9PT0gVG9rZW5UeXBlLk9SKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1RydXRoeShsZWZ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVHJ1dGh5KGxlZnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcbiAgICB9XG5cbiAgICB2aXNpdEFzc2lnbkV4cHIoZXhwcjogRXhwci5Bc3NpZ24pOiBhbnkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdGUoZXhwci52YWx1ZSk7XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmxvY2Fscy5nZXQoZXhwcik7XG4gICAgICAgIGlmIChkaXN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmV2aXJvbm1lbnQuYXNzaWduQXQoZGlzdGFuY2UsIGV4cHIubmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxzLmFzc2lnbihleHByLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2aXNpdExpdGVyYWxFeHByKGV4cHI6IEV4cHIuTGl0ZXJhbCk6IGFueSB7XG4gICAgICAgIHJldHVybiBleHByLnZhbHVlO1xuICAgIH1cblxuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEV4cHIuR3JvdXBpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZShleHByLmV4cHIpO1xuICAgIH1cblxuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IEV4cHIuVW5hcnkpOiBhbnkge1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZXZhbHVhdGUoZXhwci5yaWdodCk7XG5cbiAgICAgICAgc3dpdGNoIChleHByLm9wZXJhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5NSU5VUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gLXJpZ2h0O1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQkFORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNUcnV0aHkocmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmlzaXRDYWxsRXhwcihleHByOiBFeHByLkNhbGwpOiBhbnkge1xuICAgICAgICBjb25zdCBmbiA9IHRoaXMuZXZhbHVhdGUoZXhwci5jYWxsZWUpO1xuXG4gICAgICAgIGlmICghKGZuIGluc3RhbmNlb2YgTG94Q2FsbGFibGUpICYmICEoZm4gaW5zdGFuY2VvZiBMb3hDbGFzcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgIGV4cHIucGFyZW4sXG4gICAgICAgICAgICAgICAgJ0NhbiBvbmx5IGNhbGwgZnVuY3Rpb24gYW5kIGNsYXNzIG1ldGhvZHMuJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzID0gZXhwci5hcmdzLm1hcChhcmcgPT4gdGhpcy5ldmFsdWF0ZShhcmcpKTtcblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IGZuLmFyaXR5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUnVudGltZUV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgICBleHByLnBhcmVuLFxuICAgICAgICAgICAgICAgIGBFeHBlY3RlZCAke2ZuLmFyaXR5fSBhcmd1bWVudHMgYnV0IGdvdCAke2FyZ3MubGVuZ3RofS5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgIH1cblxuICAgIHZpc2l0R2V0RXhwcihleHByOiBFeHByLkdldCk6IGFueSB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBMb3hJbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5nZXQoZXhwci5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKFxuICAgICAgICAgICAgZXhwci5uYW1lLFxuICAgICAgICAgICAgJ09ubHkgaW5zdGFuY2VzIGhhdmUgcHJvcGVydGllcy4nLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHZpc2l0U2V0RXhwcihleHByOiBFeHByLlNldCk6IGFueSB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IHRoaXMuZXZhbHVhdGUoZXhwci5vYmplY3QpO1xuXG4gICAgICAgIGlmICghKG9iamVjdCBpbnN0YW5jZW9mIExveEluc3RhbmNlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFeGNlcHRpb24oXG4gICAgICAgICAgICAgICAgZXhwci5uYW1lLFxuICAgICAgICAgICAgICAgICdPbmx5IGluc3RhbmNlcyBoYXZlIGZpZWxkcy4nLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ldmFsdWF0ZShleHByLnZhbHVlKTtcbiAgICAgICAgb2JqZWN0LnNldChleHByLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBFeHByLkJpbmFyeSk6IGFueSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLmV2YWx1YXRlKGV4cHIubGVmdCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5ldmFsdWF0ZShleHByLnJpZ2h0KTtcblxuICAgICAgICBzd2l0Y2ggKGV4cHIub3BlcmF0b3IudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUExVUzpcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhsZWZ0KSArIFN0cmluZyhyaWdodCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGxlZnQgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiByaWdodCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgKyByaWdodDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUnVudGltZUV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgZXhwci5vcGVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgJ09wZXJhbmRzIG11c3QgYmUgMiBzdHJpbmdzIG9yIG51bWJlcnMnLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLk1JTlVTOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kcyhleHByLm9wZXJhdG9yLCBsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgLSByaWdodDtcblxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuU0xBU0g6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja051bWJlck9wZXJhbmRzKGV4cHIub3BlcmF0b3IsIGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAvIHJpZ2h0O1xuXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5TVEFSOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kcyhleHByLm9wZXJhdG9yLCBsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodDtcblxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuR1JFQVRFUjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID4gcmlnaHQ7XG5cbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLkdSRUFURV9FUVVBTDpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID49IHJpZ2h0O1xuXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5MRVNTOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXJPcGVyYW5kcyhleHByLm9wZXJhdG9yLCBsZWZ0LCByaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPCByaWdodDtcblxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuTEVTU19FUVVBTDpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTnVtYmVyT3BlcmFuZHMoZXhwci5vcGVyYXRvciwgbGVmdCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IDw9IHJpZ2h0O1xuXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5CQU5HX0VRVUFMOlxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc0VxdWFsKGxlZnQsIHJpZ2h0KTtcblxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRVFVQUxfRVFVQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNFcXVhbChsZWZ0LCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBleGVjdXRlQmxvY2soc3RtdDogU3RtdC5CbG9jaywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzRW52ID0gdGhpcy5ldmlyb25tZW50O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmV2aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcblxuICAgICAgICAgICAgZm9yIChsZXQgc3RhdGVtZW50IG9mIHN0bXQuc3RhdGVtZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZShzdGF0ZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5ldmlyb25tZW50ID0gcHJldmlvdXNFbnY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZShleHByOiBFeHByLkV4cHIpOiBhbnkge1xuICAgICAgICByZXR1cm4gZXhwci5hY2NlcHQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShleHByOiBFeHByLkV4cHIsIGRlcHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbHMuc2V0KGV4cHIsIGRlcHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvb2t1cFZhcmlhYmxlKG5hbWU6IFRva2VuLCBleHByOiBFeHByLkV4cHIpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmxvY2Fscy5nZXQoZXhwcik7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2aXJvbm1lbnQuZ2V0QXQoZGlzdGFuY2UsIG5hbWUubGV4ZW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbHMuZ2V0KG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1RydXRoeSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgOiB2YWx1ZSA9PSBudWxsID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNFcXVhbChhOiBhbnksIGI6IGFueSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiID8gYSA9PSBiIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja051bWJlck9wZXJhbmQob3BlcmF0b3I6IFRva2VuLCBvcGVyYW5kOiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcGVyYW5kICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFeGNlcHRpb24ob3BlcmF0b3IsICdPcGVyYW5kIG11c3QgYmUgYSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tOdW1iZXJPcGVyYW5kcyhvcGVyYXRvcjogVG9rZW4sIGxlZnQ6IGFueSwgcmlnaHQ6IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIGxlZnQgIT09ICdudW1iZXInICYmIHR5cGVvZiByaWdodCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKG9wZXJhdG9yLCAnT3BlcmFuZHMgbXVzdCBiZSAyIG51bWJlcnMnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2ludGVycHJldGVyLnRzIiwiLyogLyFcXCBHZW5yZWF0ZWQgdmlhIFwibnBtIHJ1biBnZW5yZWF0ZS1hc3RcIiAvIVxcICovXG5cbmltcG9ydCBUb2tlbiBmcm9tICcuLi90b2tlbic7XG5pbXBvcnQgeyBFeHByLCBGdW5jdGlvbiBhcyBGdW5jdGlvbkV4cHIgfSBmcm9tICcuL2V4cHInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0bXRWaXNpdG9yPFY+IHtcbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBCbG9jayk6IFY7XG4gICAgdmlzaXRFeHByZXNzaW9uU3RtdChzdG10OiBFeHByZXNzaW9uKTogVjtcbiAgICB2aXNpdENsYXNzU3RtdChzdG10OiBDbGFzcyk6IFY7XG4gICAgdmlzaXRJZlN0bXQoc3RtdDogSWYpOiBWO1xuICAgIHZpc2l0V2hpbGVTdG10KHN0bXQ6IFdoaWxlKTogVjtcbiAgICB2aXNpdEJyZWFrU3RtdChzdG10OiBCcmVhayk6IFY7XG4gICAgdmlzaXRQcmludFN0bXQoc3RtdDogUHJpbnQpOiBWO1xuICAgIHZpc2l0VmFyU3RtdChzdG10OiBWYXIpOiBWO1xuICAgIHZpc2l0RnVuY3Rpb25TdG10KHN0bXQ6IEZ1bmN0aW9uKTogVjtcbiAgICB2aXNpdFJldHVyblN0bXQoc3RtdDogUmV0dXJuKTogVjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0bXQge1xuICAgIGFic3RyYWN0IGFjY2VwdDxWPih2aXNpdGlvcjogU3RtdFZpc2l0b3I8Vj4pOiBWO1xufVxuXG5leHBvcnQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBTdG10IHtcbiAgICBzdGF0ZW1lbnRzOiBTdG10W107XG4gICAgY29uc3RydWN0b3Ioc3RhdGVtZW50czogU3RtdFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBTdG10VmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJsb2NrU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgU3RtdCB7XG4gICAgZXhwcjogRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihleHByOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwciA9IGV4cHI7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBTdG10VmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cHJlc3Npb25TdG10KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzIGV4dGVuZHMgU3RtdCB7XG4gICAgbmFtZTogVG9rZW47XG4gICAgbWV0aG9kczogRnVuY3Rpb25bXTtcbiAgICBjbGFzc01ldGhvZHM6IEZ1bmN0aW9uW107XG4gICAgY29uc3RydWN0b3IobmFtZTogVG9rZW4sIG1ldGhvZHM6IEZ1bmN0aW9uW10sIGNsYXNzTWV0aG9kczogRnVuY3Rpb25bXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm1ldGhvZHMgPSBtZXRob2RzO1xuICAgICAgICB0aGlzLmNsYXNzTWV0aG9kcyA9IGNsYXNzTWV0aG9kcztcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2xhc3NTdG10KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIElmIGV4dGVuZHMgU3RtdCB7XG4gICAgY29uZGl0aW9uOiBFeHByO1xuICAgIHRoZW5CcmFuY2g6IFN0bXQ7XG4gICAgZWxzZUJyYW5jaDogU3RtdCB8IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgY29uZGl0aW9uOiBFeHByLFxuICAgICAgICB0aGVuQnJhbmNoOiBTdG10LFxuICAgICAgICBlbHNlQnJhbmNoOiBTdG10IHwgdW5kZWZpbmVkLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy50aGVuQnJhbmNoID0gdGhlbkJyYW5jaDtcbiAgICAgICAgdGhpcy5lbHNlQnJhbmNoID0gZWxzZUJyYW5jaDtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWZTdG10KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdoaWxlIGV4dGVuZHMgU3RtdCB7XG4gICAgY29uZGl0aW9uOiBFeHByO1xuICAgIGJvZHk6IFN0bXQ7XG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBFeHByLCBib2R5OiBTdG10KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRXaGlsZVN0bXQodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnJlYWsgZXh0ZW5kcyBTdG10IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IFN0bXRWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QnJlYWtTdG10KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByaW50IGV4dGVuZHMgU3RtdCB7XG4gICAgZXhwcjogRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihleHByOiBFeHByKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhwciA9IGV4cHI7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBTdG10VmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdFByaW50U3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXIgZXh0ZW5kcyBTdG10IHtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICBpbml0aWFsaXplcjogRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgaW5pdGlhbGl6ZXI6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJTdG10KHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgU3RtdCB7XG4gICAgbmFtZTogVG9rZW47XG4gICAgZm46IEZ1bmN0aW9uRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgZm46IEZ1bmN0aW9uRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmZuID0gZm47XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBTdG10VmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEZ1bmN0aW9uU3RtdCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXR1cm4gZXh0ZW5kcyBTdG10IHtcbiAgICBrZXl3b3JkOiBUb2tlbjtcbiAgICB2YWx1ZTogRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbiwgdmFsdWU6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogU3RtdFZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRSZXR1cm5TdG10KHRoaXMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2FzdC9zdG10LnRzIiwiaW1wb3J0IFRva2VuIGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgUnVudGltZUV4Y2VwdGlvbiB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnZpcm9ubWVudCB7XG4gICAgZW5jbG9zaW5nPzogRW52aXJvbm1lbnQ7XG4gICAgdmFsdWVzID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKGVuY2xvc2luZz86IEVudmlyb25tZW50KSB7XG4gICAgICAgIHRoaXMuZW5jbG9zaW5nID0gZW5jbG9zaW5nO1xuICAgIH1cblxuICAgIGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBhc3NpZ24obmFtZTogVG9rZW4sIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhcyhuYW1lLmxleGVtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLnNldChuYW1lLmxleGVtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmVuY2xvc2luZy5hc3NpZ24obmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFeGNlcHRpb24oXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBgVW5kZWZpbmVkIHZhcmlhYmxlIGZvciBcIiR7bmFtZS5sZXhlbWV9XCIuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3NpZ25BdChkaXN0YW5jZTogbnVtYmVyLCBuYW1lOiBUb2tlbiwgdmFsdWU6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmNlc3RvcihkaXN0YW5jZSkudmFsdWVzLnNldChuYW1lLmxleGVtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldChuYW1lOiBUb2tlbik6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXMobmFtZS5sZXhlbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMuZ2V0KG5hbWUubGV4ZW1lKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVuY2xvc2luZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jbG9zaW5nLmdldChuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGBVbmRlZmluZWQgdmFyaWFibGUgZm9yIFwiJHtuYW1lLmxleGVtZX1cIi5gLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEF0KGRpc3RhbmNlOiBudW1iZXIsIG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmNlc3RvcihkaXN0YW5jZSkudmFsdWVzLmdldChuYW1lKTtcbiAgICB9XG5cbiAgICBhbmNlc3RvcihkaXN0YW5jZTogbnVtYmVyKTogRW52aXJvbm1lbnQge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPT09IDAgPyB0aGlzIDogdGhpcy5lbmNsb3NpbmchLmFuY2VzdG9yKGRpc3RhbmNlIC0gMSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvZW52aXJvbm1lbnQudHMiLCJpbXBvcnQgeyBwcmVzZXRzIH0gZnJvbSAnLi9wcmVzZXRzJztcbmltcG9ydCBSdW5uZXIgZnJvbSAnLi4vY29yZS9ydW5uZXInO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7IFxuICAgICAgICByZXF1aXJlOiBhbnk7XG4gICAgICAgIG1vbmFjbzogYW55O1xuICAgIH1cbn1cblxuY29uc3QgcHJlc2V0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZXNldC1zZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbmNvbnN0IHJ1bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNydW4tYnV0dG9uJykhO1xuY29uc3QgZWRpdG9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQtY29udGFpbmVyJykhO1xuY29uc3QgbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0LWNvbnRhaW5lcicpITtcblxuZm9yIChsZXQgcHJlc2V0IG9mIHByZXNldHMpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBcbiAgICBvcHRpb24udGV4dCA9IHByZXNldC5uYW1lO1xuICAgIG9wdGlvbi52YWx1ZSA9IHByZXNldC52YWx1ZTtcblxuICAgIHByZXNldFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG53aW5kb3cucmVxdWlyZS5jb25maWcoeyBwYXRoczogeyAndnMnOiAnL21vbmFjby1lZGl0b3InIH19KTtcblxud2luZG93LnJlcXVpcmUoWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSwgKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRvciA9IHdpbmRvdy5tb25hY28uZWRpdG9yLmNyZWF0ZShlZGl0b3JDb250YWluZXIsIHtcbiAgICAgICAgdmFsdWU6IHByZXNldFNlbGVjdC52YWx1ZSxcbiAgICAgICAgbGFuZ3VhZ2U6ICdsb3gnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbG9nID0gd2luZG93Lm1vbmFjby5lZGl0b3IuY3JlYXRlKGxvZ0NvbnRhaW5lciwge1xuICAgICAgICB2YWx1ZTogJycsXG5cbiAgICAgICAgbGluZU51bWJlcnM6IGZhbHNlLFxuICAgICAgICBzY3JvbGxCZXlvbmRMYXN0TGluZTogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgY29udGV4dG1lbnU6IGZhbHNlLFxuICAgICAgICBoaWRlQ3Vyc29ySW5PdmVydmlld1J1bGVyOiB0cnVlLFxuXG4gICAgICAgIG1pbmltYXA6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgdGhlbWU6ICd2cy1kYXJrJyxcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5sYXlvdXQoKTtcbiAgICAgICAgbG9nLmxheW91dCgpO1xuICAgIH0pO1xuICAgIFxuICAgIHByZXNldFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5zZXRWYWx1ZShwcmVzZXRTZWxlY3QudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcnVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVkaXRvci5nZXRWYWx1ZSgpO1xuXG4gICAgICAgIGNvbnN0IGxvZ0xpbmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBhZGRMb2dMaW5lID0gZnVuY3Rpb24obXNnOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGxvZ0xpbmVzLnB1c2gobXNnKTtcbiAgICAgICAgICAgIGxvZy5zZXRWYWx1ZShsb2dMaW5lcy5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBydW5uZXIgPSBuZXcgUnVubmVyKHtcbiAgICAgICAgICAgIGRlYnVnKG1zZzogc3RyaW5nKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcobXNnKVxuICAgICAgICAgICAgICAgIGFkZExvZ0xpbmUoYPCflI4gJHttc2d9YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nKG1zZzogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKVxuICAgICAgICAgICAgICAgIGFkZExvZ0xpbmUoYCAgJHttc2d9YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2FybmluZyhtc2c6IHN0cmluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihtc2cpXG4gICAgICAgICAgICAgICAgYWRkTG9nTGluZShg4pqg77iPICR7bXNnfWApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yKG1zZzogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgICAgICAgICAgIGFkZExvZ0xpbmUoYO+4j+KdjCAke21zZ31gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJ1bm5lci5ydW4odmFsdWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdyZWFkeScpO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsYXlncm91bmQvaW5kZXgudHMiLCJpbnRlcmZhY2UgUHJlc2V0IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdmFsdWU6IHN0cmluZywgXG59XG5cbmV4cG9ydCBjb25zdCBwcmVzZXRzOiBQcmVzZXRbXSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdIZWxsbyB3b3JsZCEnLFxuICAgICAgICB2YWx1ZTogYHByaW50IFwiSGVsbG8gV29ybGQhXCI7YCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0V4cHJlc3Npb25zJyxcbiAgICAgICAgdmFsdWU6IChcbmB2YXIgYXZnID0gKDUgKyA3KSAvIDI7XG5wcmludCBcIkF2ZXJhZ2U6IFwiICsgYXZnO1xuYFxuICAgICAgICApXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGbG93IENvbnRyb2wnLFxuICAgICAgICB2YWx1ZTogKFxuYHZhciBjb25kaXRpb24gPSB0cnVlO1xuaWYgKGNvbmRpdGlvbikge1xuICAgIHByaW50IFwieWVzXCI7XG59IGVsc2Uge1xuICAgIHByaW50IFwibm9cIjtcbn1cblxudmFyIGEgPSAxO1xud2hpbGUgKGEgPCAxMCkge1xuICAgIHByaW50IGE7XG4gICAgYSA9IGEgKyAxO1xufVxuXG5mb3IgKHZhciBhID0gMTsgYSA8IDEwOyBhID0gYSArIDEpIHtcbiAgICBwcmludCBhO1xufVxuYFxuICAgICAgICApXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGdW5jdGlvbicsXG4gICAgICAgIHZhbHVlOiAoXG5gZnVuIGZpYm9uYWNjaShuKSB7XG4gICAgaWYgKG4gPD0gMSkgcmV0dXJuIG47XG4gICAgcmV0dXJuIGZpYm9uYWNjaShuIC0gMikgKyBmaWJvbmFjY2kobiAtIDEpO1xufVxuXG5mb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpID0gaSArIDEpIHtcbiAgICBwcmludCBmaWJvbmFjY2koaSk7XG59XG5cbmZ1biBtYWtlQ2xvc3VyZSgpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgZnVuIGNvdW50KCkge1xuICAgICAgICBpID0gaSArIDE7XG4gICAgICAgIHByaW50IGk7XG4gICAgfVxuXG4gIHJldHVybiBjb3VudDtcbn1cblxudmFyIGNvdW50ZXIgPSBtYWtlQ2xvc3VyZSgpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSA9IGkgKyAxKSB7XG4gICAgcHJpbnQgY291bnRlcigpO1xufVxuXG5mdW4gdGltZXMobiwgZm4pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkgPSBpICsgMSkge1xuICAgICAgICBmbihuKTtcbiAgICB9XG59XG5cbnRpbWVzKGZuIChuKSB7XG4gICAgcHJpbnQgbjtcbn0pXG5gXG4gICAgICAgIClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NsYXNzZXMnLFxuICAgICAgICB2YWx1ZTogKFxuYC8vIFRvZG9cbmBcbiAgICAgICAgKVxuICAgIH1cbl1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGxheWdyb3VuZC9wcmVzZXRzLnRzIiwiaW1wb3J0IFBhcnNlciBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgU2Nhbm5lciBmcm9tICcuL3NjYW5uZXInO1xuaW1wb3J0IFRva2VuLCB7IFRva2VuVHlwZSB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IEludGVycHJldGVyLCB7IFJ1bnRpbWVFeGNlcHRpb24gfSBmcm9tICcuL2ludGVycHJldGVyJztcbmltcG9ydCBSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVyJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVubmVyIHtcbiAgICBoYWRFcnJvciA9IGZhbHNlO1xuICAgIGhhZFJ1bnRpbWVFcnJvciA9IGZhbHNlO1xuICAgIGludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKHRoaXMpO1xuXG4gICAgbG9nZ2VyOiBMb2dnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IExvZ2dlcikge1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB9XG5cbiAgICBydW4oc291cmNlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKHNvdXJjZSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHNjYW5uZXIuc2NhblRva2VucygpO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIodG9rZW5zLCB0aGlzKTtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50cyA9IHBhcnNlci5wYXJzZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhZEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcih0aGlzLmludGVycHJldGVyLCB0aGlzKTtcbiAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZShzdGF0ZW1lbnRzKTtcblxuICAgICAgICBpZiAodGhpcy5oYWRFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnRlcnByZXRlci5pbnRlcnByZXQoc3RhdGVtZW50cyk7XG4gICAgfVxuXG4gICAgZXJyb3IobGluZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRFcnJvcihsaW5lLCAnJywgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZXJyb3JUb2tlbih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkVPRikge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRFcnJvcih0b2tlbi5saW5lLCAnYXQgZW5kJywgbWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydEVycm9yKHRva2VuLmxpbmUsIGBhdCBcIiR7dG9rZW4ubGV4ZW1lfVwiYCwgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBydW50aW1lRXJyb3IoZXJyb3I6IFJ1bnRpbWVFeGNlcHRpb24pIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYFtsaW5lICR7ZXJyb3IudG9rZW4ubGluZX1dICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgdGhpcy5oYWRSdW50aW1lRXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlcG9ydEVycm9yKGxpbmU6IG51bWJlciwgd2hlcmU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBbbGluZSAke2xpbmV9XSBFcnJvciAke3doZXJlfTogJHttZXNzYWdlfWApO1xuICAgICAgICB0aGlzLmhhZEVycm9yID0gdHJ1ZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9ydW5uZXIudHMiLCJpbXBvcnQgUnVubmVyIGZyb20gJy4vcnVubmVyJztcbmltcG9ydCBUb2tlbiwgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcblxuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL2FzdC9zdG10JztcbmltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9hc3QvZXhwcic7XG5pbXBvcnQgeyBDbGFzcyB9IGZyb20gJy4vYXN0L3N0bXQnO1xuXG5jbGFzcyBQYXJzZXJFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlciB7XG4gICAgcnVubmVyOiBSdW5uZXI7XG5cbiAgICB0b2tlbnM6IFRva2VuW107XG4gICAgY3VycmVudCA9IDA7XG4gICAgbG9vcERlcHRoID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHRva2VuczogVG9rZW5bXSwgcnVubmVyOiBSdW5uZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuICAgIH1cblxuICAgIHBhcnNlKCk6IFN0bXQuU3RtdFtdIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50cyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVjbGFyYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICAgIH1cblxuICAgIC8vIGRlY2xhcmF0aW9uIOKGkiBmdW5EZWNsIHwgdmFyRGVjbCB8IGNsYXNzRGVjbCB8IHN0YXRlbWVudCA7XG4gICAgcHJpdmF0ZSBkZWNsYXJhdGlvbigpOiBTdG10LlN0bXQgfCB1bmRlZmluZWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZVTikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jdGlvbignZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVkFSKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkNMQVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzRGVjbGFyYXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBQYXJzZXJFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZ1bkRlY2wgLT4gXCJmdW5cIiBmdW5jdGlvblxuICAgIC8vIGZ1bmN0aW9uIC0+IElERU5USUZJRVIgXCIoXCIgcGFyYW1ldGVycz8gXCIpXCIgYmxvY2tcbiAgICBwcml2YXRlIGZ1bmN0aW9uKGtpbmQ6IHN0cmluZyk6IFN0bXQuRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLklERU5USUZJRVIsXG4gICAgICAgICAgICBgRXhwZWN0ZWQgJHtraW5kfSBuYW1lLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuZnVuY3Rpb25Cb2R5KGtpbmQpO1xuXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5GdW5jdGlvbihuYW1lLCBib2R5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZ1bmN0aW9uQm9keShraW5kOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MRUZUX1BBUkVOLCBgRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgJHtraW5kfSBuYW1lLmApO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SSUdIVF9QQVJFTikpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVycy5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZWVrKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIDggcGFyYW1ldGVycy4nLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5UeXBlLklERU5USUZJRVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAnRXhwZWN0ZWQgcGFyYW1ldGVyIG5hbWUuJyxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQ09NTUEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUklHSFRfUEFSRU4sICdFeHBlY3RlZCBcIilcIiBhZnRlciBwYXJhbWV0ZXJzLicpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxFRlRfQlJBQ0UsIGBFeHBlY3RlZCBcIntcIiBiZWZvcmUgJHtraW5kfSBib2R5LmApO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmJsb2NrKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkZ1bmN0aW9uKHBhcmFtZXRlcnMsIGJvZHkpO1xuICAgIH1cblxuICAgIC8vIGNsYXNzRGVjbCAtPiBJREVOVElGSUVSIFwie1wiIGZ1bmN0aW9uKiBcIn1cIiA7XG4gICAgcHJpdmF0ZSBjbGFzc0RlY2xhcmF0aW9uKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLklERU5USUZJRVIsXG4gICAgICAgICAgICAnRXhwZWN0ZWQgYSBuYW1lIGZvciB0aGUgY2xhc3MuJyxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxFRlRfQlJBQ0UsICdFeHBlY3RlZCBcIntcIiBhZnRlciBjbGFzcyBuYW1lLicpO1xuXG4gICAgICAgIGNvbnN0IG1ldGhvZHM6IFN0bXQuRnVuY3Rpb25bXSA9IFtdO1xuICAgICAgICBjb25zdCBjbGFzc01ldGhvZHM6IFN0bXQuRnVuY3Rpb25bXSA9IFtdO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc0F0RW5kKCkgJiYgIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJJR0hUX0JSQUNFKSkge1xuICAgICAgICAgICAgY29uc3QgaXNTdGF0aWMgPSB0aGlzLm1hdGNoKFRva2VuVHlwZS5DTEFTUyk7XG4gICAgICAgICAgICAoaXNTdGF0aWMgPyBjbGFzc01ldGhvZHMgOiBtZXRob2RzKS5wdXNoKHRoaXMuZnVuY3Rpb24oJ21ldGhvZCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUklHSFRfQlJBQ0UsICdFeHBlY3RlZCBcIn1cIiBhZnRlciBjbGFzcy4nKTtcblxuICAgICAgICByZXR1cm4gbmV3IENsYXNzKG5hbWUsIG1ldGhvZHMsIGNsYXNzTWV0aG9kcyk7XG4gICAgfVxuXG4gICAgLy8gdmFyRGVjbCAtPiBJREVOVElGSUVSIChcIj1cIiBleHByZXNzaW9uKT8gXCI7XCIgO1xuICAgIHByaXZhdGUgdmFyRGVjbGFyYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuSURFTlRJRklFUixcbiAgICAgICAgICAgICdFeHBlY3RlZCBhIHZhcmlhYmxlIG5hbWUnLFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBpbml0aWFsaXplciA9IHRoaXMubWF0Y2goVG9rZW5UeXBlLkVRVUFMKVxuICAgICAgICAgICAgPyB0aGlzLmV4cHJlc3Npb24oKVxuICAgICAgICAgICAgOiBuZXcgRXhwci5MaXRlcmFsKG51bGwpO1xuXG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuU0VNSSwgJ0V4cGVjdGVkIFwiO1wiIGFmdGVyIHZhcmlhYmxlIGRlY2xhcmF0aW9uJyk7XG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5WYXIobmFtZSwgaW5pdGlhbGl6ZXIpO1xuICAgIH1cblxuICAgIC8vc3RhdGVtZW50IOKGkiBleHByU3RtdCB8IHByaW50U3RtdCB8IGJsb2NrIHwgaWZTdG10IHwgd2hpbGVTdG10ICB8IGZvclN0bXQgfCBicmVha1N0bXQgfCByZXR1cm5TdG10IDtcbiAgICBwcml2YXRlIHN0YXRlbWVudCgpOiBTdG10LlN0bXQge1xuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuUFJJTlQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmludFN0YXRlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxFRlRfQlJBQ0UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0bXQuQmxvY2sodGhpcy5ibG9jaygpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5JRikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuV0hJTEUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGlsZVN0YXRlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZPUikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvclN0YXRlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJSRUFLKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtTdGF0ZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5SRVRVUk4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmU3RtdCDihpIgXCJpZlwiIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgc3RhdGVtZW50ICggXCJlbHNlXCIgc3RhdGVtZW50ICk/IDtcbiAgICBwcml2YXRlIGlmU3RhdGVtZW50KCkge1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLkxFRlRfUEFSRU4sICdFeHBlY3RlZCBcIihcIiBhZnRlciBcImlmXCIuJyk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlJJR0hUX1BBUkVOLCAnRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgaWYgY29uZGl0aW9uLicpO1xuXG4gICAgICAgIGNvbnN0IHRoZW5CcmFuY2ggPSB0aGlzLnN0YXRlbWVudCgpO1xuICAgICAgICBsZXQgZWxzZUJyYW5jaDtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVMU0UpKSB7XG4gICAgICAgICAgICBlbHNlQnJhbmNoID0gdGhpcy5zdGF0ZW1lbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgU3RtdC5JZihjb25kaXRpb24sIHRoZW5CcmFuY2gsIGVsc2VCcmFuY2gpO1xuICAgIH1cblxuICAgIC8vIHdoaWxlU3RtdCAtPiBcIndoaWxlXCIgXCIoXCIgY29uZGl0aW9uIFwiKVwiIHN0YXRlbWVudCA7XG4gICAgcHJpdmF0ZSB3aGlsZVN0YXRlbWVudCgpIHtcbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5MRUZUX1BBUkVOLCAnRXhwZWN0ZWQgXCIoXCIgYWZ0ZXIgXCJ3aGlsZVwiLicpO1xuICAgICAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLlJJR0hUX1BBUkVOLFxuICAgICAgICAgICAgJ0V4cGVjdGVkIFwiKVwiIGFmdGVyIHdoaWxlIGNvbmRpdGlvbi4nLFxuICAgICAgICApO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmxvb3BEZXB0aCsrO1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuc3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RtdC5XaGlsZShjb25kaXRpb24sIGJvZHkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5sb29wRGVwdGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZvclN0bXQgLT4gXCJmb3JcIiBcIihcIiAodmFyRGVjbCB8IGV4cHJTdG10IHwgXCI7XCIpIGV4cHI/IFwiO1wiIGV4cHI/KSBzdGF0ZW1lbnQgO1xuICAgIC8vIEZvciBsb29wIGlzIGltcGxlbWVudGVkIGJ5IGRlc3VnYXJpbmcgaXQgdG8gYSB3aGlsZSBsb29wXG4gICAgcHJpdmF0ZSBmb3JTdGF0ZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuTEVGVF9QQVJFTiwgJ0V4cGVjZXRlZCBcIihcIiBhZnRlciBcImZvclwiLicpO1xuXG4gICAgICAgIC8vIEdldCBpbml0aWFsaXplclxuICAgICAgICBsZXQgaW5pdGlhbGl6ZXI7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TRU1JKSkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuVkFSKSkge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZXIgPSB0aGlzLnZhckRlY2xhcmF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbml0aWFsaXplciA9IHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGNvbmRpdGlvblxuICAgICAgICBsZXQgY29uZGl0aW9uO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlNFTUkpKSB7XG4gICAgICAgICAgICBjb25kaXRpb24gPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNFTUksICdFeHBlY3RlZCBcIjtcIiBhZnRlciBmb3IgY29uZGl0aW9uLicpO1xuXG4gICAgICAgIC8vIEdldCBpbmNyZW1lbnRcbiAgICAgICAgbGV0IGluY3JlbWVudDtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrKFRva2VuVHlwZS5SSUdIVF9QQVJFTikpIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZShUb2tlblR5cGUuUklHSFRfUEFSRU4sICdFeHBlY3RlZCBcIilcIiBhZnRlciBmb3IgY2xhdXNlcy4nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5sb29wRGVwdGgrKztcblxuICAgICAgICAgICAgLy8gR2V0IGJvZHlcbiAgICAgICAgICAgIGxldCBib2R5ID0gdGhpcy5zdGF0ZW1lbnQoKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGluY3JlbWVudCBpcyBkZWZpbmVkLCBhZGQgaXQgYXQgdGhlIGVuZCBvZiB0aGUgYm9keSBibG9ja1xuICAgICAgICAgICAgaWYgKGluY3JlbWVudCkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBuZXcgU3RtdC5CbG9jayhbYm9keSwgbmV3IFN0bXQuRXhwcmVzc2lvbihpbmNyZW1lbnQpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG5vIGNvbmRpdGlvbiBpcyBkZWZpbmVkLCB0aGVuIHNldCBpdCB0byB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBFeHByLkxpdGVyYWwodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5ID0gbmV3IFN0bXQuV2hpbGUoY29uZGl0aW9uLCBib2R5KTtcblxuICAgICAgICAgICAgLy8gSWYgYW4gaW50aWFsaXplciBpcyBkZWZpbmVkIHRoZSBhZGQgaXQgYmVmb3JlIHRoZSB3aGlsZSBsb29wIGV4ZWN1dGlvblxuICAgICAgICAgICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IG5ldyBTdG10LkJsb2NrKFtpbml0aWFsaXplciwgYm9keV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMubG9vcERlcHRoLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBicmVha1N0bXQgLT4gXCJicmVha1wiIFwiO1wiIDtcbiAgICBwcml2YXRlIGJyZWFrU3RhdGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy5sb29wRGVwdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzKCksXG4gICAgICAgICAgICAgICAgJ011c3QgYmUgaW5zaWRlIGEgbG9vcCB0byB1c2UgXCJicmVha1wiLicsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5TRU1JLCAnRXhwZWN0ZWQgXCI7XCIgYWZ0ZXIgXCJicmVha1wiLicpO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuQnJlYWsoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJldHVyblN0YXRlbWVudCgpIHtcbiAgICAgICAgY29uc3Qga2V5d3JvZCA9IHRoaXMucHJldmlvdXMoKTtcblxuICAgICAgICBsZXQgdmFsdWU6IEV4cHIuRXhwciA9IG5ldyBFeHByLkxpdGVyYWwobnVsbCk7XG4gICAgICAgIGlmICghdGhpcy5jaGVjayhUb2tlblR5cGUuU0VNSSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnN1bWUoVG9rZW5UeXBlLlNFTUksICdFeHBlY3RlZCBcIjtcIiBhZnRlciByZXR1cm4gdmFsdWUuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlJldHVybihrZXl3cm9kLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gcHJpbnRTdG10IC0+IFwicHJpbnRcIiBleHByIFwiO1wiIDtcbiAgICBwcml2YXRlIHByaW50U3RhdGVtZW50KCkge1xuICAgICAgICBjb25zdCBleHByID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgIFRva2VuVHlwZS5TRU1JLFxuICAgICAgICAgICAgJ0V4cGVjdGVkIFwiO1wiIGF0IHRoZSBlbmQgb2YgdGhlIGV4cHJlc3Npb24uJyxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdG10LlByaW50KGV4cHIpO1xuICAgIH1cblxuICAgIC8vIGV4cHJTdG10IC0+IGV4cHJlc3Npb24gXCI7XCJcbiAgICBwcml2YXRlIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKFxuICAgICAgICAgICAgVG9rZW5UeXBlLlNFTUksXG4gICAgICAgICAgICAnRXhwZWN0ZWQgXCI7XCIgYXQgdGhlIGVuZCBvZiB0aGUgZXhwcmVzc2lvbi4nLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3IFN0bXQuRXhwcmVzc2lvbihleHByKTtcbiAgICB9XG5cbiAgICAvLyBibG9jayAtPiAoZGVjbGFyYXRpb24pKiBcIn1cIiA7XG4gICAgcHJpdmF0ZSBibG9jaygpOiBTdG10LlN0bXRbXSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJJR0hUX0JSQUNFKSAmJiAhdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVjbGFyYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25zdW1lKFRva2VuVHlwZS5SSUdIVF9CUkFDRSwgJ0V4cGVjdGVkIFwifVwiIGFmdGVyIGJsb2NrLicpO1xuICAgICAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgICB9XG5cbiAgICAvLyBleHByZXNzaW9uIOKGkiBhc3NpZ25tZW50XG4gICAgcHJpdmF0ZSBleHByZXNzaW9uKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbiAgICB9XG5cbiAgICAvLyBhc3NpZ25tZW50IC0+ICggY2FsbCBcIi5cIiApPyBpZGVudGlmaWVyIFwiPVwiIGFzc2lnbm1lbnQgfCBsb2dpY19vciA7XG4gICAgcHJpdmF0ZSBhc3NpZ25tZW50KCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLm9yKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkVRVUFMKSkge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxzID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmFzc2lnbm1lbnQoKTtcblxuICAgICAgICAgICAgaWYgKGV4cHIgaW5zdGFuY2VvZiBFeHByLlZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkFzc2lnbihleHByLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwciBpbnN0YW5jZW9mIEV4cHIuR2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlNldChleHByLm9iamVjdCwgZXhwci5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZXJyb3IoZXF1YWxzLCAnSW52YWxpZCBhc3NpZ25tZW50IHRhcmdldC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIC8vIGxvZ2ljX29yIC0+IGxvZ2ljX2FuZCAoIFwifHxcIiBsb2dpY19hbmQgKSpcbiAgICBwcml2YXRlIG9yKCkge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuYW5kKCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMubWF0Y2goVG9rZW5UeXBlLk9SKSAmJiAhdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmFuZCgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIC8vIGxvZ2ljX2FuZCAtPiBlcXVhbGl0eSAoIFwiJiZcIiBlcXVhbGl0eSApKlxuICAgIHByaXZhdGUgYW5kKCkge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuZXF1YWxpdHkoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuQU5EKSAmJiAhdGhpcy5pc0F0RW5kKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmFuZCgpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkxvZ2ljYWwoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIC8vIGNvbWEgLT4gZXF1YWxpdHkgKCBcIixcIiBlcXVhbGl0eSApKiA7XG4gICAgcHJpdmF0ZSBjb21hKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy5lcXVhbGl0eSgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5DT01NQSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmVxdWFsaXR5KCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICAvLyBlcXVhbGl0eSDihpIgY29tcGFyaXNvbiAoICggXCIhPVwiIHwgXCI9PVwiICkgY29tcGFyaXNvbiApKiA7XG4gICAgcHJpdmF0ZSBlcXVhbGl0eSgpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMuY29tcGFyaXNvbigpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5CQU5HX0VRVUFMLCBUb2tlblR5cGUuRVFVQUxfRVFVQUwpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5jb21wYXJpc29uKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICAvLyBjb21wYXJpc29uIOKGkiBhZGRpdGlvbiAoICggXCI+XCIgfCBcIj49XCIgfCBcIjxcIiB8IFwiPD1cIiApIGFkZGl0aW9uICkqIDtcbiAgICBwcml2YXRlIGNvbXBhcmlzb24oKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLmFkZGl0aW9uKCk7XG5cbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgdGhpcy5tYXRjaChcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuR1JFQVRFUixcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuR1JFQVRFX0VRVUFMLFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5MRVNTLFxuICAgICAgICAgICAgICAgIFRva2VuVHlwZS5MRVNTX0VRVUFMLFxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmFkZGl0aW9uKCk7XG4gICAgICAgICAgICBleHByID0gbmV3IEV4cHIuQmluYXJ5KGV4cHIsIG9wZXJhdG9yLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbiDihpIgbXVsdGlwbGljYXRpb24gKCAoIFwiLVwiIHwgXCIrXCIgKSBtdWx0aXBsaWNhdGlvbiApKiA7XG4gICAgcHJpdmF0ZSBhZGRpdGlvbigpOiBFeHByLkV4cHIge1xuICAgICAgICBsZXQgZXhwciA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5tYXRjaChUb2tlblR5cGUuUExVUywgVG9rZW5UeXBlLk1JTlVTKSkge1xuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLnByZXZpb3VzKCk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMubXVsdGlwbGljYXRpb24oKTtcbiAgICAgICAgICAgIGV4cHIgPSBuZXcgRXhwci5CaW5hcnkoZXhwciwgb3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIC8vIG11bHRpcGxpY2F0aW9uIOKGkiB1bmFyeSAoICggXCIvXCIgfCBcIipcIiApIHVuYXJ5ICkqIDtcbiAgICBwcml2YXRlIG11bHRpcGxpY2F0aW9uKCk6IEV4cHIuRXhwciB7XG4gICAgICAgIGxldCBleHByID0gdGhpcy51bmFyeSgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5TTEFTSCwgVG9rZW5UeXBlLlNUQVIpKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5tdWx0aXBsaWNhdGlvbigpO1xuICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkJpbmFyeShleHByLCBvcGVyYXRvciwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHI7XG4gICAgfVxuXG4gICAgLy8gdW5hcnkg4oaSICggXCIhXCIgfCBcIi1cIiApIHVuYXJ5XG4gICAgLy8gICAgICAgICB8IGNhbGwgO1xuICAgIHByaXZhdGUgdW5hcnkoKTogRXhwci5FeHByIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkJBTkcsIFRva2VuVHlwZS5NSU5VUykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5wcmV2aW91cygpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuVW5hcnkob3BlcmF0b3IsIHJpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbGwgLT4gcHJpbWFyeSAoIFwiKFwiIGFyZ3VtZW50cz8gXCIpXCIgfCBcIi5cIiBJREVOVElGSUVSICkqIDtcbiAgICBwcml2YXRlIGNhbGwoKTogRXhwci5FeHByIHtcbiAgICAgICAgbGV0IGV4cHIgPSB0aGlzLnByaW1hcnkoKTtcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkxFRlRfUEFSRU4pKSB7XG4gICAgICAgICAgICAgICAgZXhwciA9IHRoaXMuZmluaXNoQ2FsbChleHByKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuRE9UKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICAgICAgICAgIFRva2VuVHlwZS5JREVOVElGSUVSLFxuICAgICAgICAgICAgICAgICAgICAnRXhwZWN0ZWQgcHJvcGVydHkgbmFtZSBhZnRlciBcIi5cIi4nLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZXhwciA9IG5ldyBFeHByLkdldChleHByLCBuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICAvLyBhcmd1bWVudHMgLT4gZXhwciAoXCIsXCIgZXhwcikqXG4gICAgcHJpdmF0ZSBmaW5pc2hDYWxsKGNhbGxlZTogRXhwci5FeHByKTogRXhwci5FeHByIHtcbiAgICAgICAgY29uc3QgYXJncyA9IFtdO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2soVG9rZW5UeXBlLlJJR0hUX1BBUkVOKSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVlaygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Nhbm5vdCBoYXZlIG1vcmUgdGhhbiA4IGFyZ3VtZW50cy4nLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLm1hdGNoKFRva2VuVHlwZS5DT01NQSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyZW4gPSB0aGlzLmNvbnN1bWUoXG4gICAgICAgICAgICBUb2tlblR5cGUuUklHSFRfUEFSRU4sXG4gICAgICAgICAgICAnRXhwZWN0ZWQgXCIpXCIgYWZ0ZXIgYXJndW1lbnRzLicsXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFeHByLkNhbGwoY2FsbGVlLCBwYXJlbiwgYXJncyk7XG4gICAgfVxuXG4gICAgLy8gcHJpbWFyeSDihpIgTlVNQkVSIHwgU1RSSU5HIHwgXCJmYWxzZVwiIHwgXCJ0cnVlXCIgfCBcIm5pbFwiIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIiB8IElOREVOVElGSUVSIDtcbiAgICBwcml2YXRlIHByaW1hcnkoKTogRXhwci5FeHByIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZBTFNFKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLkxpdGVyYWwoZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLlRSVUUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5OSUwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5OVU1CRVIsIFRva2VuVHlwZS5TVFJJTkcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuTGl0ZXJhbCh0aGlzLnByZXZpb3VzKCkubGl0ZXJhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuTEVGVF9QQVJFTikpIHtcbiAgICAgICAgICAgIGxldCBleHByID0gdGhpcy5leHByZXNzaW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY29uc3VtZShcbiAgICAgICAgICAgICAgICBUb2tlblR5cGUuUklHSFRfUEFSRU4sXG4gICAgICAgICAgICAgICAgYEV4cGVjdGVkICcpJyBhZnRlciBleHByZXNzaW9uLmAsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEV4cHIuR3JvdXBpbmcoZXhwcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXRjaChUb2tlblR5cGUuSURFTlRJRklFUikpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXhwci5WYXJpYWJsZSh0aGlzLnByZXZpb3VzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWF0Y2goVG9rZW5UeXBlLkZVTikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQm9keSgnZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hdGNoKFRva2VuVHlwZS5USElTKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHByLlRoaXModGhpcy5wcmV2aW91cygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHRoaXMuZXJyb3IodGhpcy5wZWVrKCksICdFeHBlY3RlZCBleHByZXNzaW9uJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYXRjaCguLi50eXBlczogVG9rZW5UeXBlW10pIHtcbiAgICAgICAgZm9yIChsZXQgdHlwZSBvZiB0eXBlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrKHR5cGU6IFRva2VuVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0F0RW5kKCkgPyBmYWxzZSA6IHRoaXMucGVlaygpLnR5cGUgPT09IHR5cGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZHZhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0F0RW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZWVrKCkudHlwZSA9PT0gVG9rZW5UeXBlLkVPRjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnRdO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJldmlvdXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmN1cnJlbnQgLSAxXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN1bWUodHlwZTogVG9rZW5UeXBlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2sodHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuZXJyb3IodGhpcy5wZWVrKCksIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzeW5jaHJvbml6ZSgpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBlZWsoKS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQ0xBU1M6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuRlVOOlxuICAgICAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLlZBUjpcbiAgICAgICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5GT1I6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuSUY6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuV0hJTEU6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUFJJTlQ6XG4gICAgICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuUkVUVVJOOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcnJvcih0b2tlbjogVG9rZW4sIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJ1bm5lci5lcnJvclRva2VuKHRva2VuLCBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzZXJFcnJvcigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3BhcnNlci50cyIsIi8qIC8hXFwgR2VucmVhdGVkIHZpYSBcIm5wbSBydW4gZ2VucmVhdGUtYXN0XCIgLyFcXCAqL1xuXG5pbXBvcnQgVG9rZW4gZnJvbSAnLi4vdG9rZW4nO1xuaW1wb3J0IHsgU3RtdCB9IGZyb20gJy4vc3RtdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwclZpc2l0b3I8Vj4ge1xuICAgIHZpc2l0QXNzaWduRXhwcihleHByOiBBc3NpZ24pOiBWO1xuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBCaW5hcnkpOiBWO1xuICAgIHZpc2l0R3JvdXBpbmdFeHByKGV4cHI6IEdyb3VwaW5nKTogVjtcbiAgICB2aXNpdExpdGVyYWxFeHByKGV4cHI6IExpdGVyYWwpOiBWO1xuICAgIHZpc2l0VW5hcnlFeHByKGV4cHI6IFVuYXJ5KTogVjtcbiAgICB2aXNpdENhbGxFeHByKGV4cHI6IENhbGwpOiBWO1xuICAgIHZpc2l0R2V0RXhwcihleHByOiBHZXQpOiBWO1xuICAgIHZpc2l0U2V0RXhwcihleHByOiBTZXQpOiBWO1xuICAgIHZpc2l0VGhpc0V4cHIoZXhwcjogVGhpcyk6IFY7XG4gICAgdmlzaXRMb2dpY2FsRXhwcihleHByOiBMb2dpY2FsKTogVjtcbiAgICB2aXNpdFZhcmlhYmxlRXhwcihleHByOiBWYXJpYWJsZSk6IFY7XG4gICAgdmlzaXRGdW5jdGlvbkV4cHIoZXhwcjogRnVuY3Rpb24pOiBWO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXhwciB7XG4gICAgYWJzdHJhY3QgYWNjZXB0PFY+KHZpc2l0aW9yOiBFeHByVmlzaXRvcjxWPik6IFY7XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ24gZXh0ZW5kcyBFeHByIHtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICB2YWx1ZTogRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbiwgdmFsdWU6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBc3NpZ25FeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIGxlZnQ6IEV4cHI7XG4gICAgb3BlcmF0b3I6IFRva2VuO1xuICAgIHJpZ2h0OiBFeHByO1xuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IEV4cHIsIG9wZXJhdG9yOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBFeHByVmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdEJpbmFyeUV4cHIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JvdXBpbmcgZXh0ZW5kcyBFeHByIHtcbiAgICBleHByOiBFeHByO1xuICAgIGNvbnN0cnVjdG9yKGV4cHI6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByID0gZXhwcjtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0R3JvdXBpbmdFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWwgZXh0ZW5kcyBFeHByIHtcbiAgICB2YWx1ZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsRXhwcih0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbmFyeSBleHRlbmRzIEV4cHIge1xuICAgIG9wZXJhdGlvbjogVG9rZW47XG4gICAgcmlnaHQ6IEV4cHI7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0aW9uOiBUb2tlbiwgcmlnaHQ6IEV4cHIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VW5hcnlFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBFeHByIHtcbiAgICBjYWxsZWU6IEV4cHI7XG4gICAgcGFyZW46IFRva2VuO1xuICAgIGFyZ3M6IEV4cHJbXTtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWU6IEV4cHIsIHBhcmVuOiBUb2tlbiwgYXJnczogRXhwcltdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLnBhcmVuID0gcGFyZW47XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgfVxuICAgIGFjY2VwdDxWPih2aXNpdG9yOiBFeHByVmlzaXRvcjxWPik6IFYge1xuICAgICAgICByZXR1cm4gdmlzaXRvci52aXNpdENhbGxFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldCBleHRlbmRzIEV4cHIge1xuICAgIG9iamVjdDogRXhwcjtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3Q6IEV4cHIsIG5hbWU6IFRva2VuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRHZXRFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldCBleHRlbmRzIEV4cHIge1xuICAgIG9iamVjdDogRXhwcjtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICB2YWx1ZTogRXhwcjtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3Q6IEV4cHIsIG5hbWU6IFRva2VuLCB2YWx1ZTogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTZXRFeHByKHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRoaXMgZXh0ZW5kcyBFeHByIHtcbiAgICBrZXl3b3JkOiBUb2tlbjtcbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUaGlzRXhwcih0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2dpY2FsIGV4dGVuZHMgRXhwciB7XG4gICAgbGVmdDogRXhwcjtcbiAgICBvcGVyYXRvcjogVG9rZW47XG4gICAgcmlnaHQ6IEV4cHI7XG4gICAgY29uc3RydWN0b3IobGVmdDogRXhwciwgb3BlcmF0b3I6IFRva2VuLCByaWdodDogRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG4gICAgYWNjZXB0PFY+KHZpc2l0b3I6IEV4cHJWaXNpdG9yPFY+KTogViB7XG4gICAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TG9naWNhbEV4cHIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFeHByIHtcbiAgICBuYW1lOiBUb2tlbjtcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBUb2tlbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRWYXJpYWJsZUV4cHIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBFeHByIHtcbiAgICBwYXJhbWV0ZXI6IFRva2VuW107XG4gICAgYm9keTogU3RtdFtdO1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcjogVG9rZW5bXSwgYm9keTogU3RtdFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cbiAgICBhY2NlcHQ8Vj4odmlzaXRvcjogRXhwclZpc2l0b3I8Vj4pOiBWIHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRGdW5jdGlvbkV4cHIodGhpcyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvYXN0L2V4cHIudHMiLCJpbXBvcnQgUnVubmVyIGZyb20gJy4vcnVubmVyJztcbmltcG9ydCBUb2tlbiwgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcblxuZnVuY3Rpb24gaXNEaWdpdChjOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYyA+PSAnMCcgJiYgYyA8PSAnOSc7XG59XG5cbmZ1bmN0aW9uIGlzQWxwaGEoYzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChjID49ICdhJyAmJiBjIDw9ICd6JykgfHwgKGMgPj0gJ0EnICYmIGMgPD0gJ1onKTtcbn1cblxuZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoYzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzQWxwaGEoYykgfHwgaXNEaWdpdChjKTtcbn1cblxuY29uc3QgS0VZV09SRFM6IE1hcDxzdHJpbmcsIFRva2VuVHlwZT4gPSBuZXcgTWFwKFtcbiAgICBbJ2FuZCcsIFRva2VuVHlwZS5BTkRdLFxuICAgIFsnY2xhc3MnLCBUb2tlblR5cGUuQ0xBU1NdLFxuICAgIFsnZWxzZScsIFRva2VuVHlwZS5FTFNFXSxcbiAgICBbJ2ZhbHNlJywgVG9rZW5UeXBlLkZBTFNFXSxcbiAgICBbJ2ZvcicsIFRva2VuVHlwZS5GT1JdLFxuICAgIFsnaWYnLCBUb2tlblR5cGUuSUZdLFxuICAgIFsnbmlsJywgVG9rZW5UeXBlLk5JTF0sXG4gICAgWydvcicsIFRva2VuVHlwZS5PUl0sXG4gICAgWydwcmludCcsIFRva2VuVHlwZS5QUklOVF0sXG4gICAgWydyZXR1cm4nLCBUb2tlblR5cGUuUkVUVVJOXSxcbiAgICBbJ3N1cGVyJywgVG9rZW5UeXBlLlNVUEVSXSxcbiAgICBbJ3RoaXMnLCBUb2tlblR5cGUuVEhJU10sXG4gICAgWyd0cnVlJywgVG9rZW5UeXBlLlRSVUVdLFxuICAgIFsndmFyJywgVG9rZW5UeXBlLlZBUl0sXG4gICAgWyd3aGlsZScsIFRva2VuVHlwZS5XSElMRV0sXG4gICAgWydicmVhaycsIFRva2VuVHlwZS5CUkVBS10sXG4gICAgWydmdW4nLCBUb2tlblR5cGUuRlVOXSxcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FubmVyIHtcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBydW5uZXI6IFJ1bm5lcjtcblxuICAgIHRva2VuczogVG9rZW5bXSA9IFtdO1xuICAgIHN0YXJ0ID0gMDtcbiAgICBjdXJyZW50ID0gMDtcbiAgICBsaW5lID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nLCBydW5uZXI6IFJ1bm5lcikge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBydW5uZXI7XG4gICAgfVxuXG4gICAgc2NhblRva2VucygpIHtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuc2NhblRva2VuKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGUuRU9GLCAnJywgbnVsbCwgdGhpcy5saW5lKSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQXRFbmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPj0gdGhpcy5zb3VyY2UubGVuZ3RoO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWR2YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQrKyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYXRjaChjaGFyOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCkgIT09IGNoYXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXRFbmQoKSA/ICdcXDAnIDogdGhpcy5zb3VyY2UuY2hhckF0KHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZWVrTmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudCArIDEgPj0gdGhpcy5zb3VyY2UubGVuZ3RoXG4gICAgICAgICAgICA/ICdcXDAnXG4gICAgICAgICAgICA6IHRoaXMuc291cmNlLmNoYXJBdCh0aGlzLmN1cnJlbnQgKyAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRva2VuKHR5cGU6IFRva2VuVHlwZSwgbGl0ZXJhbDogYW55ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBsZXhlbWUgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKG5ldyBUb2tlbih0eXBlLCBsZXhlbWUsIGxpdGVyYWwsIHRoaXMubGluZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2NhblRva2VuKCkge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgY2FzZSAnKCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTEVGVF9QQVJFTik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJJR0hUX1BBUkVOKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuTEVGVF9CUkFDRSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlJJR0hUX0JSQUNFKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuQ09NTUEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5ET1QpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5ET1QpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5NSU5VUyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlBMVVMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICc7JzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5TRU1JKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihUb2tlblR5cGUuU1RBUik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5CQU5HX0VRVUFMIDogVG9rZW5UeXBlLkJBTkcsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCgnPScpID8gVG9rZW5UeXBlLkVRVUFMX0VRVUFMIDogVG9rZW5UeXBlLkVRVUFMLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goJz0nKSA/IFRva2VuVHlwZS5MRVNTX0VRVUFMIDogVG9rZW5UeXBlLkxFU1MsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaCgnPScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFRva2VuVHlwZS5HUkVBVEVfRVFVQUxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogVG9rZW5UeXBlLkdSRUFURVIsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2goJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBIGNvbW1lbnQgZ29lcyB1bnRpbGUgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCkgIT09ICdcXG4nICYmICF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWF0Y2goJyonKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBIGNvbW1lbnQgZ29lcyB1bnRpbGUgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZWsoKSAhPT0gJyonICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlZWtOZXh0KCkgIT09ICcvJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuaXNBdEVuZCgpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGluZSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNjYXJkIGNsb3NpbmcgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRva2VuKFRva2VuVHlwZS5TTEFTSCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHdoaXRlc3BhY2VzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChpc0RpZ2l0KGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FscGhhKGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yKHRoaXMubGluZSwgYFVuZXhwZWN0ZWQgY2hhcmFjdGVyICR7Y31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0cmluZygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygpICE9PSAnXCInICYmICF0aGlzLmlzQXRFbmQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpID09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNBdEVuZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5lci5lcnJvcih0aGlzLmxpbmUsICdVbnRlcm1pbmF0ZWQgc3RyaW5nLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29uc3VtZSBjbG9zaW5nICdcIidcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICAgICAgLy8gVHJpbW1lZCBzdXJyb3VuZGluZyBxdW90ZXNcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0ICsgMSwgdGhpcy5jdXJyZW50IC0gMSk7XG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLlNUUklORywgdmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbnVtYmVyKCkge1xuICAgICAgICB3aGlsZSAoaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmxvYXRpbmcgbnVtYmVyc1xuICAgICAgICBsZXQgaXNGbG9hdCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICcuJyAmJiBpc0RpZ2l0KHRoaXMucGVla05leHQoKSkpIHtcbiAgICAgICAgICAgIC8vIENvbnN1bWUgJy4nXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIGlzRmxvYXQgPSB0cnVlO1xuXG4gICAgICAgICAgICB3aGlsZSAoaXNEaWdpdCh0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIGxpdGVyYWwgYWNjb3JkaW5nIHRvIHRoZSB0eXBlXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgY29uc3QgbGl0ZXJhbCA9IGlzRmxvYXQgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgICAgIHRoaXMuYWRkVG9rZW4oVG9rZW5UeXBlLk5VTUJFUiwgbGl0ZXJhbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyKCkge1xuICAgICAgICB3aGlsZSAoaXNBbHBoYU51bWVyaWModGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmN1cnJlbnQpO1xuXG4gICAgICAgIGxldCB0eXBlID0gS0VZV09SRFMuZ2V0KHRleHQpO1xuICAgICAgICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0eXBlID0gVG9rZW5UeXBlLklERU5USUZJRVI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFRva2VuKHR5cGUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3NjYW5uZXIudHMiLCJpbXBvcnQgeyBMb3hJbnN0YW5jZSB9IGZyb20gJy4vY2xhc3MnO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IEludGVycHJldGVyLCB7IFJldHVybkV4Y2VwdGlvbiB9IGZyb20gJy4vaW50ZXJwcmV0ZXInO1xuXG5pbXBvcnQgKiBhcyBTdG10IGZyb20gJy4vYXN0L3N0bXQnO1xuaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL2FzdC9leHByJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExveENhbGxhYmxlIHtcbiAgICBhYnN0cmFjdCBhcml0eTogbnVtYmVyO1xuICAgIGFic3RyYWN0IGNhbGwoaW50ZXJwcmV0ZXI6IEludGVycHJldGVyLCAuLi5hcmdzOiBhbnlbXSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIExveEZ1bmN0aW9uIGV4dGVuZHMgTG94Q2FsbGFibGUge1xuICAgIGNsb3N1cmU6IEVudmlyb25tZW50O1xuICAgIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBkZWNsYXJhdGlvbjogRXhwci5GdW5jdGlvbjtcbiAgICBpc0luaXRpbGl6ZXI6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgICAgICBkZWNsYXJhdGlvbjogRXhwci5GdW5jdGlvbixcbiAgICAgICAgY2xvc3VyZTogRW52aXJvbm1lbnQsXG4gICAgICAgIGlzSW5pdGlsaXplcjogYm9vbGVhbixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICAgICAgICB0aGlzLmNsb3N1cmUgPSBjbG9zdXJlO1xuICAgICAgICB0aGlzLmlzSW5pdGlsaXplciA9IGlzSW5pdGlsaXplcjtcbiAgICB9XG5cbiAgICBnZXQgYXJpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uLnBhcmFtZXRlci5sZW5ndGg7XG4gICAgfVxuXG4gICAgY2FsbChpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXIsIGFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuY2xvc3VyZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyaXR5OyBpKyspIHtcbiAgICAgICAgICAgIGVudmlyb25tZW50LmRlZmluZSh0aGlzLmRlY2xhcmF0aW9uLnBhcmFtZXRlcltpXS5sZXhlbWUsIGFyZ3NbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBTdG10LkJsb2NrKHRoaXMuZGVjbGFyYXRpb24uYm9keSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGludGVycHJldGVyLmV4ZWN1dGVCbG9jayhib2R5LCBlbnZpcm9ubWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXR1cm5FeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWxpemVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZW52aXJvbm1lbnQuZ2V0QXQoMCwgJ3RoaXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQoaW5zdGFuY2U6IExveEluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuY2xvc3VyZSk7XG4gICAgICAgIGVudmlyb25tZW50LmRlZmluZSgndGhpcycsIGluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBMb3hGdW5jdGlvbihcbiAgICAgICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgICAgIHRoaXMuZGVjbGFyYXRpb24sXG4gICAgICAgICAgICBlbnZpcm9ubWVudCxcbiAgICAgICAgICAgIHRoaXMuaXNJbml0aWxpemVyLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYDxmbiAke3RoaXMubmFtZSB8fCAnYW5vbnltb3VzJ30+YDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9jYWxsYWJsZS50cyIsImltcG9ydCBUb2tlbiBmcm9tICcuL3Rva2VuJztcbmltcG9ydCB7IExveENhbGxhYmxlLCBMb3hGdW5jdGlvbiB9IGZyb20gJy4vY2FsbGFibGUnO1xuaW1wb3J0IEludGVycHJldGVyLCB7IFJ1bnRpbWVFeGNlcHRpb24gfSBmcm9tICcuL2ludGVycHJldGVyJztcblxuZXhwb3J0IGNsYXNzIExveEluc3RhbmNlIHtcbiAgICBrbGFzczogTG94Q2xhc3MgfCBudWxsO1xuICAgIGZpZWxkczogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcblxuICAgIGNvbnN0cnVjdG9yKGtsYXNzOiBMb3hDbGFzcyB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5rbGFzcyA9IGtsYXNzO1xuICAgIH1cblxuICAgIGdldChuYW1lOiBUb2tlbikge1xuICAgICAgICBpZiAoIXRoaXMua2xhc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5oYXMobmFtZS5sZXhlbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZHMuZ2V0KG5hbWUubGV4ZW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMua2xhc3MuZmluZE1ldGhvZCh0aGlzLCBuYW1lKTtcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBSdW50aW1lRXhjZXB0aW9uKG5hbWUsIGBVbmRlZmluZWQgcHJvcGVydHkgJHtuYW1lLmxleGVtZX0uYCk7XG4gICAgfVxuXG4gICAgc2V0KG5hbWU6IFRva2VuLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuZmllbGRzLnNldChuYW1lLmxleGVtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMua2xhc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGA8SW5zdGFuY2UgJHt0aGlzLmtsYXNzLm5hbWV9PmA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG94Q2xhc3MgZXh0ZW5kcyBMb3hJbnN0YW5jZSBpbXBsZW1lbnRzIExveENhbGxhYmxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbWV0aG9kczogeyBbbmFtZTogc3RyaW5nXTogTG94RnVuY3Rpb24gfTtcblxuICAgIGNvbnN0cnVjdG9yKG1ldGFjbGFzczogTG94Q2xhc3MgfCBudWxsLCBuYW1lOiBzdHJpbmcsIG1ldGhvZHM6IHsgW25hbWU6IHN0cmluZ106IExveEZ1bmN0aW9uIH0pIHtcbiAgICAgICAgc3VwZXIobWV0YWNsYXNzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5tZXRob2RzID0gbWV0aG9kcztcbiAgICB9XG5cbiAgICBjYWxsKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTG94SW5zdGFuY2UodGhpcyk7XG5cbiAgICAgICAgY29uc3QgaW5pdCA9IHRoaXMubWV0aG9kc1snaW5pdCddO1xuICAgICAgICBpZiAoaW5pdCkge1xuICAgICAgICAgICAgaW5pdC5iaW5kKGluc3RhbmNlKS5jYWxsKGludGVycHJldGVyLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBmaW5kTWV0aG9kKGluc3RhbmNlOiBMb3hJbnN0YW5jZSwgbmFtZTogVG9rZW4pIHtcbiAgICAgICAgaWYgKG5hbWUubGV4ZW1lIGluIHRoaXMubWV0aG9kcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWV0aG9kc1tuYW1lLmxleGVtZV0uYmluZChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgYXJpdHkoKSB7XG4gICAgICAgIGNvbnN0IGluaXQgPSB0aGlzLm1ldGhvZHNbJ2luaXQnXTtcbiAgICAgICAgcmV0dXJuIGluaXQgPyBpbml0LmFyaXR5IDogMDtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGA8Q2xhc3MgJHt0aGlzLm5hbWV9PmA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvY2xhc3MudHMiLCJpbXBvcnQgKiBhcyBFeHByIGZyb20gJy4vYXN0L2V4cHInO1xuaW1wb3J0ICogYXMgU3RtdCBmcm9tICcuL2FzdC9zdG10JztcbmltcG9ydCBJbnRlcnByZXRlciBmcm9tICcuL2ludGVycHJldGVyJztcbmltcG9ydCBUb2tlbiwgeyBUb2tlblR5cGUgfSBmcm9tICcuL3Rva2VuJztcbmltcG9ydCBSdW5uZXIgZnJvbSAnLi9ydW5uZXInO1xuXG5lbnVtIFZhcmlhYmxlU3RhdGUge1xuICAgIERFQ0xBUkVELFxuICAgIERFRklORUQsXG4gICAgUkVBRCxcbn1cblxuaW50ZXJmYWNlIFNjb3BlVmFyaWFibGUge1xuICAgIG5hbWU6IFRva2VuO1xuICAgIHN0YXRlOiBWYXJpYWJsZVN0YXRlO1xufVxuXG50eXBlIFNjb3BlID0gTWFwPHN0cmluZywgU2NvcGVWYXJpYWJsZT47XG5cbmVudW0gRnVuY3Rpb25UeXBlIHtcbiAgICBOT05FLFxuICAgIEZVTkNUSU9OLFxuICAgIE1FVEhPRCxcbiAgICBJTklUSUFMSVpFUixcbn1cblxuZW51bSBDbGFzc1R5cGUge1xuICAgIE5PTkUsXG4gICAgQ0xBU1MsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc29sdmVyXG4gICAgaW1wbGVtZW50cyBFeHByLkV4cHJWaXNpdG9yPHZvaWQ+LCBTdG10LlN0bXRWaXNpdG9yPHZvaWQ+IHtcbiAgICBydW5uZXI6IFJ1bm5lcjtcbiAgICBpbnRlcnByZXRlcjogSW50ZXJwcmV0ZXI7XG4gICAgc2NvcGVzOiBTY29wZVtdID0gW107XG5cbiAgICBmdW5jdGlvblR5cGUgPSBGdW5jdGlvblR5cGUuTk9ORTtcbiAgICBjbGFzc1R5cGUgPSBDbGFzc1R5cGUuTk9ORTtcblxuICAgIGNvbnN0cnVjdG9yKGludGVycHJldGVyOiBJbnRlcnByZXRlciwgcnVubmVyOiBSdW5uZXIpIHtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBydW5uZXI7XG4gICAgICAgIHRoaXMuaW50ZXJwcmV0ZXIgPSBpbnRlcnByZXRlcjtcbiAgICB9XG5cbiAgICB2aXNpdEJsb2NrU3RtdChzdG10OiBTdG10LkJsb2NrKSB7XG4gICAgICAgIHRoaXMuYmVnaW5TY29wZSgpO1xuICAgICAgICB0aGlzLnJlc29sdmUoc3RtdC5zdGF0ZW1lbnRzKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzLmVuZFNjb3BlKCk7XG5cbiAgICAgICAgZm9yIChsZXQgdmFyaWFibGUgb2Ygc2NvcGUhLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdmFyaWFibGUuc3RhdGUgPCBWYXJpYWJsZVN0YXRlLlJFQUQgJiZcbiAgICAgICAgICAgICAgICB2YXJpYWJsZS5uYW1lLnR5cGUgIT09IFRva2VuVHlwZS5USElTXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5lci5lcnJvclRva2VuKHZhcmlhYmxlLm5hbWUsICdVbnVzZWQgdmFyaWFibGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aXNpdEZ1bmN0aW9uU3RtdChzdG10OiBTdG10LkZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVjbGFyZShzdG10Lm5hbWUpO1xuICAgICAgICB0aGlzLmRlZmluZShzdG10Lm5hbWUpO1xuXG4gICAgICAgIHRoaXMucmVzb2x2ZUZ1bmN0aW9uKHN0bXQuZm4sIEZ1bmN0aW9uVHlwZS5GVU5DVElPTik7XG4gICAgfVxuXG4gICAgdmlzaXRGdW5jdGlvbkV4cHIoZXhwcjogRXhwci5GdW5jdGlvbikge1xuICAgICAgICB0aGlzLnJlc29sdmVGdW5jdGlvbihleHByLCBGdW5jdGlvblR5cGUuRlVOQ1RJT04pO1xuICAgIH1cblxuICAgIHZpc2l0VmFyU3RtdChzdG10OiBTdG10LlZhcikge1xuICAgICAgICB0aGlzLmRlY2xhcmUoc3RtdC5uYW1lKTtcblxuICAgICAgICBpZiAoc3RtdC5pbml0aWFsaXplcikge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlRXhwcihzdG10LmluaXRpYWxpemVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVmaW5lKHN0bXQubmFtZSk7XG4gICAgfVxuXG4gICAgdmlzaXRWYXJpYWJsZUV4cHIoZXhwcjogRXhwci5WYXJpYWJsZSkge1xuICAgICAgICBpZiAodGhpcy5zY29wZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuY3VycmVudFNjb3BlKCkuZ2V0KGV4cHIubmFtZS5sZXhlbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGUgJiYgdmFyaWFibGUuc3RhdGUgPT09IFZhcmlhYmxlU3RhdGUuREVDTEFSRUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5lci5lcnJvclRva2VuKFxuICAgICAgICAgICAgICAgICAgICBleHByLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdDYW5ub3QgcmVhZCB2YXJpYWJsZSBiZWZvcmUgb3duIGluaXQuJyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNvbHZlTG9jYWwoZXhwciwgZXhwci5uYW1lLCB0cnVlKTtcbiAgICB9XG5cbiAgICB2aXNpdEFzc2lnbkV4cHIoZXhwcjogRXhwci5Bc3NpZ24pIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlRXhwcihleHByLnZhbHVlKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlTG9jYWwoZXhwciwgZXhwci5uYW1lLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdmlzaXRHZXRFeHByKGV4cHI6IEV4cHIuR2V0KSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoZXhwci5vYmplY3QpO1xuICAgIH1cblxuICAgIHZpc2l0U2V0RXhwcihleHByOiBFeHByLlNldCkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIudmFsdWUpO1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIub2JqZWN0KTtcbiAgICB9XG5cbiAgICB2aXNpdENsYXNzU3RtdChzdG10OiBTdG10LkNsYXNzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc1R5cGUgPSB0aGlzLmNsYXNzVHlwZTtcbiAgICAgICAgdGhpcy5jbGFzc1R5cGUgPSBDbGFzc1R5cGUuQ0xBU1M7XG5cbiAgICAgICAgdGhpcy5kZWNsYXJlKHN0bXQubmFtZSk7XG5cbiAgICAgICAgZm9yIChsZXQgbWV0aG9kIG9mIHN0bXQubWV0aG9kcykge1xuICAgICAgICAgICAgdGhpcy5iZWdpblNjb3BlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY29wZSgpLnNldCgndGhpcycsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXcgVG9rZW4oVG9rZW5UeXBlLlRISVMsICd0aGlzJywgdW5kZWZpbmVkLCBzdG10Lm5hbWUubGluZSksXG4gICAgICAgICAgICAgICAgc3RhdGU6IFZhcmlhYmxlU3RhdGUuREVGSU5FRCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgdHlwZSA9IEZ1bmN0aW9uVHlwZS5NRVRIT0Q7XG4gICAgICAgICAgICBpZiAobWV0aG9kLm5hbWUubGV4ZW1lID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gRnVuY3Rpb25UeXBlLklOSVRJQUxJWkVSO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVGdW5jdGlvbihtZXRob2QuZm4sIHR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzLmVuZFNjb3BlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBtZXRob2Qgb2Ygc3RtdC5jbGFzc01ldGhvZHMpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5TY29wZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NvcGUoKS5zZXQoJ3RoaXMnLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV3IFRva2VuKFRva2VuVHlwZS5USElTLCAndGhpcycsIHVuZGVmaW5lZCwgc3RtdC5uYW1lLmxpbmUpLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBWYXJpYWJsZVN0YXRlLkRFRklORUQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlRnVuY3Rpb24obWV0aG9kLmZuLCBGdW5jdGlvblR5cGUuTUVUSE9EKTtcblxuICAgICAgICAgICAgdGhpcy5lbmRTY29wZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWZpbmUoc3RtdC5uYW1lKTtcblxuICAgICAgICB0aGlzLmNsYXNzVHlwZSA9IGN1cnJlbnRDbGFzc1R5cGU7XG4gICAgfVxuXG4gICAgdmlzaXRUaGlzRXhwcihleHByOiBFeHByLlRoaXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xhc3NUeXBlICE9PSBDbGFzc1R5cGUuQ0xBU1MpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yVG9rZW4oXG4gICAgICAgICAgICAgICAgZXhwci5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICdDYW4gb25seSBiZSB1c2VkIGluIGNsYXNzIG1ldGhvZHMuJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc29sdmVMb2NhbChleHByLCBleHByLmtleXdvcmQsIHRydWUpO1xuICAgIH1cblxuICAgIHZpc2l0RXhwcmVzc2lvblN0bXQoc3RtdDogU3RtdC5FeHByZXNzaW9uKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoc3RtdC5leHByKTtcbiAgICB9XG5cbiAgICB2aXNpdElmU3RtdChzdG10OiBTdG10LklmKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoc3RtdC5jb25kaXRpb24pO1xuICAgICAgICB0aGlzLnJlc29sdmVTdG10KHN0bXQudGhlbkJyYW5jaCk7XG5cbiAgICAgICAgaWYgKHN0bXQuZWxzZUJyYW5jaCkge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlU3RtdChzdG10LmVsc2VCcmFuY2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlzaXRQcmludFN0bXQoc3RtdDogU3RtdC5QcmludCkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKHN0bXQuZXhwcik7XG4gICAgfVxuXG4gICAgdmlzaXRSZXR1cm5TdG10KHN0bXQ6IFN0bXQuUmV0dXJuKSB7XG4gICAgICAgIGlmICh0aGlzLmZ1bmN0aW9uVHlwZSA9PT0gRnVuY3Rpb25UeXBlLk5PTkUpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yVG9rZW4oXG4gICAgICAgICAgICAgICAgc3RtdC5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICdDYW5ub3QgcmV0dXJuIGZyb20gdG9wIGxldmVsLicsXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnVuY3Rpb25UeXBlID09PSBGdW5jdGlvblR5cGUuSU5JVElBTElaRVIpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yVG9rZW4oXG4gICAgICAgICAgICAgICAgc3RtdC5rZXl3b3JkLFxuICAgICAgICAgICAgICAgICdDYW5ub3QgcmV0dXJuIGEgdmFsdWUgZnJvbSB0aGUgaW50aWFsaXplci4nLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoc3RtdC52YWx1ZSk7XG4gICAgfVxuXG4gICAgdmlzaXRXaGlsZVN0bXQoc3RtdDogU3RtdC5XaGlsZSkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKHN0bXQuY29uZGl0aW9uKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlU3RtdChzdG10LmJvZHkpO1xuICAgIH1cblxuICAgIHZpc2l0QmluYXJ5RXhwcihleHByOiBFeHByLkJpbmFyeSkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIubGVmdCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoZXhwci5yaWdodCk7XG4gICAgfVxuXG4gICAgdmlzaXRDYWxsRXhwcihleHByOiBFeHByLkNhbGwpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlRXhwcihleHByLmNhbGxlZSk7XG5cbiAgICAgICAgZm9yIChsZXQgYXJnIG9mIGV4cHIuYXJncykge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlRXhwcihhcmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlzaXRHcm91cGluZ0V4cHIoZXhwcjogRXhwci5Hcm91cGluZykge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIuZXhwcik7XG4gICAgfVxuXG4gICAgdmlzaXRMaXRlcmFsRXhwcihleHByOiBFeHByLkxpdGVyYWwpIHt9XG5cbiAgICB2aXNpdExvZ2ljYWxFeHByKGV4cHI6IEV4cHIuTG9naWNhbCkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIubGVmdCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZUV4cHIoZXhwci5yaWdodCk7XG4gICAgfVxuXG4gICAgdmlzaXRVbmFyeUV4cHIoZXhwcjogRXhwci5VbmFyeSkge1xuICAgICAgICB0aGlzLnJlc29sdmVFeHByKGV4cHIucmlnaHQpO1xuICAgIH1cblxuICAgIHZpc2l0QnJlYWtTdG10KCkge31cblxuICAgIHByaXZhdGUgYmVnaW5TY29wZSgpIHtcbiAgICAgICAgdGhpcy5zY29wZXMucHVzaChuZXcgTWFwKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW5kU2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3Blcy5wb3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlY2xhcmUobmFtZTogVG9rZW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjb3Blcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRTY29wZSgpO1xuXG4gICAgICAgIGlmIChjdXJyZW50LmhhcyhuYW1lLmxleGVtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmVycm9yVG9rZW4oXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAnRHVwbGljYXRlIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGluIHRoZSBzY29wZS4nLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnQuc2V0KG5hbWUubGV4ZW1lLCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RhdGU6IFZhcmlhYmxlU3RhdGUuREVDTEFSRUQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVmaW5lKG5hbWU6IFRva2VuKSB7XG4gICAgICAgIGlmICghdGhpcy5zY29wZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRTY29wZSgpLnNldChuYW1lLmxleGVtZSwge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0YXRlOiBWYXJpYWJsZVN0YXRlLkRFRklORUQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3VycmVudFNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXNbdGhpcy5zY29wZXMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlRnVuY3Rpb24oZm46IEV4cHIuRnVuY3Rpb24sIHR5cGU6IEZ1bmN0aW9uVHlwZSkge1xuICAgICAgICBjb25zdCBlbmNsb3NpbmdUeXBlID0gdGhpcy5mdW5jdGlvblR5cGU7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25UeXBlID0gdHlwZTtcblxuICAgICAgICB0aGlzLmJlZ2luU2NvcGUoKTtcblxuICAgICAgICBmb3IgKGxldCBwYXJhbSBvZiBmbi5wYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVjbGFyZShwYXJhbSk7XG4gICAgICAgICAgICB0aGlzLmRlZmluZShwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvbHZlKGZuLmJvZHkpO1xuXG4gICAgICAgIHRoaXMuZW5kU2NvcGUoKTtcblxuICAgICAgICB0aGlzLmZ1bmN0aW9uVHlwZSA9IGVuY2xvc2luZ1R5cGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlTG9jYWwoZXhwcjogRXhwci5FeHByLCBuYW1lOiBUb2tlbiwgaXNSZWFkOiBib29sZWFuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNjb3Blcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGVzW2ldLmhhcyhuYW1lLmxleGVtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVycHJldGVyLnJlc29sdmUoZXhwciwgdGhpcy5zY29wZXMubGVuZ3RoIC0gMSAtIGkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZXNbaV0uZ2V0KG5hbWUubGV4ZW1lKSEuc3RhdGUgPSBWYXJpYWJsZVN0YXRlLlJFQUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXJ0eSBjb2RlIGFmdGVyIG5lZWQgdG8gYmUgcmVmYWN0b3JlZFxuXG4gICAgcmVzb2x2ZShzdGF0ZW1lbnRzOiBTdG10LlN0bXRbXSkge1xuICAgICAgICBmb3IgKGxldCBzdGF0ZW1lbnQgb2Ygc3RhdGVtZW50cykge1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlU3RtdChzdGF0ZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlU3RtdChzdGF0ZW1lbnQ6IFN0bXQuU3RtdCkge1xuICAgICAgICBzdGF0ZW1lbnQuYWNjZXB0KHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzb2x2ZUV4cHIoZXhwcjogRXhwci5FeHByKSB7XG4gICAgICAgIGV4cHIuYWNjZXB0KHRoaXMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3Jlc29sdmVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==