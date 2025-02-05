import { testObject } from "../objects.js";
import { keys } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(keys(testObject));
//Expected output: [ 'name', 'age', 'location' ]

//2.Empty object
console.log(keys({}));
//Expected Output: []

//3. Invalid arguments or no arguments
console.log(keys("object"));
console.log(keys());
//Expected Output: inavlid input;