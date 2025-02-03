//A function that accesses and prints the names and email addresses of individuals aged 25.
  export const getNameAndEmail = (arr, age) => {
    if(!Array.isArray(arr) || arr.length == 0 || age == null || isNaN(age))
        return [];

    let result = [];

    for(let person of arr) {
        if(person.age != null && person.age === age) {
            if(person.name != null && person.email != null) {
                result.push([person.name, person.email]);
            }

        }
    }
    return result;
  }