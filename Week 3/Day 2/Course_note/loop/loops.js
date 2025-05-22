/**
 Create a structured HTML file linked to a JS file

1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration,
 it will check if the current number is odd or even, and display a message to the screen.

Sample Output: //"0 is even" //"1 is odd" //"2 is even"

 */

/**
 
number = prompt("Please write a number to see if it's odd or even");
nbr = Number(number);

const outPutDiv = document.getElementById("output");
let nbr = prompt("Write a nubmer!");
nbr = Number(nbr);

for (let i = 0; i <= nbr ; i++) {
  let message;
  
  if (i % 2 === 0) {
    message = `${i} is even`;
  } else {
    message = `${i} is odd`;
  }

  const p = document.createElement("p");
  p.textContent = message;
  outPutDiv.appendChild(p);
}
*/

const divOutPut = document.getElementById("output");
let nbr = prompt("Plaise Enter a number: ");
nbr = Number(nbr);


for (let i=0;i<= nbr;i++){
  let message;
  try{
      if (i%2 === 0){
        message = `The number ${i} is an even!`
      } else {
        message = `The number ${i} is an odd!`
      }

    let p = document.createElement("p");
    p.textContent = message;
    divOutPut.appendChild(p);
  }
  catch{
    alert("Please enter a valid number!")
  }
}