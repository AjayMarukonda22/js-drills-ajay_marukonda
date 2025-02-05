import { counterFactory } from "./solution.js";

//Test-cases
//storing the object returned by the counterFactory()
const counter = counterFactory();

//1. calling the increment function in it.
console.log(counter.increment()); //Expected Output: 1;
console.log(counter.increment()); //Expected Output: 2;

//2. calling the decrement function in it.
console.log(counter.decrement()); //Expected Output: 1;