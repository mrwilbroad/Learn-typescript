"use strict";
/**
 * CommonJS Syntax
CommonJS is the format which most modules on npm are delivered in. Even if you are writing using the ES Modules syntax above, having a brief understanding of how CommonJS syntax works will help you debug easier.
 */
function absolute(val) {
    return val < 0 ? val * -1 : val;
}
// module.exports = {
//     pi: 3.14,
//     absolute: absolute
// }
// then this can be imported with require
/**
 * TypeScript’s Module Resolution Options
Module resolution is the process of taking a string from the import or require statement, and determining what file that string refers to.

TypeScript includes two resolution strategies: Classic and Node. Classic, the default when the compiler option module is not commonjs, is included for backwards compatibility. The Node strategy replicates how Node.js works in CommonJS mode, with additional checks for .ts and .d.ts.

There are many TSConfig flags which influence the module strategy within TypeScript: moduleResolution, baseUrl, paths, rootDirs.

For the full details on how these strategies work, you can consult the Module Resolution.


 */
