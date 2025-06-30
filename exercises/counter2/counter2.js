/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
    let intVal = init;
    
    return {
        increment: function() {
            intVal += 1;
            return intVal;
        },
        decrement: function() {
            intVal -= 1;
            return intVal;
        },
        reset: function() {
            intVal = init;
            return intVal;
        }
    };
}

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
 