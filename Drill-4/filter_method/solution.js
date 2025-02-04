//filter method

export const filter = (items, callback) => {
      if (!items || !Array.isArray(items) || items.length === 0 || !callback) {
        return "invalid input";
      }
      
      let result = [];
      for(let i = 0 ; i < items.length ; i++) {
          if(callback(items[i]))
            result.push(items[i]);
      }
      return result;
}