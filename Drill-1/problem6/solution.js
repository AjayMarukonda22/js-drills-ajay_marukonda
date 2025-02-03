//a function to retrieve and display the first hobby of each individual in the dataset.

export const getFirstHobby = (arr) => {
    if(!Array.isArray(arr) || arr.length == 0)
        return [];

    let result = [];
     for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i].hobbies != null) {
            result.push(arr[i].hobbies[0]);
        }
     }
     return result;
}