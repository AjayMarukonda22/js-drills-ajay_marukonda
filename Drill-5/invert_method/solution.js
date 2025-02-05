//invert method
export const invert = (testObject) => {
   if(!testObject || typeof testObject !== "object")
    return "invalid input";

   let result = {};
   for(let key in testObject) {
      if(testObject.hasOwnProperty(key)) {
        result[testObject[key]] = key;
   }
   }
   return result;
}