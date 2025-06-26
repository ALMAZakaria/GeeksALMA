// Exercise 1: Divisible by Three
let numbers = [123, 8409, 100053, 333333333, 7];

for (let number of numbers) {
    console.log(number % 3 === 0);
}

// Exercise 2: Attendance
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};

let name = prompt("Enter your name:");

if (name.toLowerCase() in guestList) {
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name.toLowerCase()]}.`);
} else {
    console.log("Hi! I'm a guest.");
}

// Exercise 3: Playing with Numbers
let age = [20, 5, 12, 43, 98, 55];

// Sum of all ages
let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log("Sum of all ages:", sum);

// Find the highest age
let highest = age[0];
for (let i = 1; i < age.length; i++) {
    if (age[i] > highest) {
        highest = age[i];
    }
}
console.log("Highest age:", highest);