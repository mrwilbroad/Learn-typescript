"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeChecker_1 = require("../EmployeeChecker");
(0, EmployeeChecker_1.Employee)();
var anse = (0, EmployeeChecker_1.addition)(89, 78);
console.log("addition is :", anse);
var anse2 = EmployeeChecker_1.addition.apply(void 0, __spreadArray([89, 78], [90, 67, 45, 67, 23, 45], false));
console.log("addition is :", anse2);
function Insert(obj) {
    console.log("student :", obj);
}
var stud = {
    name: "wilbroad Mark",
    age: "12 years",
    standard: "Standard 7",
    YOS: "2009",
    isFinalYear: "false",
};
Insert(stud);
function doThis(anim) {
    switch (anim.kind) {
        case "Cat":
            console.log("Cat :", anim);
        case "Dog":
            console.log("Dog :", anim);
    }
}
var doganim = {
    kind: "Dog",
    breeds: ["Dog is Breading ", "Breading 03"],
    yob: 90
};
doThis(doganim);
