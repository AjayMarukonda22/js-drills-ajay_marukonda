//reduce method

export const reduce = (items, callback, startingValue) => {
    if(!items || !Array.isArray(items) || items.length === 0 || !callback)
        return "invalid input";

    let start = startingValue === undefined ? items[0] : startingValue;

    let startIndex = startingValue === undefined ? 1 : 0;

    for(let i = startIndex ; i < items.length ; i++) {
       start = callback(start, items[i]);
    }
    return start;

}