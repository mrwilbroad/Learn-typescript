"use strict";
// under strictness
let A = [{ x: 89 }];
let a = { x: 90 };
// Return Type Annotation on Variables
let myname = "Wilbroad Francis Mark";
/**
 * @return type Annotation
 *  @var name
 */
function SetName(name) {
    return `Name is ${name}`;
}
// Object Type
function StudentList(student) {
    return {
        StudentName: student.name,
        StudentAge: student.age,
    };
}
// calling
StudentList({ name: "Francis Mark", age: 87 });
function TakeAtype(child) {
    console.log(`Location : ${child.name} , Name : ${child.name}`);
}
function TakeBType(child) {
    console.log(`Information Name : ${child.name}, Locatio: ${child.loc} ,Online : ${child.isOnline}`);
}
function TakeAInterface(child) {
    console.log(`Name : ${child.name} Location ${child.loc}`);
}
// Calling
TakeAtype({
    name: "WILBROAD MARK",
    loc: {
        x: 78.9,
        y: 89.73,
    },
});
