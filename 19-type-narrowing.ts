// 19 - Type Narrowing
// Use control flow to ensure type safety

// Union type example
type Result = string | number | boolean;

// 1. typeof narrowing
function process(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows it's a string
  } else {
    console.log(value.toFixed(2)); // TypeScript knows it's a number
  }
}

process("hello"); // HELLO
process(42); // 42.00

// 2. instanceof narrowing
class Dog {
  bark() {
    return "Woof!";
  }
}

class Cat {
  meow() {
    return "Meow!";
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    console.log(animal.bark()); // TypeScript knows it's Dog
  } else {
    console.log(animal.meow()); // TypeScript knows it's Cat
  }
}

makeSound(new Dog()); // Woof!
makeSound(new Cat()); // Meow!

// 3. Truthiness narrowing
function printLength(str: string | null): void {
  if (str) {
    console.log(`String length: ${str.length}`);
  } else {
    console.log("String is null or empty");
  }
}

printLength("hello"); // String length: 5
printLength(null); // String is null or empty

// 4. Equality narrowing
function compare(x: string | number, y: string | boolean): void {
  if (x === y) {
    // x and y must both be strings
    console.log(x.toUpperCase());
  } else {
    console.log("Different types or values");
  }
}

compare("test", "test"); // TEST

// 5. Type guards with 'in' operator
type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function move(animal: Fish | Bird): void {
  if ("swim" in animal) {
    animal.swim(); // TypeScript knows it's Fish
  } else {
    animal.fly(); // TypeScript knows it's Bird
  }
}

const fish: Fish = { swim: () => console.log("Swimming") };
const bird: Bird = { fly: () => console.log("Flying") };

move(fish); // Swimming
move(bird); // Flying

// 6. Custom type guard function
type Admin = {
  role: "admin";
  permissions: string[];
};

type User = {
  role: "user";
  name: string;
};

function isAdmin(person: Admin | User): person is Admin {
  return person.role === "admin";
}

const users: (Admin | User)[] = [
  { role: "admin", permissions: ["read", "write", "delete"] },
  { role: "user", name: "John" }
];

users.forEach((user) => {
  if (isAdmin(user)) {
    console.log("Admin permissions:", user.permissions);
  } else {
    console.log("User name:", user.name);
  }
});

// 7. Discriminated Unions (Tagged Unions)
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", side: 4 };
const rectangle: Rectangle = { kind: "rectangle", width: 5, height: 3 };

console.log("Circle area:", getArea(circle)); // Circle area: 78.53981633974483
console.log("Square area:", getArea(square)); // Square area: 16
console.log("Rectangle area:", getArea(rectangle)); // Rectangle area: 15

// 8. Control flow analysis
function getValue(input: string | null | undefined): string {
  if (!input) {
    return "empty";
  }

  // At this point, TypeScript knows input is string
  return input.trim();
}

console.log("Control flow: " + getValue("  hello  ")); // hello
console.log("Control flow: " + getValue(null)); // empty

// 9. Exhaustiveness checking
function handleShape(shape: Shape): void {
  switch (shape.kind) {
    case "circle":
      console.log("Handling circle");
      break;
    case "square":
      console.log("Handling square");
      break;
    case "rectangle":
      console.log("Handling rectangle");
      break;
    default:
      // This will cause error if we miss a case
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}

console.log("Type Narrowing Examples Loaded");
