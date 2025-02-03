import {arrayOfObjects} from "../persons.js"
import { getFirstHobby } from "./solution.js"

//Test-cases

//1. Valid(Happy-path) 
console.log(getFirstHobby(arrayOfObjects));
// Expected Output: [
//   'reading',
//   'playing guitar',
//   'cooking',
//   'photography',
//   'yoga',
//   'playing basketball',
//   'painting',
//   'writing',
//   'playing piano',
//   'playing cricket'
// ];

 
//2. Passing No Arguments
console.log(getFirstHobby());
//Expected Output: [];

//3.Passing null or undefined
console.log(getFirstHobby(null));
console.log(getFirstHobby(undefined));
//Expected Output: [];

//4 Passing an invalid input (i.e string..)
console.log(getFirstHobby("invalid input"));
//Expected Output: [];

//Passing an object without hobby
console.log(getFirstHobby([{ 
    id: 1, 
    name: 'Alice', 
    age: 30,
    email: 'alice@example.com',
    city: 'New York',
    country: 'USA',
    hobbies: ['reading', 'painting'],
    isStudent: false
 },
 { 
    id: 2, 
    name: 'Bob', 
    age: 25,
    email: 'bob@example.com',
    city: 'London',
    country: 'UK',
    isStudent: true
 }]));
 //Expected Output: [ 'reading' ];