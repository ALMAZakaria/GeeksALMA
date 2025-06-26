//  Exercise 1 : Print Full Name
// Function that destructures the parameter and returns formatted name
const printFullName = ({ first, last }) => `Your full name is ${first} ${last}`;

console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));
// Expected output: "Your full name is Elie Schoppik"



/*  Exercise 2: Keys and Values */
// Function that extracts keys and values, sorts them alphabetically, and returns them in two separate arrays.
const keysAndValues = obj => {
  const sortedKeys = Object.keys(obj).sort(); // Get keys and sort alphabetically
  const sortedValues = sortedKeys.map(key => obj[key]); // Get values in sorted order
  return [sortedKeys, sortedValues];
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// Expected output: [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// Expected output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// Expected output: [["key1", "key2", "key3"], [true, false, undefined]]



/*  Exercise 3: Counter Class */
// This class tracks a count that increases when `increment()` is called.
class Counter {
  constructor() {
    this.count = 0; // Initializes the counter at 0
  }

  increment() {
    this.count++; // Increases count by 1
  }
}

// Creating an instance of Counter
const counterOne = new Counter();
counterOne.increment(); // count = 1
counterOne.increment(); // count = 2

const counterTwo = counterOne; // `counterTwo` is a reference to `counterOne`
counterTwo.increment(); // count = 3 (modifying `counterOne` as well)

console.log(counterOne.count);
// Expected output: 3 (since `counterOne` and `counterTwo` reference the same object)
