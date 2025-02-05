import { testObject } from "../objects.js";
import { defaults } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(defaults(testObject, {name: "Alice", university: "IIM Bengaluru", languages: ["Telugu", "Hindi", "English"]}));
/* Expected Output: {
  name: 'Bruce Wayne',
  age: 36,
  location: 'Gotham',
  university: 'IIM',
  languages: [ 'Telugu', 'Hindi', 'English' ]
} */

//2. Empty testObject
console.log(defaults({}, {name: "Alice", university: "IIM Bengaluru", languages: ["Telugu", "Hindi", "English"]}));
/* Expected Output: {
  name: 'Alice',
  university: 'IIM Bengaluru',
  languages: [ 'Telugu', 'Hindi', 'English' ]
} */
  
//3. Invalid arguments or no arguments
console.log(defaults("object"));
console.log(defaults());
//Expected Output: inavlid input;
