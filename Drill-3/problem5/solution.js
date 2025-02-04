// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
import { getTheCarYear } from "../problem4/solution.js";
import { inventory } from "../cars.js";

let carYears = getTheCarYear(inventory);

export const getTheOlderCars = (cars, year) => {
    if (!cars ||!Array.isArray(cars) || cars.length === 0 || !year || isNaN(year)) {
        return "invalid input";
    } 
      
    let count = 0;
    for(let carYear of carYears) {
    if(carYear < year)
        count++;
    }

    console.log("The number of Cars older than the year" + year + " are : " + count);

    let result = [];
    for(let car of cars) {
        if(car.car_year && car.car_year < year) {
            result.push(car);
        }
    }

    return result;
}