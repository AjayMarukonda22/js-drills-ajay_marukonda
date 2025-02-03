 //a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
 export const displayNameAndCity = (arr, index) => {
         if(!Array.isArray(arr) || arr.length == 0 || index == null || isNaN(index))
            return "pass the correct arguments";
        if(index < 0 || index > arr.length)
            return "index out of bound";

        if(arr[index])
            return  "name: " + arr[index].name +  ", city: " + arr[index].city;
 }