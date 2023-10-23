/**
 * 
 * A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types
 */

/**
 * While using @any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function @returns. If we passed in a number, the only information we have is that any type could be returned.
 */
function identity(arg: any): any {
  return arg;
}

// instead
function identityGood<Type>(arg: Type): Type {
  return arg;
}

let username = identityGood("MRWILBROAD MARK");
console.log(username);

/**
 * Also we can Call in this way
 */

let myname = identityGood<string>("MRWILBROAD MARK");
console.log(myname);

/**
 * Sometimes you want to select Type only with property length
 */
interface LengthWise {
  length: number;
}

function Identitylen<Type extends LengthWise>(arg: Type) {
  return arg.length;
}

let mynamelength = Identitylen("MRWILBROAD MARk");
console.log(mynamelength);

// since number does not have property length
// let n = Identitylen(90);  will bring Error
// console.log(n);

/**
 * Using Type Parameters in Generic Constraints
 * You can declare a type parameter that is constrained by another type parameter. For
 * example, here we’d like to get a property from an object given its name. We’d like to
 * ensure that we’re not accidentally grabbing a property that does not exist on the obj, so
 * we’ll place a constraint between the two types:
 */

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

var ar = { name: "wilbroad", age: 90, location: "Pwani" };
var ty = getProperty(ar, "name");
console.log("name prope :", ty);

/**
 * Using Class Types in Generics
 */
function create<Type>(c: { new (): Type }): Type {
  return new c();
}

/**
 * Generic Parameter Defaults
    By declaring a default for a generic type parameter, you make it optional to specify the corresponding type argument. For example, a function which creates a new HTMLElement. Calling the function with no arguments generates a HTMLDivElement; calling the function with an element as the first argument generates an element of the argument’s type. You can optionally pass a list of children as well. Previously you would have to define the function as:
 */

interface Container<T, U> {
  element: T;
  children: U;
}

// Previously you can define as
declare function Create(): Container<HTMLDivElement, HTMLDivElement[]>;
declare function Create<T extends HTMLElement>(element: T): Container<T, T[]>;
declare function Create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;

// with generic parameter default we can reduce to
declare function CreateGeneric<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: []
): Container<T, U>;

const div = CreateGeneric();
console.log(div);

const p = CreateGeneric(new HTMLParagraphElement());