//   Exercise 1: Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Using forEach to display color choices with numbering
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Checking if "Violet" exists in the array using the `includes` method
console.log(colors.includes("Violet") ? "Yeah" : "No...");

 

/*   Exercise 2: Colors #2 */
const ordinal = ["th","st","nd","rd"];

// Using map to generate ranked color choices dynamically
colors.forEach((color, index) => {
    const suffix = (index + 1 < 4) ? ordinal[index + 1] : ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});

 

/*   Exercise 3: Analyzing */

//   1   Spread operator merges arrays into a single array.
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);  
// Expected output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

//   2   Spread operator converts a string into an array of characters.
const country = "USA";
console.log([...country]);  
// Expected output: ['U', 'S', 'A']

//   Bonus   The spread operator creates an array with empty slots.
let newArray = [...[,,]];
console.log(newArray);  
// Expected output: [undefined, undefined]

 

/*   Exercise 4: Employees */
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// Using map() to create an array of personalized welcome messages.
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// Using filter() to extract only Full Stack Residents.
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

// Bonus: Combining filter() with map() to get only last names of Full Stack Residents.
const lastNames = users.filter(user => user.role === 'Full Stack Resident')
                      .map(user => user.lastName);
console.log(lastNames);

 

/*   Exercise 5: Star Wars */
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Using reduce() to merge the words into a single string
const epicSentence = epic.reduce((acc, word) => `${acc} ${word}`);
console.log(epicSentence);
// Expected output: "a long time ago in a galaxy far far away"

 

/*   Exercise 6: Employees #2 */
const students = [
    { name: "Ray", course: "Computer Science", isPassed: true }, 
    { name: "Liam", course: "Computer Science", isPassed: false }, 
    { name: "Jenner", course: "Information Technology", isPassed: true }, 
    { name: "Marco", course: "Robotics", isPassed: true }, 
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false }, 
    { name: "Jamie", course: "Big Data", isPassed: false }
];

// Using filter() to get students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// Bonus: Using forEach() with filter() to display congratulatory messages
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});
