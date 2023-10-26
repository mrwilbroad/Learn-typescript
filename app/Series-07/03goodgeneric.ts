/**
 * Guidelines for Writing Good Generic Functions
    Writing generic functions is fun, and it can be easy to get carried away with type parameters. Having too many type parameters or using constraints where they aren’t needed can make inference less successful, frustrating callers of your function.
 */

// .1
// this is better way since return type if of type Type(input)
function FirstElement01<Type>(arr: Type[]) {
  return arr[0];
}

// this is not better way since return type is of type any
function FirstElement02<Type extends any[]>(arr: Type) {
  return arr[0];
}

let a = FirstElement01([1, 2, 3, 4, 5]);
let b = FirstElement02([9, 3, 4, 5]);
console.log(a);
console.log(b);

// 2.
/**
    * Use Fewer Type Parameters
      Here’s another pair of similar functions:
    */

//   better option
function Filter01<Type>(arr: Type[], fn: (arg: Type) => boolean): Type[] {
  return arr.filter(fn);
}

// not good option since it make hard to read and reason about
function Filter02<Type, Func extends (arg: Type) => boolean>(
  arg: Type[],
  fn: Func
): Type[] {
  return arg.filter(fn);
}

// 03
/**
       * Type Parameters Should Appear Twice
            Sometimes we forget that a function might not need to be generic:
       */
function greet<Str extends string>(arg: Str): string {
  return arg.toUpperCase();
}
// but simple version is
function Great(s: string): string {
  return s.toUpperCase();
}



/**
 * Optional Parameters in Callbacks
 * @param arr 
 * @param fn 
 */


function MoreforEach(
  arr: any[],
  fn: (arg: any, index?: number) => void
) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}

let Arr = [1, 2, 3, 4, 5, 6, 7];
MoreforEach(Arr, (n,index) => {
  console.log(`${index!+1}: Number is :`, n * 12);
});

/**
 * RULE
 * Rule: 
 * When writing a function type for a callback, never write an optional parameter   unless    you intend to call the function without passing that argument
 */
