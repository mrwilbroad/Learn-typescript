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
    var Area = 0;
    if (data.kind === "Circle") {
        Area = CircleArea(data.radius);
    }
    else if (data.kind === "square") {
        Area = SquareArea(data.slidelength);
    }
    return Area;
}
var data = {
    kind: "Circle",
    radius: 89,
};
var A = ComputeArea(data);
console.log(A);
