
// a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

export const getHobbies = (arr, age) => {
    if(!Array.isArray(arr) || arr.length === 0 || age == null || isNaN(age))
        return [];
  
    return arr
      .filter((person) => person.age === age && (person.hobbies || []).length > 0)
      .map((person) => Array.isArray(person.hobbies) ? person.hobbies : [person.hobbies]);
}