// Variables and Types
// let myName: string = "John";
// let age: number = 20;
// let city: string = "San Francisco";
// let hobbies: string[] = ["Baseball", "football"];

// console.log(`My name is ${myName} and I am ${age}. I live in ${city} and my hobbies are ${hobbies}`);

let NumberOrNull: number | null;

NumberOrNull = 3;
NumberOrNull = null;
console.log(NumberOrNull);

// Functions

// Regular functions
function add(a: number, b: number): number {
  return a + b;
}

// Arrow functions
const newAdd = (a: number, b: number): number => {
  return a + b;
};
// console.log(newAdd(5, 6));

const crdd = (a: number, b: number) => {
  return a * b;
};
// console.log(crdd(2, 4));

// Loops

// for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of loop
const fruits = ["apple", "orange", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in loop
// const person = {
//   newName: "John",
//   newAge: 34,
//   city: "New York"
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }
const person: any = {
  name: "John",
  age: 24,
  city: "New York"
};

for (let key in person) {
  //   console.log(key);
  console.log(key, person[key]);
}

// Arrays
let personArray: string[] = ["Alice", "Bob", "Carol"];
let humanArray: Array<number> = [1, 2, 3, 4, 5];

// console.log(personArray.push("John"));
// console.log(personArray);
// console.log(personArray.unshift("John"));
// console.log(personArray);
// console.log(personArray.pop());
// console.log(personArray);
// console.log(personArray.shift());
// console.log(personArray);

// Accessing and Modifying Elements
let newFruits: string[] = ["apple", "orange", "grape"];
console.log(newFruits[1]);
newFruits[1] = "banana";
console.log(newFruits);

// Finding Elements
let pets: string[] = ["cat", "dog", "bird"];
console.log(pets.indexOf("cat"));
console.log(pets.indexOf("dog"));
console.log(pets.indexOf("fish"));
console.log(pets.includes("cat"));
console.log(pets.includes("fish"));

// Array Length
let newPets: string[] = ["cat", "dog", "bird"];
console.log(newPets.length);

// Logical Operators
const isHome = true;
const inPajamas = false;
const wantsToEat = false;
const isBored = false;

const shouldGoOutside = isHome && !inPajamas && (wantsToEat || isBored);

// Comparison operators
const number = 5;
const checkBetween = number > 5 && number < 7;
// const numberIsNotZero = number !== 0;

// Classes

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} make a nosie`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks`);
  }
}

const myDog: Dog = new Dog("Rex");
myDog.speak();

// Interface
interface Dog {
  name: string;
  age: number;
  vaccinated?: boolean;
}

interface Car {
  model: string;
  year: number;
}

let myCar: Car = {
  model: "Camry",
  year: 2023
};

console.log(`${myCar.year} ${myCar.model}`);

// Modules

// import {newadd} from './math'

// You can also export default  export
export default function Component(): string {
  return "helloww!";
}

// Type Assertion
let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;
let strLengthAs: number = (someValue as string).length;
// console.log(strLengthAs);
console.log(strLength);

// keyof and typeof
let myPerson = { name: "John", age: 16 };
type Person = typeof myPerson;
type PersonKeys = keyof Person;

// Union and Intersection
type myCar = { type: "car"; doors: number };
type Bike = { type: "bike"; hasBell: boolean };

type Vehicle = myCar | Bike;

function indentifyVehicle(vehicle: Vehicle): string {
  return vehicle.type;
}
const result = indentifyVehicle({ type: "bike", hasBell: true });
console.log(result);

// Conditonal type
type TypeName<T> = T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : "object";

// Enum Type
enum Color {
  Yello,
  Green,
  Blue
}
let c: Color = Color.Yello;
let b: Color = Color.Green;
let d: Color = Color.Blue;
console.log(c, b, d);

enum Days {
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
}

function classifyDays(day: Days) {
  switch (day) {
    case Days.Sat:
    case Days.Sun:
      return "weekends";
    default:
      return "weekdays";
  }
}
console.log(classifyDays(Days.Mon));
console.log(classifyDays(Days.Sun));

// Generic
function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray(42));

// Index Type
interface MyDictionary {
  [index: string]: string | number;
}

function getValueFromDict(key: string, dict: MyDictionary): string | number | undefined {
  return dict[key];
}

const dict = { name: "Alice", age: 30 };
console.log(getValueFromDict("name", dict));

// Literal Types
function sortOrderMessage(order: "ascending" | "descending"): string {
  if (order === "ascending") return "This order is ascending";
  else {
    return "This order is descending";
  }
}

console.log(sortOrderMessage("ascending"));
console.log(sortOrderMessage("descending"));


// Discriminated Unions
// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   sideLength: number;
// }

// type Shape = Circle | Square

// const shapes: Shape[] = [
//   {
//     kind: "circle",
//     radius: 5
//   },
//   {
//     kind: "square",
//     sideLength: 10
//   }
// ]

// const context = ...
// shapes.forEach((shape: Shape) => {
//   switch (shape.kind) {
//     case "circle":
//       context.drawCircle(shape.radius);
//       break;
//     case "square":
//       context.drawSquare(shape.sideLength);
//       break
//   }
// })

// Exercise on Discriminated Union
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square

function calculateArea(shape: Shape): number {
  switch(shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.sideLength ** 2
  }
}

console.log(calculateArea({kind: "circle", radius: 2}))
console.log(calculateArea({kind: "square", sideLength: 3}))

// Mixins
// Disposable mixxins
class Disposable {
  isDisposed: boolean = false
  dispose() {
    this.isDisposed = true
  }
}

class Activatable {
  isActive: boolean = false
  activate() {
    this.isActive = true
  }
  deactivate() {
    this.isActive = false
  }
}

// class SmartObject implements Disposable, Activatable {
  
//   constructor() {
//     setInterval(() => console.log(`Active: ${this.isActive}, Disposed: ${this.isDisposed}`) , 500)
//   }

//   interact() {
//     this.activate()
//   }

//   isDisposed: boolean = false
//   dispose(): void;
// }

// applyMixins(SmartObject, [Disposable, Activatable])


// Namespaces
namespace Geometry {
  export function areaOfTriangle(width: number, height: number): number {
    return width * height
  }
  export function areaOfCircle(radius: number): number {
    return Math.PI * radius ** 2
  }
}


// Tuples
let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [34.7, 20.1]

function useCoords(): [number, number] {
  // get coords
  let lat = 100
  let long = 55

  return [lat, long]
}

const [lat, long] = useCoords()


// Named Tuples
let user: [name: string, age: number]

user = ['peach', 25]
console.log(user)

// Interfaces

interface Author {
  name: string
  age: number
}

const authorOne: Author  = {
  name: 'mario',
  age: 25

}

interface Post {
  title: string
  body: string
  tags: string[]
  creat_at: Date
  author: Author
}

const newPost: Post = {
  title: 'my first post',
  body: 'something intresting',
  tags: ['gaming', 'tech'],
  creat_at: new Date(),
  author: authorOne
}