/*==== Problem #1 ====
 The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
("Car 33 is a *car year goes here* *car make goes here* *car model goes here*"); */

export const getCarDetailsById = (cars, id) => {
          if(!cars || !Array.isArray(cars) || cars.length === 0 || !id || isNaN(id))
            return "invalid input";

          for(let car of cars) {
            if(car) {
                if(car.id && car.id === id) 
                    return "Car " + id +  " is a " + car.car_year + " " + car.car_make + " " + car.car_model;
            }
          }
          return "There is no car with " + id;
}