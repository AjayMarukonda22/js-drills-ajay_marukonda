//defaults method

export const defaults = (testObject, defaultProps) => {
         if(typeof testObject !== "object" || typeof defaultProps !== "object")
            return "invalid input";

         for(let key in defaultProps) {
            if(!testObject[key]) {
                testObject[key] = defaultProps[key];
         }
         }
         return testObject;
}