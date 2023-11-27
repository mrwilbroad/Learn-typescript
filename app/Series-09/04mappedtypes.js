"use strict";
/**
 * Mapped Types
 *
 * When you don’t want to repeat yourself, sometimes a type needs to be based on another
 * type.
 * Mapped types build on the syntax for index signatures, which are used to declare the
 * types of properties which have not been declared ahead of time:
 *
 */
const Configm = {
    name: "wilbroad Mark",
    isLogged: true,
    year: "2009",
};
console.log(Configm.name);
// no ? again for this object
/**
 * Key Remapping via as
    In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:
 */ 
