import { testObject } from "../objects.js";
import { invert } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(invert(testObject));
//Expected Output: { '36': 'age', 'Bruce Wayne': 'name', Gotham: 'location' }

//2. //2.Empty object
console.log(invert({}));
//Expected Output: {}

//3. Invalid arguments or no arguments
console.log(invert("object"));
console.log(invert());
//Expected Output: inavlid input;