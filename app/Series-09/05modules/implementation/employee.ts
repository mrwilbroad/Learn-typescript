import { Employee, addition as ADD } from "../EmployeeChecker";
import type { StudentNewType } from "../EmployeeChecker";
import { type MappedStudent } from "../EmployeeChecker"; //individual import
import { Cat, Dog } from "../EmployeeChecker";

Employee();
const anse = ADD(89, 78);
console.log("addition is :", anse);

const anse2 = ADD(89, 78, ...[90, 67, 45, 67, 23, 45]);
console.log("addition is :", anse2);

function Insert(obj: StudentNewType) {
  console.log("student :", obj);
}

const stud: StudentNewType = {
  name: "wilbroad Mark",
  age: "12 years",
  standard: "Standard 7",
  YOS: "2009",
  isFinalYear: "false",
};
Insert(stud);

// Animal
type Animal = Dog | Cat;
function doThis(anim: Animal) {
  switch (anim.kind) {
    case "Cat":
      console.log("Cat :", anim);
    case "Dog":
      console.log("Dog :", anim);
  }
}

const doganim: Dog = {
    kind: "Dog",
    breeds: ["Dog is Breading ","Breading 03"],
    yob: 90
}
doThis(doganim);
