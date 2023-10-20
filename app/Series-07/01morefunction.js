// Function type Expression
function greating(str, fn) {
    return fn(str);
}
function Hi(s) {
    console.log(s.toUpperCase());
    return s.toUpperCase();
}
greating("Hello mrwilbroad", Hi);
