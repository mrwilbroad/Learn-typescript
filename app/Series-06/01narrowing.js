// NARROWING
/**
 * In TypeScript, narrowing refers to the process of refining or making types more specific based on certain conditions or checks. It allows you to restrict the type of a variable or value within a certain code block or scope, providing better type safety and enabling more accurate code analysis by the TypeScript compiler.
 */
// 01 type guard
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return "".repeat(padding) + input;
    }
    return padding + input;
}
console.log(padLeft(1234, "inputzero"));
