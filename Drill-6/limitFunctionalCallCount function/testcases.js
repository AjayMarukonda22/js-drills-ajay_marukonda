import { limitFunctionCallCount } from "./solution.js";

//Test-cases
//storing the function in a variable
const limitFunction = limitFunctionCallCount((name) => `Hello, ${name}`, 2);

 //1 calling the limitFunction 
 console.log(limitFunction("Alice")); // Expected Output: Hello, Alice
 console.log(limitFunction("Ajay")); // Expected output: Hello, Ajay
 console.log(limitFunction("Raju")); // Expected Output; null // As the limit to call the function is 2 here.

const limitAdd = limitFunctionCallCount(((a,b)  => a + b), 3);
     
 //2. calling the limitAdd and using reset to reset the count;
 console.log(limitAdd(2,3)); //Expected Output: 5;
 console.log(limitAdd(10,20));// Expected Output: 30;
 console.log(limitAdd(25,25));//Expected output: 50;
  console.log(limitAdd(100,100));//Expected Outut: null;
  limitAdd.reset(); //resets the count to 0;
  console.log(limitAdd(100, 100)); //Expected Output: 200;

