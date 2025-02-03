//Q1 Find all users who are interested in playing video games.

export const getAllUsers = (users, interest) => {
     
    if (!users || typeof users !== "object" || Object.keys(users).length === 0 || !interest || typeof interest !== "string") 
        return [];

    let result = [];
    for(let key in  users) {
        let user = users[key]; 
        
        if(!user.interests || user.interests.length === 0) {
            continue;
        }

        let interestsArray = user.interests[0].split(",").map((item) => item.trim());
            for(let i = 0 ; i < interestsArray.length ; i++) {
                if(interestsArray[i].toLowerCase().includes(interest.toLowerCase())) {
                    result.push(key);
                    break;
                }
            }
    }
    return result;
}