//mapOf method

export const mapObject = (objects, callback) => {
    
    if(!objects || typeof objects !== "object" || !callback)
        return "invalid input;"

    let result = {};
    for(let key in objects) {
        result[key] = (callback(objects[key]));
    }
    return result;
}