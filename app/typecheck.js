"use strict";
// to make sure it work fine , npx tsc typescheck.ts and automatically create its js file
const Charater = "Doctor";
console.log(Charater);
console.log("ork fine");
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new UserAccount("Salim Abdalah", "23");
function Deleteuser(user) {
    // delete user
}
function AddUser(newUser) {
    // add new user
}
function getUser() {
    return new UserAccount("Abdalah Seleman", "2");
}
console.log(getUser());
console.log(user);
