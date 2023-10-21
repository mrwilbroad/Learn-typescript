/**
 * @OBJECT @TYPE
 * In JavaScript, the fundamental way that we group and pass around data is through objects
 * In TypeScript, we represent those through object types.

 */
function greate(person) {
    return "Hello :".concat(person.name);
}
function greate2(person) {
    return "Hello :".concat(person.name);
}
function pointShape(ops) {
    //do-something
    console.log(ops.shape);
    console.log("xpos :", ops.xPos);
    console.log("ypos :", ops.ypos);
}
var shape = "Square";
pointShape({ shape: shape, xPos: 23, ypos: 900 });
pointShape({ shape: shape, xPos: 23 });
pointShape({ shape: shape, ypos: 900 });
