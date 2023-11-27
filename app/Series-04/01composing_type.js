"use strict";
// with ts you can create complex type by combining simple ones
// /unions
// with union , you can have function that receive array or String
function getStudent(obj) {
    return obj.length;
}
// to understand type of variable
// string  typeof s = 'string
// number typeof s = "number"
// boolean typeof s = "boolena"
// undefined typeof s = "undefined"
// function typeof s = "function"
// array Array.isArray(a)
function Summation(obj) {
    let sum = 0;
    if (typeof obj === "number") {
        sum = obj;
    }
    else if (Array.isArray(obj)) {
        for (let index = 0; index < obj.length; index++) {
            sum += obj[index];
        }
    }
    return `Sum : ${sum}`;
}
const answer = Summation(78);
console.log(answer);
const answ = Summation([1, 2, 4, 6, 7, 8, 96]);
console.log(answ);
const me = [
    {
        name: "mrwilbroad",
        id: "1",
        location: "Dodoma",
    },
    {
        name: "Charles",
        id: "2",
        location: "Kigoma",
    },
];
