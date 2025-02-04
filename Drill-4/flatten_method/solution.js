// flatten method
  
export const flatten = (array, result) => {
    if(!array || !Array.isArray(array) || array.length === 0)
        return ;

    for(let i = 0 ; i < array.length ; i++) {
        if(Array.isArray(array[i]))
            flatten(array[i], result);
        else {
            result.push(array[i]);
        }
    }
    return result;
} 