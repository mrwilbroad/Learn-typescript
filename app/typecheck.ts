// to make sure it work fine , npx tsc typescheck.ts and automatically create its js file
const Charater = "Doctor";
console.log(Charater);
console.log("ork fine");

// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

// primitive types include
// boolen , bigint , null , number, string , undefined , symbol

// but ts extends with any, unknown
// void - function that return undefined or no return

interface UserType {
  age: string;
  name: string;
}

class UserAccount {
  name: string;
  age: string;

  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }
}

const user: UserType = new UserAccount("Salim Abdalah", "23");

function Deleteuser(user: User) {
  // delete user
}

function AddUser(newUser: User) {
  // add new user
}

function getUser(): UserType {
  return new UserAccount("Abdalah Seleman", "2");
}

type GradeMark = "A" | "B" | "C" | "D" | "E";
type UpgrdaedGradeMark = Exclude<Grade, "A">;
type FFF = Extract<GradeMark, "A">;

type Allposible = "DAVE" | "John" | null | undefined;
type ddNone = NonNullable<Allposible>;

const LookPosible = (
  args: Array<{
    name: string;
    age: number;
    loc: String;
  }>
) => {
  return {...args, hey: "Tanzania", school: "kvss"};
};

type Rt = ReturnType<typeof LookPosible>;


// parameters 
type Assignpaa = Parameters<typeof LookPosible>; //its tuple

console.log(getUser());
console.log(user);
