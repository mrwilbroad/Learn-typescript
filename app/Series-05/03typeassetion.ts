/**
 * Type Assertion
 * |Sometimes you will have information about the type of a value that TypeScript can’t know about.
 */

// This is type assertion to specify type
const mycanvas = document.getElementById("card-reader") as HTMLCanvasElement;

//Also can be done in this way except for .tsx file
const mycanvas_st = <HTMLCanvasElement>document.getElementById("card-reader");

// Literal type
let huge: "HUGE" = "HUGE";

// work OK
huge = "HUGE";

// bring Error
// huge = "HUGE UPDATED";
function printtext(text: string, alignment: "Left" | "center" | "Right") {
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
function ClassAttendance(name: string, pos?: "First" | "Last") {
  // to fix Error of options
  //  !  to fix undefined Error
  // Must be filled
  console.log(`Name : ${name} ${pos!.toUpperCase()}`);

  // can be option
  console.log(`Name : ${name} ${pos?.toUpperCase()}`);
}

ClassAttendance("WILBROAD", "First");
ClassAttendance("WILBROAD 2nd");
