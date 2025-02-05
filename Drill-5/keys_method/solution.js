//keys method
export const keys = (objects) => {
    if(!objects || typeof objects !== "object")
        return "invalid input";

     let result = [];
    for(let key in objects) {
       result.push(key);
    }
    return result;
}