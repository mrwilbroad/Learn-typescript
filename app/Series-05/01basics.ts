const message = "Heloow";

// this will bring Error as expression is not callable
// message()

// Type for Tooling
// typescript help to prevent us from making mistake during writing code
// so typescript take tooling seriouslyand goes beyond completion a and errros as you typ

// function that return Promise
function SetName(name: String): string {
  return `Name is :${name.toUpperCase()}`;
}

const Names: Array<string> = ["Amina", "bakari", "Mwelu"];

// Anonymous function are given type automatically

// this process is called contextual typing because the context of the function occured within informs what type it should have
Names.forEach(function (n) {
  console.log(n.toUpperCase());
  return n.toUpperCase();
});

// for optional parameter

type studenttype = {
  name: string;
  age?: number;
};

function printStudent(std: studenttype) {
    
  console.log(`Student ${std.name} ${std.age}`);
  return `Student ${std.name} `;
}

printStudent({name: "wilbroad mark"});
printStudent({name: "wilbroad mark",age: 90});
