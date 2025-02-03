import {users} from "../users.js"
import { getAllUsersByDegree } from "./solution.js"

//Test-cases

//1.Valid(Happt-path)
console.log(getAllUsersByDegree(users, "Masters"));
//Expected Output: [ 'John', 'Rob' ];

//2. //2. Case-insensitive Match 
console.log(getAllUsersByDegree(users, "masters"));
// Expected output: ["John", "Rob"];

//3. No-Match
console.log(getAllUsersByDegree(users, "Law"));
// Expected output: [];

//4. Passing without Qualification property for some users
console.log(getAllUsersByDegree({
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ['Playing Chess'],
        nationality: "USA"
    }
,
"Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    }}, "Bachaelor"));
//Expected Output: [ 'Wanda' ];

//5. Empty users array  or empty interest or null, undefined arguments
console.log(getAllUsersByDegree({}, "germny"));
console.log(getAllUsersByDegree());
console.log(getAllUsersByDegree(null, null));
// Expected output: [];

//6. passing Invalid Arguments
console.log(getAllUsersByDegree(users, 1234));
//Expected Output: [];