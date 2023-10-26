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
var shape = "Square";
pointShape({ shape: shape, xPos: 23, ypos: 900 });
pointShape({ shape: shape, xPos: 23 });
pointShape({ shape: shape, ypos: 900 });
function doSomething(obj) {
    console.log("prop has value '".concat(obj.props, "'."));
    // obj.props = 'YES'; //THis is impossible
}
var todayTrans = {
    Pizza: 34,
    Books: 12,
};
// but above Interface and all can be done only if property of object of transaction are known
// See problem
var piza = "Pizza";
console.log("Piza :", todayTrans[piza]);
var todayNet = function (transactions) {
    var total = 0;
    for (var transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log("Total Transaction is :", todayNet(todayTrans));
// then we can have multiple number of property of Type Trasactio2
var todayTrans02 = {
    pie: 89,
    pine: 45,
    uh: 100,
    jul: 568
};
var todayNet02 = function (transactions) {
    var total = 0;
    for (var transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log("Result after indexing : ", todayNet02(todayTrans02));
