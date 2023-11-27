"use strict";
/**
 * Inferring Within Conditional Types
        We just found ourselves using conditional types to apply constraints and then extract out types. This ends up being such a common operation that conditional types make it easier.

        Conditional types provide us with a way to infer from types we compare against in the true branch using the @infer keyword. For example, we could have inferred the element type in Flatten instead of fetching it out “manually” with an indexed access type:
 */
// usage
function doSomethingInf(obj) {
    return `YEs is string : ${obj.toUpperCase()}`;
}
