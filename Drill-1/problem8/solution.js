//a loop to access and log the city and country of each individual in the dataset.

export const getCityAndCountry = (arr) => {
    if(!Array.isArray(arr) || arr.length == 0)
        return [];

    let result = [];
    for(let person of arr) {
        if(person.city != null && person.country != null) {
            result.push([person.city, person.country]);
        }
    }
   return result;
}