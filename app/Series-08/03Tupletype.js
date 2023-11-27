"use strict";
function doSomething(pair) {
    let zero = pair[0];
    let one = pair[1];
    console.log("Zero posi :", zero);
    console.log("One posi :", one);
}
doSomething(["HELL", 90]);
// Also we can destructure tuples 
function doSomething2(pair) {
    const [stringIn, numberinput] = pair;
    console.log("number input :", numberinput);
    console.log("String input :", stringIn);
}
doSomething2(['mrwilbroad-string', 90000]);
function SetCoordnate(coord) {
    const [x, y, z] = coord;
    console.log(`Coordinate Dimension :${coord.length}`);
    console.log(`points are x:${x}, y:${y} , z: ${z}`);
}
SetCoordnate([99, 89, 34]);
SetCoordnate([239, 189]);
const a = ["string one-1", true, true, false, 866];
console.log("a : tuple :", a);
