// NARROWING
/**
 * In TypeScript, narrowing refers to the process of refining or making types more specific based on certain conditions or checks. It allows you to restrict the type of a variable or value within a certain code block or scope, providing better type safety and enabling more accurate code analysis by the TypeScript compiler.
 */

// 01 type guard
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return "".repeat(padding) + input;
  }
  return padding + input;
}

console.log(padLeft(1234, "inputzero"));

// ----truthiness narrorwing
// Equal narrowing

//The in  operator narrowing
// THe in narrowing

// to check if propety or prototype is in the object
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  } else if ("fly" in animal) {
    return animal.fly();
  }
}

function Human(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim() === undefined;
}
