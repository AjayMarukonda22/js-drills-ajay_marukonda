import { arrayOfObjects } from "../persons.js";
import { getCityAndCountry } from "./solution.js";

//Test-cases

//1. Valid(Happy-path) 
console.log(getCityAndCountry(arrayOfObjects));
// //Expected Output: [
//   [ 'New York', 'USA' ],
//   [ 'London', 'UK' ],
//   [ 'Paris', 'France' ],
//   [ 'Berlin', 'Germany' ],
//   [ 'Sydney', 'Australia' ],
//   [ 'Los Angeles', 'USA' ],
//   [ 'Toronto', 'Canada' ],
//   [ 'Melbourne', 'Australia' ],
//   [ 'Tokyo', 'Japan' ],
//   [ 'Mumbai', 'India' ]
// ];

//2. Passing No Arguments
console.log(getCityAndCountry());
//Expected Output: [];

//3.Passing null or undefined
console.log(getCityAndCountry(null));
console.log(getCityAndCountry(undefined));
//Expected Output: [];

//4 Passing an invalid input (i.e string..)
console.log(getCityAndCountry("invalid input"));
//Expected Output: [];

//5. Passing an object without city or country
console.log(getCityAndCountry([{ 
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
    hobbies: ['playing guitar', 'hiking'],
    isStudent: true
 }]));
 //Expected Output: [ [ 'New York', 'USA' ] ];