import { items } from "../arrays.js";
import { forEach } from "./solution.js";
import { callback } from "./solution.js";

//Test-cases

//1. Valid (Happy-path)
console.log(forEach(items, callback));
/* Expected Output: 
Element : 1 , Index : 0
Element : 2 , Index : 1
Element : 3 , Index : 2
Element : 4 , Index : 3
Element : 5 , Index : 4
Element : 5 , Index : 5 */

//2. Empty Array
console.log(forEach([], callback))
//Expected Output: invalid input;

//3.Null, undefined arguments or invalid Arguments
console.log(forEach({}< "callback"));
console.log(forEach());
console.log(forEach("string"));
// Expected output: invalid input;