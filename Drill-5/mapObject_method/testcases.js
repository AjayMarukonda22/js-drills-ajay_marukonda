import { map } from "../../Drill-4/map_method/solution.js";
import { testObject } from "../objects.js";
import { mapObject } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(mapObject(testObject, (value) => {
    return typeof value === "number" ? value * 2 : value.toUpperCase();
}))
//Expected Output: { name: 'BRUCE WAYNE', age: 72, location: 'GOTHAM' }

//2. Valid(Happy-path)
console.log(mapObject(testObject, (value) => {
    return typeof value === "number" ? value/2 : value.toLowerCase() }));
//Expected Output: { name: 'bruce wayne', age: 18, location: 'gotham' }

//3.Empty object
console.log(mapObject({}, (value) => value));
//Expected Output: []

//4. Invalid arguments or no arguments
console.log(mapObject("object"));
console.log(mapObject());
//Expected Output: inavlid input;