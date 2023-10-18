// to make sure it work fine , npx tsc typescheck.ts and automatically create its js file
const Charater = "Doctor";
console.log(Charater);
console.log("ork fine");

// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:
interface User {
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

const user: User = new UserAccount("Salim Abdalah", "23");

function Deleteuser(user: User) {
  // delete user
}

function AddUser(newUser: User) {
  // add new user
}

function getUser(): User {
  const myUser: User = new UserAccount("Abdalah Seleman", "2");
  return myUser;
}


console.log(getUser());
console.log(user);
