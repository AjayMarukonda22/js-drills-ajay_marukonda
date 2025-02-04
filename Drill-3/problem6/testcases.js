import { inventory } from "../cars.js";
import { getBmwAndAudiCars } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(getBmwAndAudiCars(inventory));
//Expected Output: [{"id":6,"car_make":"Audi","car_model":"riolet","car_year":1995},{"id":8,"car_make":"Audi","car_model":"4000CS Quattro","car_year":1987},{"id":25,"car_make":"BMW","car_model":"525","car_year":2005},{"id":30,"car_make":"BMW","car_model":"6 Series","car_year":2010},{"id":44,"car_make":"Audi","car_model":"Q7","car_year":2012},{"id":45,"car_make":"Audi","car_model":"TT","car_year":2008}]

//2. //2. Empty Array
console.log(getBmwAndAudiCars([]))
//Expected Output: invalid input

//3.No car is matching
console.log(getBmwAndAudiCars([ 
    { id: 1, car_make: "Lincoln", car_model: "Navigator"},
    { id: 2, car_make: "Mazda", car_model: "aviator" },
    {id: 3,car_make: "Land Rover",car_model: "Avenger",car_year: 2010}]));
//Expected Output: [];

//4.Null, undefined arguments or invalid Arguments
console.log(getBmwAndAudiCars({}));
console.log(getBmwAndAudiCars());
console.log(getBmwAndAudiCars("string"));
// Expected output: invalid input;