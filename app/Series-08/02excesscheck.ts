/**
 * @Excess Property Checks
    Where and how an object is assigned a type can make a difference in the type system. One of the key examples of this is in excess property checking, which validates the object more thoroughly when it is created and assigned to an object type during creation.
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mysquare = createSquare({ color: "red", width: 100 });
console.log(mysquare);

// by type assertion
let ms = createSquare({ time: 90, opacity: 0.5 } as SquareConfig);
console.log(ms);

/**
 * However, a better approach might be to add a string index signature if you’re sure that
 * the object can have some extra properties that are used in some special way. If
 * SquareConfig can have color and width properties with the above types, but could also
 * have any number of other properties, then we could define it like so:
 */

interface SquareConfig2 {
  color?: string;
  width?: number;
  [prop: string]: any;

  /**
   * Here we’re saying that SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter.
   */
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let sqaureopt = { colour: "blue" };
let mysq = createSquare2(sqaureopt);
console.log(mysq);

let sqaureopt02 = { color: "blue", width: 700, k: 344 };
let mysq02 = createSquare2(sqaureopt02);
console.log(mysq02);

/**
   * @Extending Types
        It’s pretty common to have types that might be more specific versions of other types. For example, we might have a BasicAddress type that describes the fields necessary for sending letters and packages in the U.S.
   */

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postcode: string;
}

// Some address may have more propetoes
interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

//but this is not proper coding of usability
// then best solution is extends
interface AddressWithUnit2 extends BasicAddress {
  unit: string;
}

// also
interface tzAddress extends BasicAddress, AddressWithUnit2 {
  regionCode: number;
}

/**
 * @Intersection Types
    interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

    An intersection type is defined using the & operator.
 */

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

/**
 * Here, we’ve intersected Colorful and Circle to produce a new type that has all the members of Colorful and Circle.
 */
type ColurfulCircle = Colorful & Circle;

function draw(circle: ColurfulCircle) {
  console.log("Color was ", circle.color);
  console.log("Radius was ", circle.radius);
}

draw({ color: "Blue", radius: 89 });
draw({ color: "Blue", radius: 829 });

/**
 * @Interfaces vs. @Intersections
    We just looked at two ways to combine types which are similar, but are actually subtly different. With interfaces, we could use an extends clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias. The principal difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.
 */

/**
 * Generic Object Types
 */
// generic because content to put in Box may be number, string , boolean , or Whatever
interface Box<Type> {
  content: Type;
}

/**
 * The ReadonlyArray Type
     The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.
 */

function add(obj: ReadonlyArray<string>) {
  console.log("length", obj.length);
  console.log("Data :", obj);
}

/**
 * Just as TypeScript provides a shorthand syntax for Array<Type> with Type[], it also
 * provides a shorthand syntax for
 * ReadonlyArray<Type> with readonly Type[].
 */

function DoWS<Type>(obj: readonly Type[]) {
  obj.map((i) => {
    console.log("Value : ", i);
  });
  //    obj.push("test ") // not allowed for readonly Type
  console.log(obj.length);
}

