// Convert the array to a string using .toString()
const numbers = [5,0,9,1,7,4,2,6,3,8];
console.log("Using .toString():", numbers.toString());

//  Convert the array to a string using .join() with different separators
console.log("Using .join(','):", numbers.join(","));
console.log("Using .join('+'):", numbers.join("+"));
console.log("Using .join(' '):", numbers.join(" "));
console.log("Using .join(''):", numbers.join(""));

// Bubble Sort - Sorting the array in descending order without built-in methods
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] < numbers[j + 1]) {
            // Swap elements using a temporary variable
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
        console.log(`Step ${i}-${j}:`, numbers); // Log each step for understanding
    }
}

// Final sorted array in descending order
console.log("Sorted array:", numbers);
