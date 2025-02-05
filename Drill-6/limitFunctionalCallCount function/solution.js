//limitFunctionCallCount function
export function limitFunctionCallCount(callback, n) {
    let count = 0;

    function limitFunction (...args) {
        if(count < n) {
            count++;
            return callback(...args);
        }
        else {
            return null;
        }
    }

    limitFunction.reset = function() {
        count = 0;
    }
    return limitFunction;
 }