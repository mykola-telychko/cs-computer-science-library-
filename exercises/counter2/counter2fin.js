function createCounter(init) {
    let intVal = init;
    
    return {
        increment: function() {
            return ++intVal; // will be +1 at first and then return intVal
        },
        decrement: function() {
            return --intVal; // will be +1 at first and then return intVal
        },
        reset: function() {
            intVal = init;   
            return intVal;   
        }
    };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6 (5 + 1)
console.log(counter.reset());     // 5 (intVal = init)
console.log(counter.decrement()); // 4 (5 - 1)

 