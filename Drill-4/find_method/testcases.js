import { items } from "../arrays.js";
import { find } from "./solution.js";

//Test-cases

//1. Valid(Happy-path) (1st Even number)
console.log(find(items, (item) => item % 2 === 0));
//Expected Output: 2;

//2. Valid(Happy-path) (1st mutiple of 5)
console.log(find(items, (item) => item % 5 === 0));
//Expected Output: 5;

//3. No item is matching the fcallback function
console.log(find(items, (item) => item % 10 === 0));
//Expected Output: undefined;

//4. Empty Array
console.log(find([], ))
//Expected Output: invalid input;

//5.Null, undefined arguments or invalid Arguments
console.log(find({},"callback"));
console.log(find());
console.log(find("string"));
// Expected output: invalid input;