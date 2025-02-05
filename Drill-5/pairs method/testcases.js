import { testObject } from "../objects.js";
import { pairs } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(pairs(testObject));
//Expected Output: [ [ 'name', 'Bruce Wayne' ], [ 'age', 36 ], [ 'location', 'Gotham' ] ]

//2. //2.Empty object
console.log(pairs({}));
//Expected Output: []

//3. Invalid arguments or no arguments
console.log(pairs("object"));
console.log(pairs());
//Expected Output: inavlid input;