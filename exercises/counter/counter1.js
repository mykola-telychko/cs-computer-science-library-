
/**
 * @param {number} n
 * @return {Function} counter
 * fn creates a counter and starts at n and increments by 1 each time it is called.
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const counter2 = createCounter(-2);
console.log(counter2()); // -2
console.log(counter2()); // -1
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2