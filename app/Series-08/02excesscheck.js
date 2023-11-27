"use strict";
/**
 * @Excess Property Checks
    Where and how an object is assigned a type can make a difference in the type system. One of the key examples of this is in excess property checking, which validates the object more thoroughly when it is created and assigned to an object type during creation.
 */
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
let mysquare = createSquare({ color: "red", width: 100 });
console.log(mysquare);
// by type assertion
let ms = createSquare({ time: 90, opacity: 0.5 });
console.log(ms);
function createSquare2(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
let sqaureopt = { colour: "blue" };
let mysq = createSquare2(sqaureopt);
console.log(mysq);
let sqaureopt02 = { color: "blue", width: 700, k: 344 };
let mysq02 = createSquare2(sqaureopt02);
console.log(mysq02);
function draw(circle) {
    console.log("Color was ", circle.color);
    console.log("Radius was ", circle.radius);
}
draw({ color: "Blue", radius: 89 });
draw({ color: "Blue", radius: 829 });
/**
 * The ReadonlyArray Type
     The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.
 */
function add(obj) {
    console.log("length", obj.length);
    console.log("Data :", obj);
}
/**
 * Just as TypeScript provides a shorthand syntax for Array<Type> with Type[], it also
 * provides a shorthand syntax for
 * ReadonlyArray<Type> with readonly Type[].
 */
function DoWS(obj) {
    obj.map((i) => {
        console.log("Value : ", i);
    });
    //    obj.push("test ") // not allowed for readonly Type
    console.log(obj.length);
}
