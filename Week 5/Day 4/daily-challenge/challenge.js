const greet = require('./greeting');
const displayColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

// Display greeting
console.log('\n=== Greeting ===');
console.log(greet('User'));

// Display colorful message
console.log('\n=== Colorful Message ===');
displayColorfulMessage();

// Read and display file content
console.log('\n=== File Content ===');
const fileContent = readFileContent();
if (fileContent) {
    console.log(fileContent);
} 