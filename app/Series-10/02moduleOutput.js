"use strict";
/**
 * TypeScript’s Module Output Options
There are two options which affect the emitted JavaScript output:

target which determines which JS features are downleveled (converted to run in older JavaScript runtimes) and which are left intact
module which determines what code is used for modules to interact with each other
Which target you use is determined by the features available in the JavaScript runtime you expect to run the TypeScript code in. That could be: the oldest web browser you support, the lowest version of Node.js you expect to run on or could come from unique constraints from your runtime - like Electron for example.

All communication between modules happens via a module loader, the compiler option module determines which one is used. At runtime the module loader is responsible for locating and executing all dependencies of a module before executing it.

For example, here is a TypeScript file using ES Modules syntax, showcasing a few different options for module:
 */ 
