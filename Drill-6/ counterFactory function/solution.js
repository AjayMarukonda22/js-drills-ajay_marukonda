// counterFactory

export function counterFactory() {
    let count = 0;

    return {
        increment : function() {
            return ++count;
        },

        decrement: function() {
            return --count;
        }
    }
}