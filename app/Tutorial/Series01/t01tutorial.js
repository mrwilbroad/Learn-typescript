"use strict";
class StudentK {
    constructor(name, age) {
        this.age = age;
        this.studentname = name;
        this.age = age;
    }
    get Data() {
        return `Student : Name : ${this.studentname} \n Age: ${this.age}`;
    }
    set newData(name) {
        this.studentname = name;
    }
}
const meme = new StudentK("AMran Roja", 9000);
console.log(meme.Data);
