#!/usr/bin/env node

// @ts-check
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.log('Usage: generate-ast <output_dir>');
    process.exit(1);
}

const outputDir = args[0];

defineAst(
    outputDir,
    'Expr',
    new Map([
        ['Assign', 'name: Token, value: Expr'],
        ['Binary', 'left: Expr, operator: Token, right: Expr'],
        ['Grouping', 'expr: Expr'],
        ['Literal', 'value: any'],
        ['Unary', 'operation: Token, right:Expr'],
        ['Call', 'callee: Expr, paren: Token, args: Expr[]'],
        ['Logical', 'left: Expr, operator: Token, right: Expr'],
        ['Variable', 'name: Token']
    ]),
    [
        `import Token from '../token'`
    ]
);

defineAst(
    outputDir,
    'Stmt',
    new Map([
        ['Block', 'statements: Stmt[]'],
        ['Expression', 'expr: Expr'],
        ['If', 'condition: Expr, thenBranch: Stmt, elseBranch: Stmt | undefined'],
        ['While', 'condition: Expr, body: Stmt'],
        ['Break', ''],
        ['Print', 'expr: Expr'],
        ['Var', 'name: Token, initializer: Expr']
    ]),
    [
        `import Token from '../token'`,
        `import { Expr } from './expr'`
    ]
)

/**
 * Produce code for AST definition
 * 
 * @param {string} outputDir 
 * @param {string} baseName
 * @param {Map<string, string>} types
 * @param {string[]} imports
 */
function defineAst(outputDir, baseName, types, imports) {
    let code = [
        `/* /!\\ Genreated via "npm run genreate-ast" /!\\ */\n`,
        `\n`,
        ...imports.map(i => i + '\n'),
        '\n',
        defineVisitor(baseName, types),
        '\n',
        `export abstract class ${baseName} {\n`,
        `    abstract accept<V>(visitior: ${baseName}Visitor<V>): V\n`,
        '}\n',
    ].join('');

    for (let [type, properties] of types.entries()) {
        const fields = properties.split(',')
            .map(prop => prop.trim())
            .filter(f => f.length);

        code += '\n';
        code += `export class ${type} extends ${baseName} {\n`;

        // Node fields
        for (let field of fields) {
            code += `    ${field};\n`;
        }

        // Constructor
        code += `    constructor(${properties}) {\n`;
        code += `        super()\n`;
        for (let field of fields) {
            const [name] = field.split(':');
            code += `        this.${name} = ${name};\n`
        }
        code += '    }\n';

        // Visitor
        code += `    accept<V>(visitor: ${baseName}Visitor<V>): V{\n`
        code += `        return visitor.visit${type}${baseName}(this);\n`
        code += `    }\n`;

        code += '}\n';
    }

    const filePath = path.resolve(outputDir, 'ast', `${baseName.toLowerCase()}.ts`);
    console.log(`Generating: ${filePath}`);

    fs.writeFileSync(
        filePath,
        code,
    );
}

/**
 * Produce interface for AST visitor
 * 
 * @param {string} baseName
 * @param {Map<string, string>} types
 */
function defineVisitor(baseName, types) {
    let code = `export interface ${baseName}Visitor<V> {\n`
    for (let [type] of types.entries()) {
        code += `    visit${type}${baseName}(${baseName.toLowerCase()}: ${type}): V\n`
    }
    code += `}\n`;

    return code;
}