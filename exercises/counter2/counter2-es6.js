/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
    let currentValue = init;
    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => (currentValue = init),
    };
}


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
 