/**
 * Mapped Types
 *
 * When you don’t want to repeat yourself, sometimes a type needs to be based on another
 * type.
 * Mapped types build on the syntax for index signatures, which are used to declare the
 * types of properties which have not been declared ahead of time:
 *
 */

type onlyBoolsAndString = {
  [key: string]: boolean | string;
};

const Configm: onlyBoolsAndString = {
  name: "wilbroad Mark",
  isLogged: true,
  year: "2009",
};
console.log(Configm.name);

/**
 * A mapped type is a generic type which uses a union of PropertyKeys (frequently created
 * via a keyof) to iterate through keys to create a type:
 */
type OptionFlag<Type> = {
  [property in keyof Type]: string | boolean;
};

type Features = {
  darkmode: () => void;
  newuserprofile: () => void;
  age: string | number;
  YOS: number;
};
// all values are Changed to string | boolean
type FeaturesOption = OptionFlag<Features>;

/**
 *   Mapping Modifiers
    There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and optionality respectively.

    You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.
 */

// To remove readonly from attributes
type CreateMutable<Type> = {
  -readonly [property in keyof Type]: Type[property];
};

type LockAccount = {
  readonly id: string;
  readonly name: string;
  YOS: number;
};

type LockAccountType = CreateMutable<LockAccount>;
//  = { id: string , name: string . YOS: number}

// remove ? from attribute
type MutableT<T> = {
  [property in keyof T]-?: T[property];
};

type AccountWithOption = {
  name?: string;
  age?: string;
  benefit: number;
  cost: number;
};

type AccountWithNoOption = MutableT<AccountWithOption>;
// no ? again for this object



/**
 * Key Remapping via as
    In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:
 */