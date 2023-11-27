"use strict";
// NARROWING
/**
 * In TypeScript, narrowing refers to the process of refining or making types more specific based on certain conditions or checks. It allows you to restrict the type of a variable or value within a certain code block or scope, providing better type safety and enabling more accurate code analysis by the TypeScript compiler.
 */
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else if ("fly" in animal) {
        return animal.fly();
    }
}
function Human(animal) {
    return animal.swim() === undefined;
}
// Equality Narrowing
function example(x, y) {
    // their types also must be equal
    if (x === y) {
        console.log(x.toUpperCase(), y.toUpperCase());
    }
    else {
        console.log("do not matching ...");
    }
}
console.log(example("test test", "test test"));
console.log(example(34, "TEst failed"));
