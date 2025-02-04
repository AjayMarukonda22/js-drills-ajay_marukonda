// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
 export const getTheCarYear = (cars) => {
     if(!cars || !Array.isArray(cars) || cars.length === 0)
        return "invalid input";

     let result = [];
     for(let car of cars) {
        if(car.car_year)
        result.push(car.car_year);
     }
     return result;
 }