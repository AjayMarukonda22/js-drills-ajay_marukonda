import { users } from "../users.js";
import { groupUsersByProgrammingLanguage } from "./solution.js";

//Test-cases

//1.Valid(Happy-path)
console.log(groupUsersByProgrammingLanguage(users));
// Expected Output: {
//   Golang: [ 'John', 'Ron' ],
//   Javascript: [ 'Wanda', 'Rob' ],
//   Python: [ 'Pike' ]
// };

//2. Case-insensitive Match 
console.log(groupUsersByProgrammingLanguage({
    "Emma": { desgination: "SeNiOr GoLaNg Developer" },
    "Liam": { desgination: "INTERN - JAVASCRIPT" },
    "Noah": { desgination: "pYtHoN Developer" }
}));
/* Expected output: {
    Golang: ["Emma"],
    Javascript: ["Liam"],
   Python: ["Noah"]
 }  */

//3. Passing Users without any programming language in their desgination
console.log(groupUsersByProgrammingLanguage({
    "Alice": { desgination: "Marketing Manager" },
    "Bob": { desgination: "HR Executive" }
}));
// Expected output: {};

//4. Passing without desgination property for some users
console.log(groupUsersByProgrammingLanguage({
    "John": {
        age: 24,
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
//Expected Output: { Javascript: [ 'Wanda' ] };

//5. Empty users array  or empty interest or null, undefined arguments
console.log(groupUsersByProgrammingLanguage({}));
console.log(groupUsersByProgrammingLanguage());
console.log(groupUsersByProgrammingLanguage(null));
// Expected output: {};