import {arrayOfObjects} from "../persons.js"
import {displayName} from "./solution.js"

//Test-cases

//1. Valid(Happy-Path)
console.log(displayName(arrayOfObjects));
//Expected Output: [ 'Hannah' ];

//2. Passing No Arguments
console.log(displayName());
//Expected Output: [];

//3.Passing null or undefined
console.log(displayName(null));
console.log(displayName(undefined));
//Expected Output: [];

//4 Passing an invalid input (i.e string..)
console.log(displayName("invalid input"));
//Expected Output: [];
