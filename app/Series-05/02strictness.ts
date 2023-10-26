// under strictness

// Ts has several type-checking flags to turn on of off
// By default all type-checking are turned on otherwise stated
// use of any may defeat the use of Ts in the first place
// noImplicityAny
// strictNullChecks

// any
// any avoid typechecking errors
type listType = Array<{
  x: number;
}>;

let A: listType = [{ x: 89 }];
let a: any = { x: 90 };

// Return Type Annotation on Variables
let myname: string = "Wilbroad Francis Mark";

/**
 * @return type Annotation
 *  @var name
 */
function SetName(name: string): string {
  return `Name is ${name}`;
}

// Object Type
function StudentList(student: { name: string; age: number }): {
  StudentName: string;
  StudentAge: number;
} {
  return {
    StudentName: student.name,
    StudentAge: student.age,
  };
}

// calling
StudentList({ name: "Francis Mark", age: 87 });

// Extends Aliases Type
interface A {
  name: string;
  loc: { x: number; y: number };
}
interface B extends A {
  isOnline: boolean;
}

// on type Aliases
type AA = { name: string; loc: { x: number; y: number } };

// BB extends AA
type BB = AA & {
  isOnline: boolean;
};
function TakeAtype(child: AA) {
  console.log(`Location : ${child.name} , Name : ${child.name}`);
}

function TakeBType(child: BB) {
  console.log(
    `Information Name : ${child.name}, Locatio: ${child.loc} ,Online : ${child.isOnline}`
  );
}

function TakeAInterface(child: A) {
  console.log(`Name : ${child.name} Location ${child.loc}`);
}

// Calling
TakeAtype({
  name: "WILBROAD MARK",
  loc: {
    x: 78.9,
    y: 89.73,
  },
});

