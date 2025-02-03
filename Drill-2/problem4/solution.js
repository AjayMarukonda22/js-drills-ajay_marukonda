//Q4 Group users based on their Programming language mentioned in their designation.
export const groupUsersByProgrammingLanguage = (users) => {
       if(!users || typeof users != "object" || Object.keys(users).length === 0)
        return {};

       let groupedUsers = {};

       for(let key in users) {
        let user = users[key];
        
          if(!user.desgination) {
            continue;
          }
        let desgination = user.desgination.toLowerCase();
        let language = "";

        if(desgination.includes("golang"))
            language = "Golang";
        else if(desgination.includes("python"))
            language = "Python";
        else if(desgination.includes("javascript"))
            language = "Javascript";
        else if(desgination.includes("java"))
            language = "Java";

        if(language) {
            if(!groupedUsers[language]) {
                groupedUsers[language] = [];
            }
            groupedUsers[language].push(key);
        }
    }
    return groupedUsers;
}