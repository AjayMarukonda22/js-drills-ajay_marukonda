import { items } from "../arrays.js";
import { map } from "./solution.js";

//Test-cases

//1. Valid (Happy-path) - multiplying each element by 2
console.log(map(items, (element, i) => {
    return element * 2;
}));
//Expected Output: [ 2, 4, 6, 8, 10, 10 ];

//2. Valid (Happy-path)- multiplying each element by it
console.log(map(items, (element, i) => {
    return element * i;
}));
//Expected Output: [ 0, 2, 6, 12, 20, 25 ];

//3. Empty Array
console.log(map([], ));
//Expected Output: invalid input;

//4.Null, undefined arguments or invalid Arguments
console.log(map({},"callback"));
console.log(map());
console.log(map("string"));
// Expected output: invalid input;