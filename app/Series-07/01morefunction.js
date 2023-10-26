/**
 * Function type Expression
 * @param str
 * @param fn
 * @returns
 */
function greating(str, fn) {
    return fn(str);
}
/**
 *
 * @param s | string
 * @returns
 */
function Hi(s) {
    console.log(s.toUpperCase());
    return s.toUpperCase();
}
greating("Hello mrwilbroad", Hi);
function PerformThis(fn) {
    console.log("Description :", fn.description, " returned :", fn(90));
}
/**
 *
 * @param somearg
 * @returns boolean
 */
function myFunc(somearg) {
    return somearg > 4;
}
myFunc.description = "My function to compute Diff and return Boolean";
PerformThis(myFunc);
function ExportAll(params) {
    var mob = "";
    typeof params.mobile === ("string" || "number")
        ? "Mobile :" + params.mobile
        : "";
    console.log("Fullname :", params.fullname, "\n Email :", params.email, mob);
}
function Displayer(pa, fn) {
    return fn(pa);
}
Displayer({ fullname: "wilbroad mark", email: "wfrancis169@gmail.com", mobile: "0656453497" }, ExportAll);
Displayer({ fullname: "wilbroad mark", email: "wfrancis169@gmail.com" }, ExportAll);
