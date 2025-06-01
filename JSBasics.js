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
const sayHi = function() { console.log("Hi!"); };

// Arrow Function (no `this` binding)
const obj = {
  name: "Alice",
  greet: () => console.log(this.name) // ❌ `this` refers to window
};
obj.greet(); // undefined


/* Code with Explanations */
// Regular function (dynamic `this`)
function person(){
  this.age = 0;
  seInterval(function growUp(){
    this.age++;// ❌ `this` refers to global object
  },1000);
}


function Person() {
  this.age = 0;
  setInterval(() =>{
    this.age++;
  },1000);
}






//🔍 Functions & Closures
function createCount(){
  let count =0;
  return{
    incrementCount: () => ++count,  
    getCount: () => count,
  };
}
/*Code with Explanations*/
const counter = createCount();//Lexical Scope: Functions access variables from their definition context.
const increment = counter.incrementCount();///Encapsulation with Factory Functions: Functions returning objects for state retention.
console.log(increment );

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

const greet = (name) => {  "Hello, " + name + "!"; };
console.log(greet('ehfehg'))
console.log(null===undefined)
