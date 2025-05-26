// JavaScript Exercises Compilation

/*   Exercise 1: Dog age to Human years */
// Using a loop to calculate the sum of dog ages in human years
const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

// Loop method
let totalDogAge = 0;
data.forEach(pet => {
  if (pet.type === 'dog') {
    totalDogAge += pet.age * 7;
  }
});
console.log(`Total dog age in human years (loop): ${totalDogAge}`);

// Using reduce() method to achieve the same result
const totalDogHumanYears = data
  .filter(pet => pet.type === 'dog') // Select only dogs
  .reduce((sum, pet) => sum + pet.age * 7, 0); // Sum up ages

console.log(`Total dog age in human years (reduce): ${totalDogHumanYears}`);

 

/*   Exercise 2: Email Cleanup */
// Removes whitespaces using trim() in a single line
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanedEmail = userEmail3.trim();
console.log(cleanedEmail); 
// Expected output: "cannotfillemailformcorrectly@gmail.com"

 

/*   Exercise 3: Employees #3 */
// Transforming array of users into an object where full name is the key and role is the value
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
];

// Using reduce() to convert array into object
const userObject = users.reduce((acc, user) => {
  acc[`${user.firstName} ${user.lastName}`] = user.role;
  return acc;
}, {});

console.log(userObject);

/* Expected output:
{
  'Bradley Bouley': 'Full Stack Resident',
  'Chloe Alnaji': 'Full Stack Resident',
  'Jonathan Baughn': 'Enterprise Instructor',
  'Michael Herman': 'Lead Instructor',
  'Robert Hajek': 'Full Stack Resident',
  'Wes Reid': 'Instructor',
  'Zach Klabunde': 'Instructor'
}
*/

 

/*   Exercise 4: Array to Object */
// Using a loop to count occurrences of each letter
const letters = ['x', 'y', 'z', 'z'];
const letterCountLoop = {};

letters.forEach(letter => {
  letterCountLoop[letter] = (letterCountLoop[letter] || 0) + 1;
});

console.log(letterCountLoop); 
// Expected output: { x: 1, y: 1, z: 2 }

// Using reduce() method to achieve the same result
const letterCountReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(letterCountReduce); 
// Expected output: { x: 1, y: 1, z: 2 }
