"use strict";
const Alb = {
    name: "King Kiba",
    speed: "90 Km/hr",
    Album: ["sl 2", "3", "7", 8, 990],
};
const Mult = (...params) => {
    return params.reduce((prev, next) => prev * next);
};
console.log(Alb);
console.log("mult :", Mult(1, 2, 3, 4, 5, 6, 7, 898));
// /generic section
// /this is not generic function since it only select string args
const EchoString = (arg) => arg;
// this is generic
const EchoStrGeneric = (arg) => arg;
console.log(EchoStrGeneric("Kimara Suka"));
console.log(EchoStrGeneric(9099555));
const getUserKey = (users, key) => {
    return users.map((user) => user[key]);
};
const student = [
    {
        name: "Wilbroad",
        age: 90,
        loc: "Arusha",
    },
    {
        name: "Glory",
        age: 23,
        loc: "Mbeya",
    },
    {
        name: "Henock",
        age: 16,
        loc: "Dar es Salam",
    },
];
const ggg = getUserKey(student, "namel");
console.log(ggg);
const lists = {
    name: "Wilbroad",
    age: 90,
    loc: "Kimara",
    Kyle: "Twerk",
};
console.log(lists);
const TotalWeight = (scores) => {
    let sum = 0;
    for (let sc in scores) {
        sum += scores[sc];
    }
    return sum;
};
const KvssScore = {
    math: 90,
    swah: 23,
    geo: 56,
    feo: 90,
};
console.log("Total score :", TotalWeight(KvssScore));
console.log("Value not found but no errro", KvssScore["leo"]);
const CC = {
    Salary: 90,
    Bonus: 90,
    SideHustle: 90,
};
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["E"] = 5] = "E";
})(Grade || (Grade = {}));
console.log(Grade.A);
