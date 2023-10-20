var message = "Heloow";
// this will bring Error as expression is not callable
// message()
// Type for Tooling
// typescript help to prevent us from making mistake during writing code
// so typescript take tooling seriously and goes beyond completion and errros as you typ
// function that return Promise
function SetName(name) {
    return "Name is :".concat(name.toUpperCase());
}
var Names = ["Amina", "bakari", "Mwelu"];
// Anonymous function are given type automatically
// this process is called contextual typing because the context of the function occured within informs what type it should have
Names.forEach(function (n) {
    console.log(n.toUpperCase());
    return n.toUpperCase();
});
function printStudent(std) {
    var _a;
    console.log("Student ".concat(std.name, " ").concat((_a = std.age) === null || _a === void 0 ? void 0 : _a.toString()));
    return "Student ".concat(std.name, " ");
}
printStudent({ name: "wilbroad mark" });
printStudent({ name: "wilbroad mark", age: 90 });
