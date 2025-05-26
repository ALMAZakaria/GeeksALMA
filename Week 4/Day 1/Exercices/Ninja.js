// 🌟 Exercise 1: Merge Words (Currying Function)

// The function takes a word and returns a new function expecting the next word.
// This continues recursively until it's called without an argument, at which point it returns the final merged sentence.

const mergeWords = word => nextWord => 
  nextWord ? mergeWords(`${word} ${nextWord}`) : word;

// Example usage:
console.log(mergeWords('Hello')()); 
// Expected output: "Hello"

console.log(mergeWords('There')('is')('no')('spoon.')()); 
// Expected output: "There is no spoon."

/*  Explanation:
1 `mergeWords('There')` returns a function expecting the next word.
2 Calling that function with `'is'` returns another function expecting the next word.
3 This continues until we call `()`, which stops recursion and returns the full sentence.
4 The function uses **recursion** and **ternary operator** to keep it compact and efficient.
*/
