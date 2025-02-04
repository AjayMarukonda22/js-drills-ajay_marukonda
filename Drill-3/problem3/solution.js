// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

export const sortCarModelNamesAplhabetically = (cars) => {
    if(!cars || !Array.isArray(cars) || cars.length === 0)
        return "invalid input";
     
    const set = new Set();
    for(let car of cars) {
        if(car.car_model) 
            set.add(car.car_model);
    }
    return [...set].sort((a,b) => a.localeCompare(b));
}