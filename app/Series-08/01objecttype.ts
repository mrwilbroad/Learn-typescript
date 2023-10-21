/**
 * @OBJECT @TYPE
 * In JavaScript, the fundamental way that we group and pass around data is through objects
 * In TypeScript, we represent those through object types.

 */

function greate(person: { name: string; age: number }) {
  return "Hello :".concat(person.name);
}

// or through Interface
interface Person {
  name: string;
  age: number;
}
function greate2(person: Person) {
  return "Hello :".concat(person.name);
}

// or type alias
type Persontype = {
  name: string;
  age: number;
};

/**
 *  @Property @Modifiers
    Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

    @Optional @Properties
    Much of the time, we’ll find ourselves dealing with objects that might have a property set. In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names.
 * 
 */

type Shape = "Circle" | "Square";

interface PointOptions {
  shape: Shape;
  xPos?: number; // ? option
  ypos?: number;
}

function pointShape(ops: PointOptions) {
  //do-something
  console.log(ops.shape);
  console.log("xpos :", ops.xPos);
  console.log("ypos :", ops.ypos);
}
const shape: Shape = "Square";
pointShape({ shape, xPos: 23, ypos: 900 });
pointShape({ shape, xPos: 23 });
pointShape({ shape, ypos: 900 });

/**
 * @readonly Properties
    Properties can also be marked as readonly for TypeScript. While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking.


    READ
    Using the readonly modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed. It just means the property itself can’t be re-written to.
 */

interface SomeType {
  readonly props: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has value '${obj.props}'.`);
  // obj.props = 'YES'; //THis is impossible
}

/**
 * @Index Signatures
    Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.

    In those cases you can use an index signature to describe the types of possible values, for example:
 */

interface StringAray {
  [index: number]: string;
}
