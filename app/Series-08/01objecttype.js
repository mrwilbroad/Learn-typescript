"use strict";
/**
 * @OBJECT @TYPE
 * In JavaScript, the fundamental way that we group and pass around data is through objects
 * In TypeScript, we represent those through object types.

 */
function greate(person) {
    return "Hello :".concat(person.name);
}
function greate2(person) {
    return "Hello :".concat(person.name);
}
function pointShape(ops) {
    //do-something
    console.log(ops.shape);
    console.log("xpos :", ops.xPos);
    console.log("ypos :", ops.ypos);
}
const shape = "Square";
pointShape({ shape, xPos: 23, ypos: 900 });
pointShape({ shape, xPos: 23 });
pointShape({ shape, ypos: 900 });
function doSomething(obj) {
    console.log(`prop has value '${obj.props}'.`);
    // obj.props = 'YES'; //THis is impossible
}
const todayTrans = {
    Pizza: 34,
    Books: 12,
};
// but above Interface and all can be done only if property of object of transaction are known
// See problem
let piza = "Pizza";
console.log("Piza :", todayTrans[piza]); //assertion;
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; //assertion
    }
    return total;
};
console.log("Total Transaction is :", todayNet(todayTrans));
// then we can have multiple number of property of Type Trasactio2
let todayTrans02 = {
    pie: 89,
    pine: 45,
    uh: 100,
    jul: 568
};
const todayNet02 = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log("Result after indexing : ", todayNet02(todayTrans02));
