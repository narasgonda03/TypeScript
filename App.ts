console.log("Hello, TypeScript!");// This is a simple TypeScript application entry point.

let n: string = "Narasgonda";// Variable declaration with type annotation
let a: number = 10;
let isFail: boolean = false;

let city = "Kolhapur"; // automatically string
let marks = 85;       // automatically number

// Array declarations and initializations in TypeScript
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["A", "B", "C"];
let arr: [number, string, boolean] = [1, "Hello", true];// Tuple type

// Enum declaration in TypeScript
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;

enum Player{
  Cricketer = "Sachin",
  Footballer = "Ronaldo"
}

let favoritePlayer: Player = Player.Cricketer;

// Any and Unknown types in TypeScript
let data: any = "hello";
data = 10;

let value: unknown = "test";
// value.toUpperCase(); // Error: Object is of type 'unknown'.
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe to use as string
}

// Void and Never types in TypeScript
function logMessage(): void {
  console.log("No return");
}

function errorMsg(): never {
  throw new Error("Error");
}


// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}
add(5, 10);

// Arrow function with typed parameters and return type
const multiply = (a: number, b: number): number => a * b;
multiply(2, 3);

// Function with optional and default parameters
function greet(name: string, age?: number) {
  console.log(name, age);
}

function welcome(name: string = "Guest") {
  console.log(name);
}
greet("Narasgonda", 25);
greet("Alice");
welcome();

// Object type annotation in TypeScript
let person: { name: string; age: number } = {
  name: "Ram",
  age: 30
};
console.log(person.name, person.age);

// Interface declaration and usage in TypeScript
interface IUser {
  id: number;
  username: string;
  isAdmin?: boolean; // optional property
}
let user: IUser = {
  id: 1,
  username: "narasgonda"
};
console.log(user.username);

// Class declaration
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}
let dog = new Animal("Dog");
dog.speak();

// Inheritance in TypeScript
class Dog extends
  Animal {
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}
let myDog = new Dog("Buddy");
myDog.speak();

