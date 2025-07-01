/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let returnedArray = [];
    for ( let i = 0; i < arr.length; i++ ) {
       returnedArray[i] = fn(arr[i], i)
    }
  return returnedArray;
};

let fn = function plusone(n) { return n + 1; }

let plusInt = function plusI(n, i) { return n + i; }

let constInt = function constant() { return 42; }

console.log(map([1, 2, 3], fn));
console.log(map([1, 2, 3], plusInt));
console.log(map([1, 2, 3], constInt));