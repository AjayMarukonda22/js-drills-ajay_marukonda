import { cacheFunction } from "./solution.js";

//Test-cases

const cache = cacheFunction((num) => { console.log("computing..."); return num * num;});
//1. calling cache function
console.log(cache(4)); //Expected Output: it'll first print computing.. and return 16;
console.log(cache(4)); //Expected Output: it will just cache the result 16 from the closure cache.

//2. calling cache function with new inputs
console.log(cache(5)); // Expected Output: it'll first print computing.. and return 25;