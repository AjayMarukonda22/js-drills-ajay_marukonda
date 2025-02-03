import { users } from "../users.js"
import { getAllUsersByCountry } from "./solution.js"

//Test-cases

//1. Valid (Happy-Path) 
console.log(getAllUsersByCountry(users, 'Germany'));
//Expected Ouput: [ 'Wanda' , 'Pike' ];

//2. Case-insensitive Match 
console.log(getAllUsersByCountry(users, "germany"));
// Expected output: ['Wanda, 'Pike];

//3. No-Match
console.log(getAllUsersByCountry(users, "China"));
// Expected output: [];

//4. Passing No Nationality property for some users
console.log(getAllUsersByCountry({
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ['Playing Chess'],
        qualification: "Masters",
    }
,
"Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    }}, "Germany"));
//Expected Output: [ 'Wanda' ];

//5. Empty users array  or empty interest or null, undefined arguments
console.log(getAllUsersByCountry({}, "germny"));
console.log(getAllUsersByCountry());
console.log(getAllUsersByCountry(null, null));
// Expected output: [];

//6. passing Invalid Arguments
console.log(getAllUsersByCountry(users, 1234));
//Expected Output: [];