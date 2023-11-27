"use strict";
// Assertion functions
// Discriminated unions
/**
 *
 * Most of the examples we’ve looked at so far have focused around narrowing single variables with simple types like string, boolean, and number. While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.
 */
function CircleArea(radius) {
    return Math.PI * radius * radius;
}
function SquareArea(slidelength) {
    return slidelength * slidelength * slidelength;
}
function ComputeArea(data) {
    let Area = 0;
    if (data.kind === "Circle") {
        Area = CircleArea(data.radius);
    }
    else if (data.kind === "square") {
        Area = SquareArea(data.slidelength);
    }
    return Area;
}
const data = {
    kind: "Circle",
    radius: 89,
};
const A = ComputeArea(data);
console.log(A);
// then
function AreaofShape(shape) {
    let answer = 0;
    switch (shape.kind) {
        case "circle":
            answer = CircleArea(shape.radius);
            break;
        case "square":
            answer = SquareArea(shape.slidelength);
            break;
        default:
    }
    return answer;
}
/**
 * @params never Type
 * When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.
 */
/**
 * Exhaustiveness checking
 *
 */
function AreaofShapeExhaustive(shape) {
    let answer = 0;
    switch (shape.kind) {
        case "circle":
            answer = CircleArea(shape.radius);
            break;
        case "square":
            answer = SquareArea(shape.slidelength);
            break;
        default:
            const _exhaustivecheck = shape;
            return _exhaustivecheck;
    }
    return answer;
}
