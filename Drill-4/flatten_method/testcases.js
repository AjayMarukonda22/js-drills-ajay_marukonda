import { nestedArray } from "../arrays.js";
import { flatten } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(flatten(nestedArray, []));
//Expected Output: [ 1, 2, 3, 4 ];

//2. Valid(Happy-path)
console.log(flatten([1, [2, 2, [3, 3, [4, 4]]]], []));
//Expected Output: [1, 2, 2, 3, 3, 4, 4];

//3. Empty Array of nested empty arrays
console.log(flatten([[[[]]]],[] ))
//Expected Output: [];

//4.Null, undefined arguments or invalid Arguments
console.log(flatten({},"callback"));
console.log(flatten());
console.log(flatten("string"));
// Expected output: invalid input;