/**
 * Keyof Type Operator
 * The keyof operator takes an object type and produces a string or numeric literal union of
 * its keys. The following type P is the same type as type P = "x" | "y":
 */
// now P can be X or Y
function PropertyC(obj, key) {
    console.log("object :", obj);
    console.log("Key :", key);
    console.log("Value of ", key, " is :", obj[key]);
}
var mp = { x: 90, y: 677 };
PropertyC(mp, "y");
// t2 = string | string | number | boolean
/**
 *
 * Another example of indexing with an arbitrary type is using number to get the type of an
 * array’s elements. We can combine this with typeof to conveniently capture the element
 * type of an array literal:
 */
var myarray = [
    { name: "wilbroad", isLoggediN: true, age: 32 },
    { name: "Kisanga", isLoggediN: false, age: 57 },
    { name: "Abdul", isLoggediN: true, age: 24 },
    { name: "kasim", isLoggediN: false, age: 51 },
];
// /it take only single object
// { name: string , isLoggedIN : boolean, age: number}
// example 
function testPersonAT(obj) {
    console.log('object :', obj);
}
testPersonAT({ name: "brother tembo", isLoggediN: false, age: 89 });
// this will bring error 
// testPersonAT([{ name : "brother tembo", isLoggediN: false, age: 89}]);
// this won't bring error
function testPersonA(obj) {
    console.log('object :', obj);
}
testPersonA([{ name: "brother tembo", isLoggediN: false, age: 89 }]);
function createLabel(nameorId) {
    throw "unemplemented";
}
//   simplified overload
function createLabelAgain(idorname) {
    throw "unemplemented";
}
// type EmailMessageContent= string
function Sending(msg) {
    return "Message sent is :".concat(msg.message);
}
var ms = Sending({ message: "Check if wilbroad is coding ....." });
console.log(ms);
function Sending02(msg) {
}
// here use generic
function SomeFn(val) {
    var someOtherFunc = function (someHow) { };
    return someOtherFunc;
}
// result type B
var result = SomeFn("");
// result type A
var result2 = SomeFn(true);
