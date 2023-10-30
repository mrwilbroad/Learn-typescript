export function Employee() {
  console.log("Testing for ES modules...");
}

// addition
export function addition(a: number, b: number, ...arg: number[]): number {
  let sum: number = a + b;
  if (typeof arg !== undefined) {
    for (let index = 0; index < arg.length; index++) {
      sum += arg[index];
    }
  }
  return sum;
}



export interface Student{
    name: string ;
    age: number ;
    standard: number;
    YOS: number;
    isFinalYear: boolean
}

export type MappedStudent<Type> = {
    [property in keyof Type] : string;
}

export type StudentNewType = MappedStudent<Student>;

/**
 * ES Module Syntax with CommonJS Behavior
    TypeScript has ES Module syntax which directly correlates to a CommonJS and AMD require. Imports using ES Module are for most cases the same as the require from those environments,
    But this syntax ensures you have a 1 to 1 match in your TypeScript file with the CommonJS output:
 */


export type Cat = { kind: 'Cat',breed: string , yob: number};

export interface Dog {
  kind: "Dog",
  breeds: string[],
  yob: number
}

