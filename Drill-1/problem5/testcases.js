import { arrayOfObjects } from "../persons.js";
import { getAge } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(getAge(arrayOfObjects));
//Expected Output: [  30, 25, 35, 28, 32,33, 29, 31, 27, 34]
 
//2. Passing No Arguments
console.log(getAge());
//Expected Output: [];

//3.Passing null or undefined
console.log(getAge(null));
console.log(getAge(undefined));
//Expected Output: [];

//4 Passing an invalid input (i.e string..)
console.log(getAge("invalid input"));
//Expected Output: [];

//5. Passing an object without age 
console.log(getAge([{ 
    id: 1, 
    name: 'Alice', 
    email: 'alice@example.com',
    city: 'New York',
    country: 'USA',
    hobbies: ['reading', 'painting'],
    isStudent: false,
 },
 { 
    id: 2, 
    name: 'Bob', 
    age: 25,
    email: 'bob@example.com',
    city: 'London',
    country: 'UK',
    hobbies: ['playing guitar', 'hiking'],
    isStudent: true
 }]));
 //Expected Output: [25];