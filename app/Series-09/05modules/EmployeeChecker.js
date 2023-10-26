"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = exports.Employee = void 0;
function Employee() {
    console.log("Testing for ES modules...");
}
exports.Employee = Employee;
// addition
function addition(a, b) {
    var arg = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    if (typeof arg !== undefined) {
        for (var index = 0; index < arg.length; index++) {
            sum += arg[index];
        }
    }
    return sum;
}
exports.addition = addition;
