function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(curriedAdd(1)(2)(3)); // Output: 6

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args); // If enough arguments, call the original function
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs); // Collect more arguments
      };
    }
  };
}

// Example function
function sum(a, b, c, d) {
  return a + b + c + d;
}

// Curry the sum function
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1)(2, 3)(4)); // Output: 6
