import { testObject } from "../objects.js";
import { values } from "./solution.js";

//Test-cases

//1. Valid(Happy-path) 
console.log(values(testObject));
//Expected Output:[ 'Bruce Wayne', 36, 'Gotham' ]

//2. //2.Empty object
console.log(values({}));
//Expected Output: []

//3. Invalid arguments or no arguments
console.log(values("object"));
console.log(values());
//Expected Output: inavlid input;