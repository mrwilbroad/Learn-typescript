"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeChecker_1 = require("../EmployeeChecker");
(0, EmployeeChecker_1.Employee)();
const anse = (0, EmployeeChecker_1.addition)(89, 78);
console.log("addition is :", anse);
const anse2 = (0, EmployeeChecker_1.addition)(89, 78, ...[90, 67, 45, 67, 23, 45]);
console.log("addition is :", anse2);
function Insert(obj) {
    console.log("student :", obj);
}
const stud = {
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
const doganim = {
    kind: "Dog",
    breeds: ["Dog is Breading ", "Breading 03"],
    yob: 90
};
doThis(doganim);
