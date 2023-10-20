// Assertion functions
// Discriminated unions
/**
 *
 * Most of the examples we’ve looked at so far have focused around narrowing single variables with simple types like string, boolean, and number. While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.
 */

/**
 * For some motivation, let’s imagine we’re trying to encode shapes like circles and squares. Circles keep track of their radiuses and squares keep track of their side lengths. We’ll use a field called kind to tell which shape we’re dealing with. Here’s a first attempt at defining Shape.
 */

interface Shape {
  kind: "Circle" | "square";
  radius?: number;
  slidelength?: number;
}

function CircleArea(radius: number): number {
  return Math.PI * radius * radius;
}

function SquareArea(slidelength: number): number {
  return slidelength * slidelength * slidelength;
}

function ComputeArea(data: Shape) {
  let Area = 0;
  if (data.kind === "Circle") {
    Area = CircleArea(data.radius!);
  } else if (data.kind === "square") {
    Area = SquareArea(data.slidelength!);
  }
  return Area;
}

const data: Shape = {
  kind: "Circle",
  radius: 89,
};
const A = ComputeArea(data);
console.log(A);

// bus type-checker will have no way to know whether Shape will have radius or Slidelength

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  slidelength: number;
}

type ShapeType = Circle | Square;

// then
function AreaofShape(shape: ShapeType) {
  let answer: number = 0;
  switch (shape.kind) {
    case "circle":
      answer = CircleArea(shape.radius);
      break;
    case "square":
      answer = SquareArea(shape.slidelength);
    default:
  }

  return answer;
}

/**
 * @params never Type
 * When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.
 */

/**
 * Exhaustiveness checking
 *
 */

function AreaofShapeExhaustive(shape: ShapeType) {
  let answer: number = 0;
  switch (shape.kind) {
    case "circle":
      answer = CircleArea(shape.radius);
      break;
    case "square":
      answer = SquareArea(shape.slidelength);
      break;
    default:
      const _exhaustivecheck: never = shape;
      return _exhaustivecheck;
  }

  return answer;
}
