/**
 * Keyof Type Operator
 * The keyof operator takes an object type and produces a string or numeric literal union of
 * its keys. The following type P is the same type as type P = "x" | "y":
 */

type Point = { x: number; y: number };
type P = keyof Point;
// now P can be X or Y
function PropertyC(obj: Point, key: P) {
  console.log("object :", obj);
  console.log("Key :", key);
  console.log("Value of ", key, " is :", obj[key]);
}
let mp = { x: 90, y: 677 };
PropertyC(mp, "y");

/**
 * Indexed Access Types
 * We can use an indexed access type to look up a specific property on another type:
 */

type Person = { name: string; email: string; age: number; isonline: boolean };
type Age = Person["age"];

/**
 * The indexing type is itself a type, so we can use unions, keyof, or other types entirely:
 */
type t1 = Person["age" | "email"];
// t1 = number | sring

type t2 = Person[keyof Person];
// t2 = string | string | number | boolean

/**
 *
 * Another example of indexing with an arbitrary type is using number to get the type of an
 * array’s elements. We can combine this with typeof to conveniently capture the element
 * type of an array literal:
 */
const myarray = [
  { name: "wilbroad", isLoggediN: true, age: 32 },
  { name: "Kisanga", isLoggediN: false, age: 57 },
  { name: "Abdul", isLoggediN: true, age: 24 },
  { name: "kasim", isLoggediN: false, age: 51 },
];

type personA = typeof myarray;
//  { name: string , isLoggedIN : boolean, age: number}[]

type PersonB = (typeof myarray)[number];
// Now  => { name: string , isLoggedIN : boolean, age: number}

type PersonAge = (typeof myarray)[number]["age"];
//  type personAge = number
// OR
// type PersonAge2 = myarray["age"]; bring Error warnign

// You can use types when indexing ,dont use const as variable reference
/*
 *   const agekey = "age";
    Type AgeType = Person[agekey]; can not be used as index type
 */

//However
type agehowever = "age";
type AgeTypeHowever = Person[agehowever];

/**
 * Conditional Types
 * At the heart of most useful programs, we have to make decisions based on input.
 * JavaScript programs are no different, but given the fact that values can be easily
 * introspected, those decisions are also based on the types of the inputs. Conditional
 * types help describe the relation between the types of inputs and outputs.
 */
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

/**
 * Conditional types take a form that looks a little like conditional expressions
 * (condition ? trueExpression : falseExpression) in JavaScript:
 */

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameorId: string | number): NameLabel | IdLabel;
function createLabel(nameorId: string | number): NameLabel | IdLabel {
  throw "unemplemented";
}

/**
 * These overloads for createLabel describe a single JavaScript function that makes a choice based on the types of its inputs. Note a few things:
 * If a library has to make the same sort of choice over and over throughout its API, this
 * becomes cumbersome.
 * We have to create three overloads: one for each case when we’re sure of the type (one for
 * string and one for number), and one for the most general case (taking a string | number).
 * For every new type createLabel can handle, the number of overloads grows exponentially.
 */

// in short we can encode like this
type NameorId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

//   simplified overload
function createLabelAgain<T extends number | string>(idorname: T): NameorId<T> {
  throw "unemplemented";
}

let a = createLabelAgain(90);
// a = idLabel
let b = createLabelAgain("AMINA");
// b = NameLabel

/**
 * Conditional Type Constraints
 * Often, the checks in a conditional type will provide us with some new information. Just
 * like narrowing with type guards can give us a more specific type, the true branch of a
 * conditional type will further constrain generics by the type we check against.

 */

// type MessageType<T> = T['message'] will bring error since ts won't know the property message from Type

// solution
type MessageType<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContent = MessageType<Email>;


/**
 * However, what if we wanted MessageOf to take any type, and default to something like
 * never if a message property isn’t available? We can do this by moving the constraint out
 * and introducing a conditional type:
 */
type MessageOf<T> = T extends {message : unknown} ? T['message']: never;
