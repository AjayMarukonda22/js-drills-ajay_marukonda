import {arrayOfObjects}  from "../persons.js";
import {getEmailAddress} from "./solutions.js"


// Test-cases

//1. Valid (Happy-Path)
console.log(getEmailAddress(arrayOfObjects));
// Expected Output: [
//   'alice@example.com',
//   'bob@example.com',
//   'charlie@example.com',
//   'david@example.com',
//   'eve@example.com',
//   'frank@example.com',
//   'grace@example.com',
//   'hannah@example.com',
//   'ivy@example.com',
//   'jack@example.com'
// ]

//2. Empty array
console.log(getEmailAddress([]));
//Expected Output: [];

//3. No Arguments is Passed
console.log(getEmailAddress());

//4. Null or Undefined is Passed
console.log(getEmailAddress(null));
console.log(getEmailAddress(undefined));
//Expected Output: [];

//5.  String or Number Instead of Array
console.log(getEmailAddress("some string"));
console.log(getEmailAddress(12345));
// Expected Output: [] ;

//6 Missing email Key in Some Objects
console.log(getEmailAddress([
    {name: "Ajay", age: 25},
    {name: "John", email: "john@email.com"}
]));
//Expected Output: [john@email.com];