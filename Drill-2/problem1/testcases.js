import {users} from "../users.js"
import { getAllUsers } from "./solution.js"

//Test-cases

//1. Valid(Happy-path)
console.log(getAllUsers(users, "Video Games"));
//Expected Output: [ 'John', 'Ron' ];

//2. Case-insensitive Match 
console.log(getAllUsers(users, "video games"));
// Expected output: ["John", "Ron"];

//3. No-Match
console.log(getAllUsers(users, "Soccer"));
// Expected output: [];

//4. Empty interests array
console.log(getAllUsers({
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: [],
        qualification: "Masters",
        nationality: "Greenland"
    }
}, "video games"));
//Expected Output: [];

//5. Empty users array  or empty interest or null, undefined arguments
console.log(getAllUsers({}, "Video Games"));
console.log(getAllUsers());
console.log(getAllUsers(null, null));
// Expected output: [];

//6. passing Invalid Arguments
console.log(getAllUsers(users, 1234));
//Expected Output: [];

