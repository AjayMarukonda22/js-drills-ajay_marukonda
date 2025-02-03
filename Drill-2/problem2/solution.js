//Q2 Find all users staying in Germany.

export const getAllUsersByCountry = (users, country) => {
   if(!users || typeof users != "object" || Object.keys(users).length === 0 || !country || typeof country !== "string")
    return [];

   let result = [];

   for(let key in users) {
    let user = users[key];

    if(user.nationality && user.nationality.toLowerCase() === country.toLowerCase()) {
        result.push(key);
    }
   }
   return result;
}