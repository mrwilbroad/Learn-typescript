function doSomething(pair) {
    var zero = pair[0];
    var one = pair[1];
    console.log("Zero posi :", zero);
    console.log("One posi :", one);
}
doSomething(["HELL", 90]);
// Also we can destructure tuples 
function doSomething2(pair) {
    var stringIn = pair[0], numberinput = pair[1];
    console.log("number input :", numberinput);
    console.log("String input :", stringIn);
}
doSomething2(['mrwilbroad-string', 90000]);
function SetCoordnate(coord) {
    var x = coord[0], y = coord[1], z = coord[2];
    console.log("Coordinate Dimension :".concat(coord.length));
    console.log("points are x:".concat(x, ", y:").concat(y, " , z: ").concat(z));
}
SetCoordnate([99, 89, 34]);
SetCoordnate([239, 189]);
