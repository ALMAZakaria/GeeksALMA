//📌 Phase 1: Core JavaScript (1–2 Weeks)

`📌 Step 1: Variable Declarations (var, let, const)`
/*
### **Definition & Explanation**
- **`var`**: Function-scoped, hoisted, can be redeclared.
- **`let`**: Block-scoped, can be reassigned but not redeclared.
- **`const`**: Block-scoped, cannot be reassigned or redeclared.
*/
/*Case Study*/
function scopeExample() {
  if (true) {
    var a = 10; // Function-scoped
    let b = 20; // Block-scoped
    const c = 30; // Block-scoped
  }
  console.log(a); // ✅ 10 (var is accessible)
  console.log(b); // ❌ ReferenceError (let is block-scoped)
  console.log(c); // ❌ ReferenceError (const is block-scoped)
}
scopeExample();

/*Code with Explanations*/
// Using `var` (avoid in modern JS)
var name = "Alice";
name = "Bob"; // ✅ Reassignment allowed
var name = "Charlie"; // ✅ Redeclaration allowed

// Using `let` (preferred for variables that change)
let age = 25;
age = 26; // ✅ Reassignment allowed
let age = 27; // ❌ SyntaxError (no redeclaration)

// Using `const` (preferred for constants)
const PI = 3.14;
PI = 3.1416; // ❌ TypeError (no reassignment)


`📌 Step 2: Data Types & Type Coercion`
/*
- **Primitive Types**: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **Type Coercion**: Automatic conversion between types (e.g., `1 + "2" = "12"`).
*/
/*Case Study*/
console.log(5 + "5"); // "55" (number coerced to string)
console.log("10" - 5); // 5 (string coerced to number)
console.log(null == undefined); // true (loose equality quirk)

`📌 Step 3: Functions (Declaration, Expression, Arrow)`
/*
### **Definition & Explanation**

- **Function Declaration**: `function foo() {}` (hoisted).
- **Function Expression**: `const foo = function() {}` (not hoisted).
- **Arrow Function**: `const b       foo = () => {}` (lexical `this`).
*/
/************Case Study*************/
// Function Declaration (hoisted)
sayHello(); // ✅ Works (hoisting)
function sayHello() { console.log("Hello!"); }

// Function Expression (not hoisted)
/*Why it fails: sayHi is declared with const,
 so it is not initialized at the time of the call due to Temporal Dead Zone.
 Even with let or var, function expressions are not hoisted with their body.*/
sayHi(); // ❌ ReferenceError
const sayHi = function () { console.log("Hi!"); };

// Arrow Function (no `this` binding)
const obj = {
  name: "Alice",
  greet: () => console.log(this.name) // ❌ `this` refers to window
};
obj.greet(); // undefined


/* Code with Explanations */
// Regular function (dynamic `this`)
function person() {
  this.age = 0;
  seInterval(function growUp() {
    this.age++;// ❌ `this` refers to global object
  }, 1000);
}


function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
  }, 1000);
}






//🔍 Functions & Closures
function createCount() {
  let count = 0;
  return {
    incrementCount: () => ++count,
    getCount: () => count,
  };
}
/*Code with Explanations*/
const counter = createCount();//Lexical Scope: Functions access variables from their definition context.
const increment = counter.incrementCount();///Encapsulation with Factory Functions: Functions returning objects for state retention.
console.log(increment);

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

const greet = (name) => { "Hello, " + name + "!"; };
console.log(greet('ehfehg'))
console.log(null === undefined)


/*Async*/

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error("Error fetching data", error);
  }
}

fetchUsers();

console.log("Start of script");

setTimeout(function () {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");


//------------------------------
const makeBurger = () => {
  const meatType = getMeat();
  const bunsType = getBuns();
  const burger = putMeatBetwenBuns(bunsType, meatType);
  return burger;
};
function getMeat() {
  console.log("walking to the butcher...");
  setTimeout(() => {
    console.log("getting the beef from the butcher");
    return "beef"
  }, 2000);
}

function getBuns() {
  console.log("Waiting to execute function: ")
  setTimeout(() => {
    console.log("getting the buns from the bakery");
    return "whole grain";
  }, 1500);
}


function putMeatBetwenBuns(bunsType, meatType) {
  console.log(`creating the ${meatType} burger with ${bunsType} buns`);
  return "Delicious Burger"
}

const burger = makeBurger();
console.log(burger);



/*Promises*/
let goodGrades = true; // Use descriptive variable names
let endSemester = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (goodGrades) {
      resolve("Congratulations! You earned a reward!"); // More professional message
    } else {
      reject("Unfortunately, grades did not meet expectations."); // More constructive message
    }
  }, 1500);
});

// Add promise handling
endSemester
  .then(message => console.log(message))
  .catch(error => console.log(error));


function compareToTen(num) {
  return new Promise((resolve, reject) => {

    if (num <= 10) {
      resolve(`${num} is less or equal 10 `);
    } else {
      reject(`${num} is greater then 10 `);
    }
  });
}
compareToTen(35)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))



  /***************/
const delayedPromise = new Promise((resolve)=>{
  setTimeout(() => resolve("success!")  , 4000)
})
delayedPromise.then(result=>console.log(result));

  /***************/
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise.then(value => console.log(value));
rejectedPromise.catch(error => console.log(error));

/* Fetch API Async Awiat*/

const getArtwork = () => {
  console.log("Function is working..")
  fetch("https://api.artic.edu/api/v1/artworks/14572")
  .then( (response) => {
    if (response.ok){
      return response.json()
    }else{
      throw new Error("There's an errore calling the API")
    }  
    })
  .then((obj) => {
    console.log(obj);
    console.log(`The painting is named ${obj.data.title}
                  by the artiste ${obj.data.artiste_title}`)
  })
  .catch(function(error){
    console.log(`we got error: ${error}`)
  });
  console.log("work done..")

}
getArtwork()


