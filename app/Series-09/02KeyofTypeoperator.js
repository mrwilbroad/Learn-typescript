/**
 * Keyof Type Operator
 * The keyof operator takes an object type and produces a string or numeric literal union of
 * its keys. The following type P is the same type as type P = "x" | "y":
 */
// now P can be X or Y
function PropertyC(obj, key) {
    console.log('object :', obj);
    console.log("Key :", key);
    console.log("Value of ", key, " is :", obj[key]);
}
var mp = { x: 90, y: 677 };
PropertyC(mp, "y");
