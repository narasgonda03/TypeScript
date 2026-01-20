// 17 - Mapped Types
// Dynamically create new types from existing ones

// Original interface
interface User {
  name: string;
  age: number;
  email: string;
}

// Optional<T> - Creates type with all optional properties
type Optional<T> = {
  [K in keyof T]?: T[K];
};
type PartialUser = Optional<User>;
const user1: PartialUser = { name: "John" }; // All properties optional

// Readonly Mapping - Makes all properties readonly
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
const user2: ReadonlyUser = { name: "Jane", age: 30, email: "jane@example.com" };
// user2.name = "Janet"; // Error: readonly property

// Getters - Create getter properties for all fields
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type UserGetters = Getters<User>;
const userGetters: UserGetters = {
  getName: () => "John",
  getAge: () => 30,
  getEmail: () => "john@example.com"
};

// Setters - Create setter properties for all fields
type Setters<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (v: T[K]) => void;
};
type UserSetters = Setters<User>;
const userSetters: UserSetters = {
  setName: (v) => console.log(v),
  setAge: (v) => console.log(v),
  setEmail: (v) => console.log(v)
};

// Getters and Setters combined
type Accessors<T> = Getters<T> & Setters<T>;
type UserAccessors = Accessors<User>;

// Flags - Creates boolean properties for each field
type Flags<T> = {
  [K in keyof T]: boolean;
};
type UserFlags = Flags<User>;
const userFlags: UserFlags = {
  name: true,
  age: false,
  email: true
};

// Nullable - Makes all properties optional and nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
type NullableUser = Nullable<User>;
const user3: NullableUser = {
  name: "Bob",
  age: null,
  email: "bob@example.com"
};

// Stringified - Converts property types to string representation
type Stringified<T> = {
  [K in keyof T]: string;
};
type UserStringified = Stringified<User>;
const user4: UserStringified = {
  name: "Alice",
  age: "30",
  email: "alice@example.com"
};

// Type Validation - Ensures value matches property type
type TypeValidator<T> = {
  [K in keyof T]: (value: T[K]) => boolean;
};
type UserValidator = TypeValidator<User>;
const userValidator: UserValidator = {
  name: (v) => typeof v === "string",
  age: (v) => typeof v === "number",
  email: (v) => typeof v === "string"
};

console.log("Mapped Types Examples Loaded");
