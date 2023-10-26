// to make sure it work fine , npx tsc typescheck.ts and automatically create its js file
var Charater = "Doctor";
console.log(Charater);
console.log("ork fine");
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var user = new UserAccount("Salim Abdalah", "23");
function Deleteuser(user) {
    // delete user
}
function AddUser(newUser) {
    // add new user
}
function getUser() {
    var myUser = new UserAccount("Abdalah Seleman", "2");
    return myUser;
}
console.log(getUser());
console.log(user);
