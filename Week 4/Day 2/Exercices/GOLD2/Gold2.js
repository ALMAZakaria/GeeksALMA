//    Exercise 1: Sum elements in an array
// This function takes an array of numbers and returns their sum using `reduce()`.
const sumArray = arr => arr.reduce((acc, num) => acc + num, 0);

console.log(sumArray([1, 2, 3, 4, 5])); 
// Expected output: 15 (1 + 2 + 3 + 4 + 5)

  

/*    Exercise 2: Remove Duplicates */
// This function removes duplicate items from an array using `Set`.
const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Expected output: [1, 2, 3, 4, 5]

  

/*    Exercise 3: Remove certain values */
// This function filters out falsy values such as null, 0, "", false, undefined, and NaN.
const cleanArray = arr => arr.filter(item => Boolean(item));

console.log(cleanArray([NaN, 0, 15, false, -22, '', undefined, 47, null])); 
// Expected output: [15, -22, 47]

  

/*    Exercise 4: Repeat please! */
// This function repeats a given string `n` times using `.repeat()` method.
const repeat = (str, n = 1) => str.repeat(n);

console.log(repeat('Ha!', 3)); 
// Expected output: "Ha!Ha!Ha!"

  

/*    Exercise 5: Turtle & Rabbit */
// Aligning characters at the start line using `padStart()`.
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// Adjusting the positions of turtle and rabbit.
turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

/* Expected Output:
     ||<- Start line
       🐢
       🐇
*/

// What happens when `turtle = turtle.trim().padEnd(9, '=');`?
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle); 
// Expected output: "🐢========"
// Explanation: `.trim()` removes spaces before/after "🐢", then `.padEnd(9, '=')` adds `=` to make the length 9.
