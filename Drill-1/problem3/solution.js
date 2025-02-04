// a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

 export const displayName = (arr, country) => {
      if(!Array.isArray(arr) || arr.length == 0 || !country || typeof country !== "string")
        return [];

      let result = [];
     for(let i = 0 ; i < arr.length ; i++) {
          if(arr[i] && arr[i].isStudent && arr[i].country === country){
            result.push(arr[i].name);
          }
     }
     return result;
}