// Exercise 1: List of People
const people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg"
people.shift();

// Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";

// Add your name to the end of the array
people.push("Zakaria");

// Console.log Mary’s index
console.log(people.indexOf("Mary"));

// Make a copy of the array excluding "Mary" and your name
const newPeople = people.slice(1, -1);
console.log(newPeople);

// Index of "Foo"
console.log(people.indexOf("Foo")); // Returns -1 because "Foo" is not in the array

// Create a variable `last` to store the last element
const last = people[people.length - 1];
console.log(last);

// Part II - Loops
// Iterate through the people array and log each person
for (let person of people) {
    console.log(person);
}

// Iterate through the people array and exit the loop after "Devon"
for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}

// Exercise 2: Your Favorite Colors
const colors = ["Blue", "Red", "Green", "Yellow", "Purple"];

// Logging colors with ranking
colors.forEach((color, index) => {
    console.log(`My #${index + 1} choice is ${color}`);
});

// Bonus: Adding correct suffixes
const suffixes = ["st", "nd", "rd", "th", "th"];
colors.forEach((color, index) => {
    console.log(`My ${index + 1}${suffixes[index]} choice is ${color}`);
});

// Exercise 3: Repeat the Question
let number;
do {
    number = prompt("Enter a number:");
} while (parseInt(number) < 10);

//Exercise 4: Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// Console.log the number of floors in the building
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor + " apartments on 1st floor");
console.log(building.numberOfAptByFloor.thirdFloor + " apartments on 3rd floor");

// Console.log second tenant's name and their number of rooms
console.log(building.nameOfTenants[1]); 
console.log(building.numberOfRoomsAndRent.dan[0]);

// Increase Dan’s rent if necessary
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent);

// Exercise 5: Family
const family = {
    father: "John",
    mother: "Jane",
    son: "Jake"
};

// Log keys
for (let key in family) {
    console.log(key);
}

// Log values
for (let key in family) {
    console.log(family[key]);
}

// Exercise 6: Rudolf
const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer"
};

// Construct the sentence using a loop
let sentence = "";
for (let key in details) {
    sentence += details[key] + " ";
}
console.log(sentence.trim());

// Exercise 7: Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Generate the secret society name
const secretName = names.map(name => name[0]).sort().join("");
console.log(secretName); // "ABJKPS"
