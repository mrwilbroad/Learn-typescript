/**
 * Guidelines for Writing Good Generic Functions
    Writing generic functions is fun, and it can be easy to get carried away with type parameters. Having too many type parameters or using constraints where they aren’t needed can make inference less successful, frustrating callers of your function.
 */
// .1
// this is better way since return type if of type Type(input)
function FirstElement01(arr) {
    return arr[0];
}
// this is not better way since return type is of type any
function FirstElement02(arr) {
    return arr[0];
}
var a = FirstElement01([1, 2, 3, 4, 5]);
var b = FirstElement02([9, 3, 4, 5]);
console.log(a);
console.log(b);
// 2.
/**
    * Use Fewer Type Parameters
      Here’s another pair of similar functions:
    */
//   better option
function Filter01(arr, fn) {
    return arr.filter(fn);
}
// not good option since it make hard to read and reason about
function Filter02(arg, fn) {
    return arg.filter(fn);
}
// 03
/**
       * Type Parameters Should Appear Twice
            Sometimes we forget that a function might not need to be generic:
       */
function greet(arg) {
    return arg.toUpperCase();
}
// but simple version is
function Great(s) {
    return s.toUpperCase();
}
function MoreforEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}
var Arr = [1, 2, 3, 4, 5, 6, 7];
MoreforEach(Arr, function (n, index) {
    console.log("".concat(index + 1, ": Number is :"), n * 12);
});
