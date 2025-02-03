//Q3 Find all users with masters Degree.

export const getAllUsersByDegree = (users, degree) => {
     
    if(!users || typeof users != "object" || Object.keys(users).length === 0 || !degree || typeof degree !== "string")
        return [];

    let result = [];
    for(let key in users) {
        let user = users[key];

        if(user.qualification && user.qualification.toLowerCase() === degree.toLowerCase())
            result.push(key);
    }
    return result;
}