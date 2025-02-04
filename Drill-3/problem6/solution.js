// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

export const getBmwAndAudiCars = (cars) => {
       if(!cars || !Array.isArray(cars) || cars.length === 0)
        return "invalid input";

       let result = [];
       for(let car of cars) {
        if(car.car_make && ((car.car_make).toLowerCase() === 'bmw' || (car.car_make).toLowerCase() === 'audi'))
            result.push(car);
       }

       return JSON.stringify(result, null, 2);
}