/**
 * Function Overloads
    Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

    In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do this, write some number of function signatures (usually two or more), followed by the body of the function:
 */
function makeDate(timestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, timestamp, d);
    }
    else {
        return new Date(timestamp);
    }
}
var day = makeDate(1234, 23, 2023);
console.log(day);
var day = makeDate(1234);
console.log(day);
// Other types
/**
 * never
    Some functions never return a value:
 */
function fail(s) {
    throw new Error(s);
}
// Also never maybe used while arg type does not match
function fn(x) {
    if (typeof x === "string") {
        // do something
    }
    else if (typeof x === "number") {
        // do something
    }
    else {
        // x type is never here
    }
}
/**
 * Rest Parameters and Arguments
    In addition to using optional parameters or overloads to make functions that can accept a variety of fixed argument counts, we can also define functions that take an unbounded number of arguments using rest parameters.
    A rest parameter appears after all other parameters, and uses the ... syntax:
 */
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (k) { return k * n; });
}
var AA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var res = multiply(11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
console.log(res);
/**
 * Parameter Destructuring
    You can use parameter destructuring to conveniently unpack objects provided as an argument into one or more local variables in the function body. In JavaScript, it looks like this:
 */
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c, d = _a.d;
    return a + b + c + d;
}
sum({
    a: 34,
    b: 89,
    c: 45,
    d: 12,
});
var f1 = function () { return true; };
var f2 = function () { return false; };
console.log("f1 ignore return Type :", f1());
console.log("f2 ignore return Type :", f2());
