/*
Exercise 1
Create a stuctured html file linked to a JS file

1. Create an object that has properties "username" and "password". Fill those values in with strings.

2. Create an array which contains the object you have made above and name the array "database".

3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
*/

//Object
users = {
  username : "Zakariaalma",
  password: "Z@123"
}
//Array
const database = [users];

//Object
let newsfeed = [
  { username :"Zakaria",
    timeline : "I love JavaScript!"
  },
  { username :"NAsser",
    timeline : "Today is a sunny day "
  },
  { username :"Said",
    timeline : "Working on my first web app!"
  }
];

// Display the array in the console 
console.log("Database:", database);
console.log("Newsfeed:", newsfeed);
