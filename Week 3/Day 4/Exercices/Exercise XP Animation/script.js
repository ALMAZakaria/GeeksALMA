//  Exercise 1

// Part I – Alert after 2 seconds
setTimeout(() => {
  alert("Hello World");
}, 2000);

// Part II – Add a paragraph after 2 seconds
setTimeout(() => {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

// Part III – Add a new paragraph every 2 seconds, stop at 5 or on button click
let count = 0;
const container = document.getElementById("container");

const intervalId = setInterval(() => {
  if (count >= 15) {
    clearInterval(intervalId);
    return;
  }
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
  count++;
}, 2000);

document.getElementById("clear").addEventListener("click", () => {
  clearInterval(intervalId);
});


//  Exercise 2 – Move the box

function myMove() {
  const animate = document.getElementById("animate");
  let pos = 0;
  const containerWidth = 400;
  const boxWidth = 50;

  const id = setInterval(() => {
    if (pos >= containerWidth - boxWidth) {
      clearInterval(id);
    } else {
      pos++;
      animate.style.left = pos + "px";
    }
  }, 1);
}