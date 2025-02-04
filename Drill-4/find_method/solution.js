//find method
export const find = (items, callback) => {
    if(!items || !Array.isArray(items) || items.length === 0 || !callback)
        return "invalid input";
    
    for(let i = 0 ; i < items.length; i++) {
        if(callback(items[i]))
            return items[i];
    }
    return undefined;
}