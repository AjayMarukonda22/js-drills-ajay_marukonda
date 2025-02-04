//For-Each Method

export const forEach = (items, callback) => {
    if(!items || !Array.isArray(items) || items.length === 0 || !callback)
        return "invalid input";

    for(let i = 0 ; i < items.length ; i++) {
        callback(items[i], i);
    }
}

export const callback = (element, index) => {
    console.log(`Element : ${element} , Index : ${index}`);
};