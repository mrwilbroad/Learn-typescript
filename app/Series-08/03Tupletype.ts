// Tuple Type start here
/**
 * Tuple Types
    A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
 */
type StringNumberPair = [string, number];

function doSomething(pair: StringNumberPair) {
  let zero = pair[0];
  let one = pair[1];
  console.log("Zero posi :", zero);
  console.log("One posi :", one);
}

doSomething(["HELL",90]);

// Also we can destructure tuples 
function doSomething2(pair : [string , number])
{
    const [stringIn , numberinput] = pair;
    console.log("number input :", numberinput)
    console.log("String input :", stringIn);
}

doSomething2(['mrwilbroad-string',90000]);

    /**
     * Another thing you may be interested in is that tuples can have optional properties by
     * writing out a question mark (? after an element’s type). Optional tuple elements can  only come at the end, and also affect the type of length.
     */
type Cordinate = [number, number , number?];

function SetCoordnate(coord: Cordinate)
{
    const [ x, y, z] = coord;
    console.log(`Coordinate Dimension :${coord.length}`);
    console.log(`points are x:${x}, y:${y} , z: ${z}`);
}

SetCoordnate([99,89,34]);
SetCoordnate([239,189]);

/**
 * Tuples can also have rest elements, which have to be an array/tuple type.
 */
type stringNumberBoleans = [string , number , ...boolean[]];
type stringBooleansNumber = [string , ...boolean[],number];

const a: stringBooleansNumber = ["string one-1",true,true, false,866];
console.log("a : tuple :",a)