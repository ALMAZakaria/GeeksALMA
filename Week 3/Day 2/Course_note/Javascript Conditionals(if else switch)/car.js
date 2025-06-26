/* 
Make a keyless car!

This car will only let you drive if you are over 18. Make it do the following:

Using prompt() and alert(), ask a user for their age.

IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
*/
// Ask user for their age
let age = prompt("What's your age?");
// Convert the input to a number
age = Number(age);
// Check the age and respond accordingly
/*
if (age < 18)
  {
    alert("You can not drive a car, you still a minor!")
  } else if (age > 18) {
  console.log("Congrats you can drive a car!")
} else {
  alert("Please enter a valide age!");
}* */
switch (true) {
  case age > 18:
    alert("You can not drive a car, you still a minor!");
    break;
  case age > 18:
    alert("You can not drive a car, you still a minor!");
    break;
  default:
    alert("Please enter a valide age!");
}
