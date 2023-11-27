"use strict";
function fn(s, actor) {
    return new actor(s);
}
class SomeClass {
    constructor(s) {
        this.s = s;
    }
    get() {
        return this.s.toUpperCase();
    }
}
// console.log(fn("mrwilbroad dev"));
/**
 *  Generic Functions
    It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way. Let’s consider for a moment a function that returns the first element of an array:
 */
function FirsEl(arr) {
    return arr[0];
}
// but it will be better if returned of the type of array element
// means should have return type of the Element
function FirstElment(arr) {
    return arr[0];
}
console.log("Numbers 1st :", FirstElment([1, 2, 3, 4, 5]));
console.log("String 1st :", FirstElment(["a", "b", "c", "d"]));
// More on Generic
function map(arr, fn) {
    return arr.map(fn);
}
/**
 * Constraints
    We’ve written some generic functions that can work on any kind of value. Sometimes we want to relate two values, but can only operate on a certain subset of values. In this case, we can use a constraint to limit the kinds of types that a type parameter can accept.

    Let’s write a function that returns the longer of two values. To do this, we need a length property that’s a number. We constrain the type parameter to that type by writing an extends clause:
 */
function Longest(a, b) {
    return a.length >= b.length ? a : b;
}
let lArr = Longest([12, 3, 4, 5, 6], [90]);
console.log("Longest Array :", lArr);
let lstr = Longest("mrwilbroad", "Halid House");
console.log("Longest str :", lstr);
// this will throw Error bcz number does not have .length property
// let lnmb = Longest(99,23);
/**
 * Specifying Type Arguments
    TypeScript can usually infer the intended type arguments in a generic call, but not always. For example, let’s say you wrote a function to combine two arrays:
 */
/**
 *
 * @param arr1
 * @param arr2
 * @returns
 */
function Combine(arr1, arr2) {
    return arr1.concat(arr2);
}
let arr_one = [1, 2, 3, 4, 5, 6, 77];
let arr_two = [45, 78, 9, 901345, 6];
let arrt = Combine(arr_one, arr_two);
console.log("Arr :", arrt);
