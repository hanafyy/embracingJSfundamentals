function createCounter() {
  let count = 0; // Private variable to hold the counter value

  return {
    increase: function () {
      count++;
      return count;
    },
    decrease: function () {
      count--;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
    getCount: function () {
      return count;
    },
    increaseByValue: function (value) {
      return (count = count + value);
    },
  };
}

// Create a new counter instance
const counter = createCounter();

console.log(counter.increase()); // Output: 1
console.log(counter.increase()); // Output: 2
console.log(counter.decrease()); // Output: 1
console.log(counter.getCount()); // Output: 1
console.log(counter.reset()); // Output: 0
console.log(counter.increaseByValue(5)); // Output: 5
console.log(counter.getCount()); // Output: 5

function multiplyClosuresByScoping(a) {
  return function (b) {
    return a * b;
  };
}

function multiplyByBinding(a, b) {
  return a * b;
}

const double = multiplyByBinding.bind(null, 2); // Pre-filling `a` with 2
console.log(double(5)); // Output: 10
