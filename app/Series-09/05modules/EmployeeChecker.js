"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = exports.Employee = void 0;
function Employee() {
    console.log("Testing for ES modules...");
}
exports.Employee = Employee;
// addition
function addition(a, b, ...arg) {
    let sum = a + b;
    if (typeof arg !== undefined) {
        for (let index = 0; index < arg.length; index++) {
            sum += arg[index];
        }
    }
    return sum;
}
exports.addition = addition;
