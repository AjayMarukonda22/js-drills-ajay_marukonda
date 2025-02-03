import { arrayOfObjects } from "../persons.js";
import { displayNameAndCity } from "./solution.js";

//Test-cases

//1. Valid (Happy-path)
console.log(displayNameAndCity(arrayOfObjects, 3));
//Expect Output: name: David, city: Berlin;

//
//2. Passing No Arguments
console.log(displayNameAndCity());
//Expected Output: pass the correct arguments;

//3.Passing null or undefined
console.log(displayNameAndCity(null));
console.log(displayNameAndCity(undefined));
//Expected Output: pass the correct arguments;

//4 Passing an invalid input (i.e string..)
console.log(displayNameAndCity("invalid input"));
//Expected Output: pass the correct arguments;

//5. Passing index which is out of bound
console.log(displayNameAndCity(arrayOfObjects, -1));
console.log(displayNameAndCity(arrayOfObjects, 11));
//Expected Output: index out of bound;
