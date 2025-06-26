// JavaScript Exercises Compilation

/*  Exercise 1: Scope Analysis */

/* #1: Function Scope */
function funcOne() {
  let a = 5; // Variable `a` is declared inside the function.
  if (a > 1) { 
      a = 3; // The value of `a` is modified within the `if` block.
  }
  alert(`inside the funcOne function ${a}`); // Expected output: 3
}
funcOne();

/* What happens if `const` is used? */
// `const` prevents reassignment, so changing `a = 3` inside `if` would cause an error.

/* #2: Global vs Function Scope */
let a = 0; // Global variable

function funcTwo() {
  a = 5; // Modifies global `a`
}

function funcThree() {
  alert(`inside the funcThree function ${a}`); // Before funcTwo(): 0, After funcTwo(): 5
}

funcThree(); // Alerts 0
funcTwo(); // Updates `a` to 5
funcThree(); // Alerts 5

/* Using `const` would prevent `funcTwo` from modifying `a`, causing an error. */

/* #3: Window Property */
function funcFour() {
  window.a = "hello"; // Creates a global variable on the window object.
}

function funcFive() {
  alert(`inside the funcFive function ${a}`); // Expected output: "hello"
}

funcFour();
funcFive();

/* #4: Local vs Global */
let a = 1; // Global variable

function funcSix() {
  let a = "test"; // Local variable inside the function, separate from global `a`.
  alert(`inside the funcSix function ${a}`); // Expected output: "test"
}

funcSix();

/* #5: Block Scope */
let a = 2;
if (true) {
  let a = 5; // New variable inside the block scope.
  alert(`in the if block ${a}`); // Expected output: 5
}
alert(`outside of the if block ${a}`); // Expected output: 2

/* Using `const` instead of `let` works the same way within block scope. */



/*  Exercise 2: Ternary Operator */
const winBattle = () => true; // Arrow function returning true
const experiencePoints = winBattle() ? 10 : 1; // If winBattle() is true, assign 10; otherwise, 1.
console.log(experiencePoints); // Expected output: 10



/*  Exercise 3: Check if Input is a String */
const isString = value => typeof value === 'string';
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false



/*  Exercise 4: One-Line Sum Function */
const sum = (a, b) => a + b;
console.log(sum(5, 3)); // 8



/*  Exercise 5: Convert KG to Grams */

// Function Declaration
function convertKgToGrams(kg) {
  return kg * 1000;
}
console.log(convertKgToGrams(5)); // 5000

// Function Expression
const convertKgToGramsExpr = function(kg) {
  return kg * 1000;
};
console.log(convertKgToGramsExpr(5)); // 5000

// Arrow Function (One-Line)
const convertKgToGramsArrow = kg => kg * 1000;
console.log(convertKgToGramsArrow(5)); // 5000

/* Function Declaration vs Expression: 
 - Declaration is **hoisted**, so it can be called before definition.
 - Expression is **not hoisted**, meaning it must be defined before usage. */



/*  Exercise 6: Fortune Teller (Self-Invoking Function) */
(function(children, partner, location, job) {
  document.body.innerHTML = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
})(2, "Alice", "Paris", "Software Engineer");



/*  Exercise 7: Welcome User in Navbar */
(function(name) {
  const navbar = document.querySelector('.navbar');
  const userDiv = document.createElement('div');
  userDiv.innerHTML = `<p>Welcome, ${name}!</p><img src="profile.jpg" width="50">`;
  navbar.appendChild(userDiv);
})("John");



/*  Exercise 8: Juice Bar */

/* Part I: Basic Nested Function */
function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
      document.body.innerHTML = `The client wants a ${size} juice containing ${ing1}, ${ing2}, and ${ing3}.`;
  }
  addIngredients("Banana", "Strawberry", "Orange");
}

makeJuice("Large");

/* Part II: Advanced Version with Multiple Ingredients */
function makeJuice(size) {
  let ingredients = []; // Store all ingredients here.

  function addIngredients(ing1, ing2, ing3) {
      ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
      document.body.innerHTML = `The client wants a ${size} juice containing ${ingredients.join(", ")}.`;
  }

  addIngredients("Mango", "Peach", "Lime");
  addIngredients("Berry", "Honey", "Pineapple");
  displayJuice();
}

makeJuice("Medium");