// JavaScript Exercises Compilation

/*  Exercise 1: Menu */

const menu = [
  { type: "starter", name: "Houmous with Pita" },
  { type: "starter", name: "Vegetable Soup with Houmous peas" },
  { type: "dessert", name: "Chocolate Cake" }
];

// ✅ Check if at least one item is a dessert using `some()` and ternary operator
console.log(menu.some(item => item.type === "dessert") ? "There is at least one dessert" : "No desserts found");

// ✅ Check if all items are starters using `every()`
console.log(menu.every(item => item.type === "starter") ? "All items are starters" : "Not all items are starters");

// ✅ Check if there is a main course, if not, add one using `some()` and `push()`
if (!menu.some(item => item.type === "main")) {
  menu.push({ type: "main", name: "Grilled Chicken with Vegetables" });
}
console.log(menu);

// ✅ Add `vegetarian` key based on ingredient list
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
menu.forEach(item => {
  item.vegetarian = vegetarian.some(ingredient => item.name.toLowerCase().includes(ingredient));
});
console.log(menu);

 

/*  Exercise 2: Chop into chunks */
// Function that splits a string into chunks of given size
const string_chop = (str, size) => {
  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
};

console.log(string_chop('developers', 2)); 
// Expected output: ["de", "ve", "lo", "pe", "rs"]

 

/*  Exercise 3: You said string? */
// Function to find occurrences of a word within a string
const search_word = (sentence, word) => {
  const count = sentence.split(' ').filter(w => w === word).length;
  return `'${word}' was found ${count} times.`;
};

console.log(search_word('The quick brown fox jumps over the lazy dog', 'fox')); 
// Expected output: "'fox' was found 1 times."

 

/*  Exercise 4: Reverse Array */
// Function to reverse an array **without creating a new array**
const reverseArray = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]; // Swap elements in place
  }
  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5])); 
// Expected output: [5, 4, 3, 2, 1]

console.log(reverseArray([1, 2])); 
// Expected output: [2, 1]

console.log(reverseArray([])); 
// Expected output: []

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10])); 
// Expected output: [10,9,8,7,6,5,4,3,2,1]
