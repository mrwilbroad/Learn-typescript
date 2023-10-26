// with ts you can create complex type by combining simple ones
// /unions

type Result = "Win" | "Loose" | "Draw";

type ChanceToWin = 1 | 2 | 3 | 4 | 5 | 6;

// with union , you can have function that receive array or String

function getStudent(obj: string | string[]) {
  return obj.length;
}

// to understand type of variable
// string  typeof s = 'string
// number typeof s = "number"
// boolean typeof s = "boolena"
// undefined typeof s = "undefined"
// function typeof s = "function"
// array Array.isArray(a)

function Summation(obj: number | number[]): string {
  let sum = 0;
  if (typeof obj === "number") {
    sum = obj;
  } else if (Array.isArray(obj)) {
    for (let index = 0; index < obj.length; index++) {
      sum += obj[index];
    }
  }

  return `Sum : ${sum}`;
}

const answer = Summation(78);
console.log(answer);

const answ = Summation([1, 2, 4, 6, 7, 8, 96]);
console.log(answ);

// generic
// Array without generic could contain anything
type StringArray = Array<String>;
type NumberArray = Array<number>;
type Student = Array<{
  name: string;
  id: string;
  location: String;
}>;

const me: Student = [
  {
    name: "mrwilbroad",
    id: "1",
    location: "Dodoma",
  },
  {
    name: "Charles",
    id: "2",
    location: "Kigoma",
  },
];

// Declare own generics
interface Calculator<Type> {
  addition: (obj: Type) => number;
  setNumber: (obj: Type) => void;
}

// not worry about where it come from
declare const Animitor: Calculator<number | number[]>;
