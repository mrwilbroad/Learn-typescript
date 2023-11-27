type GuiterInf = {
  name: string;
  speed: string;
  Album: (number | string)[];
};

const Alb: GuiterInf = {
  name: "King Kiba",
  speed: "90 Km/hr",
  Album: ["sl 2", "3", "7", 8, 990],
};

type NumberOrArrayOfNumber = number | Array<number>;
type mathFunc = (...nums: number[]) => number;

const Mult: mathFunc = (...params) => {
  return params.reduce((prev, next) => prev * next);
};

console.log(Alb);
console.log("mult :", Mult(1, 2, 3, 4, 5, 6, 7, 898));

// /generic section

// /this is not generic function since it only select string args
const EchoString = (arg: string): string => arg;

// this is generic
const EchoStrGeneric = <Type>(arg: Type): Type => arg;
console.log(EchoStrGeneric("Kimara Suka"));
console.log(EchoStrGeneric(9099555));

interface UserT {
  name: string;
  id: string;
  email: string;
}

const getUserKey = <T extends UserT, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const student = [
  {
    name: "Wilbroad",
    age: 90,
    loc: "Arusha",
  },
  {
    name: "Glory",
    age: 23,
    loc: "Mbeya",
  },
  {
    name: "Henock",
    age: 16,
    loc: "Dar es Salam",
  },
];

const ggg = getUserKey(student, "namel");
console.log(ggg);

type indexSign<T> = {
  [P: string]: T;
};

const lists: indexSign<string | number> = {
  name: "Wilbroad",
  age: 90,
  loc: "Kimara",
  Kyle: "Twerk",
};
console.log(lists);

interface Dynam {
  readonly [index: string]: number;
}

interface CourseWeight {
  readonly [key: string]: number;
}

const TotalWeight = <T extends CourseWeight, K extends keyof T>(
  scores: T
): number => {
  let sum: number = 0;
  for (let sc in scores) {
    sum += scores[sc as keyof T];
  }
  return sum;
};

const KvssScore: CourseWeight = {
  math: 90,
  swah: 23,
  geo: 56,
  feo: 90,
};
console.log("Total score :", TotalWeight(KvssScore));

console.log("Value not found but no errro", KvssScore["leo"]);

type Stream = "Salary" | "Bonus" | "SideHustle";
type Income = Record<Stream, number>;

type Income2 = Record<Stream, number | boolean | string>;

const CC: Income = {
  Salary: 90,
  Bonus: 90,
  SideHustle: 90,
};

enum Grade {
  A =1,
  B,
  C,
  D,
  E,
}


console.log(Grade.A);
