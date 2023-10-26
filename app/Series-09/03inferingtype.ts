/**
 * Inferring Within Conditional Types
        We just found ourselves using conditional types to apply constraints and then extract out types. This ends up being such a common operation that conditional types make it easier.

        Conditional types provide us with a way to infer from types we compare against in the true branch using the @infer keyword. For example, we could have inferred the element type in Flatten instead of fetching it out “manually” with an indexed access type:
 */

type GetReturnType<Type> = Type extends (...arg: never) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;
type Str = GetReturnType<(x: string) => string>;
type Bools = GetReturnType<(a: string, b: string, c?: string[]) => boolean[]>;

// usage
function doSomethingInf(obj: Str) {
  return `YEs is string : ${obj.toUpperCase()}`;
}

/**
 * Distributive Conditional Types
    When conditional types act on a generic type, they become distributive when given a union type. For example, take the following:
 */
type ToArrayType<T> = T extends any ? T[] : never;

type StrArrOrNumArr = ToArrayType<string | number>;
// similar to = string[] | number[]

/**
 * Typically, distributivity is the desired behavior. To avoid that behavior, you can surround each side of the extends keyword with square brackets.
   non distributive 
*/

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type ArrofStrorNum = ToArrayNonDist<string | number>;
// now its (string | number )[]

// more Example
type ExtractValue<T>  = T extends {value: infer U} ? U: unknown;
type ExtractA = { value: number};
type ExtractB = { value: boolean};
type ExtractC = { result: number};

type ValueA = ExtractValue<ExtractA>
// =number

type ValueB = ExtractValue<ExtractB>
// = boolean

type ValueC = ExtractValue<ExtractC>
// =unknown


type InferSome<T>= T extends infer U ? U : any;
type Inferred = InferSome<string>;


