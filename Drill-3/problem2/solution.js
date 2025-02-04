/* ==== Problem #2 ====
The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
("Last car is a *car make goes here* *car model goes here*"); */

 export const getDetailsOfLastCar = (cars) => {
    if(!cars || !Array.isArray(cars) || cars.length === 0)
        return "invalid input";
       
    let lastCar = cars[cars.length - 1];
      if(lastCar.car_make && lastCar.car_model)
        return "Last car is a " + lastCar.car_make + " " + lastCar.car_model
    else 
    return "The Last car has no information in the inventory" 
}
