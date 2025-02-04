import { inventory } from "../cars.js";
import { getDetailsOfLastCar } from "./solution.js";

//Test-cases

//1. Valid (Happy-path)
console.log(getDetailsOfLastCar(inventory));
//Expected Output: Last car is a Lincoln Town Car

//2. Empty Array
console.log(getDetailsOfLastCar([]))
//Expected Output: invalid input

//3. Last car without required details
console.log(getDetailsOfLastCar([ 
    {car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_year: 2001 }]));
//Expected Output: The Last car has no information in the inventory

//4.Null, undefined arguments or invalid Arguments
console.log(getDetailsOfLastCar({}));
console.log(getDetailsOfLastCar());
console.log(getDetailsOfLastCar("string"));
// Expected output: invalid input;