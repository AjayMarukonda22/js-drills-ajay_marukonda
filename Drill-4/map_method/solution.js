//map method

export const  map = (items, callback) => {
    if(!items || !Array.isArray(items) || items.length === 0 || !callback)
        return [];

      let result = [];
    for(let i = 0 ; i < items.length ; i++) {
        result.push(callback(items[i], i));
    }
     return result;    
}