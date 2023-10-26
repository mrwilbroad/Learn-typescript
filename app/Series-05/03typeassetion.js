/**
 * Type Assertion
 * |Sometimes you will have information about the type of a value that TypeScript can’t know about.
 */
// This is type assertion to specify type
var mycanvas = document.getElementById("card-reader");
//Also can be done in this way except for .tsx file
var mycanvas_st = document.getElementById("card-reader");
// Literal type
var huge = "HUGE";
// work OK
huge = "HUGE";
// bring Error
// huge = "HUGE UPDATED";
function printtext(text, alignment) {
    console.log(text.toLowerCase());
}
printtext("KAKA ANAUMWA", "Left");
// NULL ASSERTION OPERATOR (PREFIX !)
// position pos is options
/**
 *
 * @param name
 * @param pos
 *  ! remove null and undefined
 *  value can't be null or undefined
 */
function ClassAttendance(name, pos) {
    // to fix Error of options
    //  !  to fix undefined Error
    // Must be filled
    console.log("Name : ".concat(name, " ").concat(pos.toUpperCase()));
    // can be option
    console.log("Name : ".concat(name, " ").concat(pos === null || pos === void 0 ? void 0 : pos.toUpperCase()));
}
ClassAttendance("WILBROAD", "First");
ClassAttendance("WILBROAD 2nd");
// Less Commot Primitives
var oneHundred = BigInt(100);
console.log(oneHundred);
