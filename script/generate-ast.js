#!/usr/bin/env node

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
    new Map([
        ['Binary', 'left: Expr, operator: Token, right: Expr'],
        ['Grouping', 'expr: Expr'],
        ['Literal', 'value: any'],
        ['Unary', 'operation: Token, right:Expr'],
    ]),
);

function defineAst(outputDir, types) {
    let code = [
        `import Token from './token';\n`,
        '\n',
        defineVisitor(types),
        '\n',
        'export abstract class Expr {\n',
        '    abstract accept<V>(visitior: ExprVisitor<V>): V\n',
        '}\n',
    ].join('');

    for (let [type, properties] of types.entries()) {
        const fields = properties.split(',').map(prop => prop.trim());

        code += '\n';
        code += `export class ${type} extends Expr {\n`;

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
        code += `    accept<V>(visitor: ExprVisitor<V>): V{\n`
        code += `        return visitor.visit${type}Expr(this);\n`
        code += `    }\n`;

        code += '}\n';
    }

    const filePath = path.resolve(outputDir, 'expr.ts');
    console.log(`Generating: ${filePath}`);

    fs.writeFileSync(
        filePath,
        code,
    );
}

function defineVisitor(types) {
    let code = `export interface ExprVisitor<V> {\n`
    for (let [type] of types.entries()) {
        code += `    visit${type}Expr(expr: ${type}): V\n`
    }
    code += `}\n`;

    return code;
}