//values method

export const values = (objects) => {
 if(!objects || typeof objects !== "object")
    return "invalid input";

   let result = [];
   for(let key in objects) {
     if(objects.hasOwnProperty(key) && objects[key] !== "function")
        result.push(objects[key]);
   }
   return result;
}

const test = {a: 1};
   test.b = 1;