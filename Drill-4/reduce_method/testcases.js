import { items } from "../arrays.js";
import { reduce } from "./solution.js";

//Test-cases

//1. Valid(Happy-path) - sum of all elements with startingValue
console.log(reduce(items, (start, value) => {
    return start + value;
}, 0));
//Expected Output: 20

//2. Valid (Happy-path) - subtraction of all elements without startingValue parameter
console.log(reduce(items, (start, value) => {
    return start - value;
}));
//Expected Output: -18

//3. Empty Array
console.log(reduce([], ));
//Expected Output: invalid input;

//4.Null, undefined arguments or invalid Arguments
console.log(reduce({},"callback"));
console.log(reduce());
console.log(reduce("string"));
// Expected output: invalid input;