//Gold With file.html

//   Exercise 1: Analyzing the map method
// The map method returns a new array where each number is doubled.
// However, if num is not a number, the function returns `undefined`, which means the element will be `undefined` in the resulting array.

const mappedArray = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return; // This implicitly returns `undefined`
});

console.log(mappedArray); 
// Expected output: [2, 4, 6]
// Since all elements in the array are numbers, `num * 2` is applied successfully.

 

/*   Exercise 2: Analyzing the reduce method */
// The reduce method is merging nested arrays into one single array using `concat()`.
// Initial accumulator value is `[1, 2]`, then each nested array is concatenated in order.

const flattenedArray = [[0, 1], [2, 3]].reduce((acc, cur) => {
  return acc.concat(cur);
}, [1, 2]); // Initial accumulator contains `[1, 2]`

console.log(flattenedArray); 
// Expected output: [1, 2, 0, 1, 2, 3]
// `[0, 1]` gets added, then `[2, 3]`, resulting in the final flat array.

 

/*   Exercise 3: Analyze map method and index */
// The map method runs on each item in arrayNum, executing console.log and alert before returning `num * 2`.

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);  // Logs the current number and index in console
  alert(num);  // Shows an alert for each number
  return num * 2;  // Returns a new array with elements doubled
});

// The value of `i` represents the index of each element being processed.
// Expected console log: 
// 1 0
// 2 1
// 4 2
// 5 3
// 8 4
// 9 5
// Expected newArray: [2, 4, 8, 10, 16, 18]

 

/*   Exercise 4: Nested Arrays */

// Flatten the nested array but keep deeper nested elements intact.
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const modifiedArray = array.map(el => Array.isArray(el) && el.length === 1 ? el[0] : el);
console.log(modifiedArray); 
// Expected output: [1, 2, 3, [4], [5]]

// Bonus: One-line solution using flat()
console.log(array.flat(2)); 
// Expected output: [1, 2, 3, [4], [5]]

 

/*   Exercise 5: Transform greeting array */

// Convert array of words into complete sentences.
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const sentenceArray = greeting.map(words => words.join(" "));
console.log(sentenceArray); 
// Expected output: ["Hello young grasshopper!", "you are", "learning fast!"]

// Convert greeting array into a single string.
const greetingSentence = sentenceArray.join(" ");
console.log(greetingSentence); 
// Expected output: "Hello young grasshopper! you are learning fast!"

 

/*   Exercise 6: Flatten deeply nested number */
// Unwrap deeply nested number `3` using flat()
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const unwrapped = trapped.flat(Infinity); // Flatten to any depth

console.log(unwrapped); 
// Expected output: [3]
