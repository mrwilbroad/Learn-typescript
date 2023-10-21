/**
 * Function type Expression
 * @param str
 * @param fn
 * @returns
 */
function greating(str: string, fn: (s: string) => string) {
  return fn(str);
}

/**
 *
 * @param s | string
 * @returns
 */
function Hi(s: string) {
  console.log(s.toUpperCase());
  return s.toUpperCase();
}
greating("Hello mrwilbroad", Hi);

/**
 * Call Signatures
 * In JavaScript, functions can have properties in addition to being callable. However, the
 * function type expression syntax doesn’t allow for declaring properties. If we want to
 * describe something callable with properties, we can write a call signature in an object
 * type:
 */
type DescribeFunction = {
  description: string;
  (somearg: number): boolean;
};

function PerformThis(fn: DescribeFunction) {
  console.log("Description :", fn.description, " returned :", fn(90));
}

/**
 *
 * @param somearg
 * @returns boolean
 */
function myFunc(somearg: number) {
  return somearg > 4;
}
myFunc.description = "My function to compute Diff and return Boolean";
PerformThis(myFunc);

// Examples
type AllocationInfo = {
  fullname: string;
  email: string;
  mobile?: string | number;
};
type Allocation = {
  (params: AllocationInfo): void;
};

function ExportAll(params: AllocationInfo): void {
  let mob = "";
  typeof params.mobile === ("string" || "number")
    ? "Mobile :" + params.mobile!
    : "";
  console.log("Fullname :", params.fullname, "\n Email :", params.email, mob);
}

function Displayer(pa: AllocationInfo, fn: Allocation) {
  return fn(pa);
}

Displayer({fullname: "wilbroad mark",email: "wfrancis169@gmail.com",mobile: "0656453497"},ExportAll);


Displayer({fullname: "wilbroad mark",email: "wfrancis169@gmail.com"},ExportAll);