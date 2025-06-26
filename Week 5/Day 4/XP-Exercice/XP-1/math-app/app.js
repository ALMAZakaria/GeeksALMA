const _ = require('lodash');
const math = require('./math');

// Using our custom math module
console.log('Using custom math module:');
console.log('Addition: 5 + 3 =', math.add(5, 3));
console.log('Multiplication: 4 * 6 =', math.multiply(4, 6));

// Using lodash
const numbers = [1, 2, 3, 4, 5];
console.log('\nUsing lodash:');
console.log('Sum of array:', _.sum(numbers));
console.log('Average of array:', _.mean(numbers));
console.log('Maximum value:', _.max(numbers)); 