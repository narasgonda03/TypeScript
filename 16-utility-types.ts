// 16 - Utility Types
// Built-in types to modify existing types

// Original type
type Person = { 
  name: string; 
  age: number;
  email: string;
};

// Partial<T> - Makes all properties optional
type PartialPerson = Partial<Person>;
const person1: PartialPerson = { name: "John" }; // Valid - no need for age or email

// Readonly<T> - Makes properties readonly
type ReadonlyPerson = Readonly<Person>;
const person2: ReadonlyPerson = { name: "Jane", age: 30, email: "jane@example.com" };
// person2.name = "Janet"; // Error: Cannot assign to readonly property

// Record<K, T> - Creates object with specific keys
type Status = "pending" | "completed" | "failed";
type StatusCount = Record<Status, number>;
const counts: StatusCount = {
  pending: 5,
  completed: 10,
  failed: 2
};

// Pick<T, K> - Selects certain keys from a type
type PersonPreview = Pick<Person, "name" | "age">;
const preview: PersonPreview = { name: "Bob", age: 25 }; // Only these two properties

// Omit<T, K> - Excludes certain keys
type PersonWithoutEmail = Omit<Person, "email">;
const personNoEmail: PersonWithoutEmail = { name: "Alice", age: 28 };

// Extract<T, U> - Extracts types that are assignable to U
type Union = "success" | "error" | "loading";
type SuccessOrError = Extract<Union, "success" | "error">;
const status: SuccessOrError = "success"; // Type is "success" | "error"

// Exclude<T, U> - Excludes types assignable to U
type NonError = Exclude<Union, "error">;
const nonErrorStatus: NonError = "loading"; // Type is "success" | "loading"

// Required<T> - Makes all properties required
type RequiredPerson = Required<PartialPerson>;
const requiredPerson: RequiredPerson = { 
  name: "Charlie", 
  age: 35, 
  email: "charlie@example.com" 
}; // All properties mandatory

// ReturnType<T> - Extracts return type of function
function getValue(): { value: string } {
  return { value: "test" };
}
type GetValueReturn = ReturnType<typeof getValue>; // { value: string }

// Parameters<T> - Extracts parameter types of function
type GetValueParams = Parameters<typeof getValue>; // []

// InstanceType<T> - Extracts instance type from constructor
class MyClass {
  constructor(public id: number) {}
}
type MyClassInstance = InstanceType<typeof MyClass>; // MyClass

console.log("Utility Types Examples Loaded");
