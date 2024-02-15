// Variables and Types
let myName: string = "John";
let age: number = 20;
let city: string = "San Francisco";
let hobbies: string[] = ["Baseball", "football"];

console.log(`My name is ${myName} and I am ${age}. I live in ${city} and my hobbies are ${hobbies}`);

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
newAdd(5, 6);

const crdd = (a: number, b: number) => {
  return a * b;
};
crdd(2, 4);
