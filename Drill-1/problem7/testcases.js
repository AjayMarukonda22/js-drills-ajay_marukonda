import { arrayOfObjects } from "../persons.js";
import { getNameAndEmail } from "./solution.js";

//Test-cases

//1. Valid (Happy-path)
console.log(getNameAndEmail(arrayOfObjects, 25));
//Expected Output: [ [ 'Bob', 'bob@example.com' ] ];

//2. Invalid Age parameter(null, string..)
console.log(getNameAndEmail(arrayOfObjects, null));
console.log(getNameAndEmail(arrayOfObjects, "invalidAge"));
//Expetcted Output: [];

//3. No person with given age
console.log(getNameAndEmail(arrayOfObjects,40));
//Expected Output: [];