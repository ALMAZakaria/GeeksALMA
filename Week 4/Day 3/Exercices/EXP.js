//  Exercise 1: Location
// Destructuring the person object to extract specific properties
const person = {
  name: 'John Doe',
  age: 25,
  location: {
      country: 'Canada',
      city: 'Vancouver',
      coordinates: [49.2827, -123.1207]
  }
};

// Using object destructuring to extract values directly
const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// Expected output: "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"

 

/*  Exercise 2: Display Student Info */
// Function that destructures the parameter to return a formatted string
const displayStudentInfo = ({ first, last }) => `Your full name is ${first} ${last}`;

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));
// Expected output: "Your full name is Elie Schoppik"

 

/*  Exercise 3: User & ID */
// Convert object into an array using `Object.entries()`
const users = { user1: 18273, user2: 92833, user3: 90315 };

const userArray = Object.entries(users);
console.log(userArray);
// Expected output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Multiply user IDs by 2 using `map()`
const updatedUserArray = userArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUserArray);
// Expected output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

 

/*  Exercise 4: Person Class */
// The `typeof` operator will return "object" because `member` is an instance of the `Person` class.
class Person {
constructor(name) {
  this.name = name;
}
}

const member = new Person('John');
console.log(typeof member); 
// Expected output: "object"

 

/*  Exercise 5: Dog Class */
// Correct constructor implementation must call `super(name)` to inherit properties properly
class Dog {
constructor(name) {
  this.name = name;
}
}

//  Correct version
class Labrador extends Dog {
constructor(name, size) {
  super(name); // Calls parent constructor to assign `name`
  this.size = size; // Adds size property
}
}

//  Incorrect versions:
// - Option 1 and Option 4 fail to call `super(name)`, breaking inheritance
// - Option 3 is incorrect because `super(name)` requires `name`, but it's missing

 

/*  Exercise 6: Challenges */
// Comparing objects and arrays
console.log([2] === [2]); // false - Different memory references
console.log({} === {}); // false - Each object is stored separately in memory

// Understanding object references
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4 - Shares reference with `object1`
console.log(object3.number); // 4 - Same reference as `object2` and `object1`
console.log(object4.number); // 5 - A separate object with no shared reference

 

/*  Exercise 7: Animal & Mammal Classes */
// Creating a base Animal class
class Animal {
constructor(name, type, color) {
  this.name = name;
  this.type = type;
  this.color = color;
}
}

// Extending Animal with Mammal and adding a sound method
class Mammal extends Animal {
sound(animalSound) {
  return `${animalSound} I'm a ${this.type}, named ${this.name}, and I'm ${this.color}.`;
}
}

// Creating an instance of Mammal for a cow
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound("Moooo"));
// Expected output: "Moooo I'm a cow, named Lily, and I'm brown and white."
