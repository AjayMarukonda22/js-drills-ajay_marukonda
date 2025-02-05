//pairs method
export const pairs = (testObject) => {
    if(!testObject || typeof testObject !== "object") 
        return "invalid input";

    let result = [];
     for(let key in testObject) {
        result.push([key, testObject[key]]);
     }
    return result;
}