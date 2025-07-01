/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}

function plusOne(n) {
    return n + 1;
}

function plusI(n, i) {
    return n + i;
}

function constant() {
    return 42;
}

console.log(map([1, 2, 3], plusOne));
console.log(map([1, 2, 3], plusI));
console.log(map([1, 2, 3], constant));