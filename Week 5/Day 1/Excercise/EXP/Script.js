// Exercise 1: Comparison
function compareToTen(num) {
  return new Promise((resolve, reject) => {
      if (num <= 10) {
          resolve(`${num} is less than or equal to 10`);
      } else {
          reject(`${num} is greater than 10`);
      }
  });
}

// Testing Exercise 1
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Exercise 2: Promises
const delayedPromise = new Promise(resolve => {
  setTimeout(() => resolve("success"), 4000);
});

// Testing Exercise 2
delayedPromise.then(result => console.log(result));

// Exercise 3: Resolve & Reject
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

// Testing Exercise 3
resolvedPromise.then(value => console.log(value));
rejectedPromise.catch(error => console.log(error));
