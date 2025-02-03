import {arrayOfObjects} from "../persons.js";
import { getHobbies } from "./solution.js";

//Test-cases

//1. Valid (Happy Path) 
console.log(getHobbies(arrayOfObjects, 25));
//Expected Output: [ [ 'playing guitar', 'hiking' ], [ 'cooking', 'gardening' ] ];

//2. Valid Input - Single Hobby as a String and array of Hobbies
console.log(getHobbies([
    { name: "Alice", age: 25, hobbies: "reading" }, // Single hobby as a string
    { name: "Bob", age: 25, hobbies: ["swimming", "playing cricket"] }  // Hobby as an array
], 25));
//Expected Output: [ [ 'reading' ], [ 'swimming', 'playing cricket' ] ];

//3. Invalid Age parameter(null, string..)
console.log(getHobbies(arrayOfObjects, null));
console.log(getHobbies(arrayOfObjects, "invalidAge"));
//Expetcted Output: [];

//4. No person with given age
console.log(getHobbies(arrayOfObjects,40));
//Expected Output: [];