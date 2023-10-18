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
    var sum = 0;
    if (typeof obj === "number") {
        sum = obj;
    }
    else if (Array.isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            sum += obj[index];
        }
    }
    return "Sum : ".concat(sum);
}
var answer = Summation(78);
console.log(answer);
var answ = Summation([1, 2, 4, 6, 7,10, 8, 9,346]);
console.log(answ);
