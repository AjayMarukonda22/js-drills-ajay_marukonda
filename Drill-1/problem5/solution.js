// a loop to access and print the ages of all individuals in the dataset.
 export const getAge = (arr) => {
    if(!Array.isArray(arr) || arr.length == 0) {
        return[];
    }
     let ages = []
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] && arr[i].age != null) {
            ages.push(arr[i].age);
        }
    }
    return ages;
}
