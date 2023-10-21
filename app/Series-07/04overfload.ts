/**
 * Function Overloads
    Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

    In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do this, write some number of function signatures (usually two or more), followed by the body of the function:
 */

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(timestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, timestamp, d);
  } else {
    return new Date(timestamp);
  }
}

var day = makeDate(1234, 23, 2023);
console.log(day);

var day = makeDate(1234);
console.log(day);

/**
 * Declaring this in a Function
 */

type User = Array<{ fullname: string }>;

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

// Other types
/**
 * never
    Some functions never return a value:
 */
function fail(s: string): never {
  throw new Error(s);
}

// Also never maybe used while arg type does not match
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something
  } else {
    // x type is never here
  }
}

/**
 * Rest Parameters and Arguments
    In addition to using optional parameters or overloads to make functions that can accept a variety of fixed argument counts, we can also define functions that take an unbounded number of arguments using rest parameters.
    A rest parameter appears after all other parameters, and uses the ... syntax:
 */

function multiply(n: number, ...m: number[]): number[] {
  return m.map((k) => k * n);
}

let AA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const res = multiply(11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
console.log(res);

/**
 * Parameter Destructuring
    You can use parameter destructuring to conveniently unpack objects provided as an argument into one or more local variables in the function body. In JavaScript, it looks like this:
 */
function sum({
  a,
  b,
  c,
  d,
}: {
  a: number;
  b: number;
  c: number;
  d: number;
}): number {
  return a + b + c + d;
}

// Recommended
type ABCD = { a: number; b: number; c: number; d: number };
sum({
  a: 34,
  b: 89,
  c: 45,
  d: 12,
});


/**
 * Assignability of Functions
    @return type 
    @void
    The void return type for functions can produce some unusual, but expected behavior.

    Contextual typing with a return type of void does not force functions to not return something. Another way to say this is a contextual function type with a void return type (type voidFunc = () => void), when implemented, can return any other value, but it will be ignored.
    Thus, the following implementations of the type () => void are valid:
*/


type VoidFunc = ()=> void;


const f1 : VoidFunc = ()=> true;
const f2 : VoidFunc = ()=> false;
console.log("f1  :", f1());
console.log("f2  :", f2());