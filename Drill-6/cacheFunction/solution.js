// cacheFunction

export function cacheFunction(callback)  {
       let cache = {};

       return function(...args)  {
        const key = JSON.stringify(args);

        if(cache.hasOwnProperty(key)) 
            return cache[key];

       const result = callback(...args);
       cache[key] = result;
       return result;
    }
}   