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
  return "hello!";
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
