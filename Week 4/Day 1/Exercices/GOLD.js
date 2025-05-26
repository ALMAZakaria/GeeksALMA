// JavaScript Exercises Compilation

/*  Exercise 1: Nested Functions */
/* This function constructs a landscape using flat and mountain parts. */
const landscape = () => {
  let result = "";

  // Function to add flat ground "_" repeated `x` times
  const flat = x => {
      for (let count = 0; count < x; count++) {
          result += "_";
      }
  };

  // Function to add a mountain: "/" followed by `x` quotes, then "\"
  const mountain = x => {
      result += "/";
      for (let count = 0; count < x; count++) {
          result += "'";
      }
      result += "\\";
  };

  flat(4);      // Adds "____"
  mountain(4);  // Adds "/''''\"
  flat(4);      // Adds "____"

  return result;
};

console.log(landscape()); // Expected output: "____/''''\\____"



/*  Exercise 2: Closure */
/* Closures allow functions to "remember" variables even after execution. */
const addTo = x => y => x + y;
const addToTen = addTo(10); // Returns a function (y => 10 + y)
console.log(addToTen(3)); // Expected output: 13



/*  Exercise 3: Currying */
/* Currying transforms a function with multiple arguments into nested functions. */
const curriedSum = a => b => a + b;
console.log(curriedSum(30)(1)); // Expected output: 31
// First call `curriedSum(30)` returns `b => 30 + b`
// Second call `curriedSum(30)(1)` executes `30 + 1 = 31`



/*  Exercise 4: Currying with Partial Application */
const curriedSum = a => b => a + b;
const add5 = curriedSum(5); // Returns `b => 5 + b`
console.log(add5(12)); // Expected output: 17
// `add5(12)` executes `5 + 12 = 17`



/*  Exercise 5: Function Composition */
/* Composition means applying one function to the result of another. */
const compose = (f, g) => a => f(g(a));

const add1 = num => num + 1;
const add5 = num => num + 5;

console.log(compose(add1, add5)(10)); // Expected output: 16
// First: `add5(10)` → 10 + 5 = 15
// Then: `add1(15)` → 15 + 1 = 16
