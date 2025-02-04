import { inventory } from "../cars.js";
import { getTheOlderCars } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(getTheOlderCars(inventory, 2000));
//Expected Output: The number of Cars older than the year2000 are : 25
//[{ id: 4, car_make: 'Honda', car_model: 'Accord', car_year: 1983 },{id: 5,car_make: 'Mitsubishi',car_model: 'Galant',car_year: 1990}, .....so on]

//2. //2. Empty Array
console.log(getTheOlderCars([], 2000))
//Expected Output: invalid input

//3.Null, undefined arguments or invalid Arguments
console.log(getTheOlderCars({}));
console.log(getTheOlderCars());
console.log(getTheOlderCars("string"));
// Expected output: invalid input;
