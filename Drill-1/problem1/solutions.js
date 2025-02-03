// a function that accesses and returns the email addresses of all individuals.
export const getEmailAddress = (arr)=> {
    if(!Array.isArray(arr) || arr.length === 0)
        return [];

    let result = [];
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] && typeof arr[i].email === "string")
         result.push(arr[i].email);
    }

    return result;
}