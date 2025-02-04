import { inventory } from "../cars.js";
import { getCarDetailsById } from "./solution.js";

//Test-cases

//1. Valid (Happy-path)
console.log(getCarDetailsById(inventory, 43));
//Expected Output: Car 33 is a 2011 Jeep Wrangler

//2. No-Match
console.log(getCarDetailsById(inventory, 100));
// Expected output: There is no car with 100;

//3. Some cars without id property
console.log(getCarDetailsById([ 
    {car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 }], 100));
//Expected Output: There is no car with 100;

//4. Empty cars array  or empty id or null, undefined arguments
console.log(getCarDetailsById([], "germny"));
console.log(getCarDetailsById());
console.log(getCarDetailsById(null, null));
// Expected output: invalid input;

//5. passing Invalid Arguments
console.log(getCarDetailsById({}, "33"));
//Expected Output: invalid input;
