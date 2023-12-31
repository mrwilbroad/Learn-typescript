/**
 * Modules
 * 
 * JavaScript has a long history of different ways to handle modularizing code. Having been
 * around since 2012, TypeScript has implemented support for a lot of these formats, but
 * over time the community and the JavaScript specification has converged on a format called
 * ES Modules (or ES6 modules). You might know it as the import/export syntax.

    ES Modules was added to the JavaScript spec in 2015, and by 2020 had broad support in most web browsers and JavaScript runtimes.

    For focus, the handbook will cover both ES Modules and its popular pre-cursor CommonJS module.exports = syntax, and you can find information about the other module patterns in the reference section under Modules.

    How JavaScript Modules are Defined
    In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.

    Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

    Modules are executed within their own scope, not in the global scope. This means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

    Non-modules
    Before we start, it’s important to understand what TypeScript considers a module. The JavaScript specification declares that any JavaScript files without an import declaration, export, or top-level await should be considered a script and not a module.

    Inside a script file variables and types are declared to be in the shared global scope, and it’s assumed that you’ll either use the outFile compiler option to join multiple input files into one output file, or use multiple <script> tags in your HTML to load these files (in the correct order!).z
 */

/**
 * Modules in TypeScript
There are three main things to consider when writing module-based code in TypeScript:

    Syntax: What syntax do I want to use to import and export things?
    Module Resolution: What is the relationship between module names (or paths) and files on disk?
    Module Output Target: What should my emitted JavaScript module look like?
 */

/**
 * ES Module Syntax
 * A file can declare a main export via export default:
 */
// @filename   05module.ts

export default function SyHi() {
  console.log("HEllo mrwilbroad..");
}

// check 05modules for implementation
