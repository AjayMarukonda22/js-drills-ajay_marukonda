import { items } from "../arrays.js";
import { filter } from "./solution.js";

//Test-cases

//1. Valid(Happy-path) - filter even numbers
console.log(filter(items, (item) => item % 2 === 0));
//Expected Output: [2, 4];

//2. Valid(Happy-path) - filter odd numbers
console.log(filter(items, (item) => item % 2 === 1));
//Expected Output: [1,3,5,5];

//3. No item is matching the callback function
console.log(filter(items, (item) => item % 9 === 0));
//Expected Output: [];

//4. Empty Array
console.log(filter([], ))
//Expected Output: invalid input;

//5.Null, undefined arguments or invalid Arguments
console.log(filter({},"callback"));
console.log(filter());
console.log(filter("string"));
// Expected output: invalid input;