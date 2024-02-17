import { add as notMyAdd } from "./math";
import NotMyComponent from "./freestyle";

function add(a: number, b: number): number {
  return a + b;
}
console.log(notMyAdd(3, 7));

function Component(): string {
  return "Hello world!";
}
console.log(NotMyComponent());

//
