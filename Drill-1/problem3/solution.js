// a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

 export const displayName = (arr) => {
      if(!Array.isArray(arr) || arr.length == 0)
        return [];

      let result = [];
     for(let i = 0 ; i < arr.length ; i++) {
          if(arr[i] && arr[i].isStudent && arr[i].country === "Australia"){
            result.push(arr[i].name);
          }
     }
     return result;
}