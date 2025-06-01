// Exercise 1: Promise.all()
const promise1 = Promise.resolve(3);
const promise2 = 42; // Non-promise value, treated as resolved.
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
    .then(result => console.log(result))
    .catch(error => console.log("Error:", error));

/*
Explanation:
- Promise.all() takes an array of promises and waits for all to resolve.
- If any promise rejects, it immediately rejects the whole batch.
- Expected output: [3, 42, "foo"] (after 3 seconds).
*/

// Exercise 2: Analyzing Promise.all()
function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
    .then(result => {
        console.log(result);
    });

/*
Explanation:
- map(timesTwoAsync) turns [1, 2, 3] into promises resolving their values *2.
- Promise.all waits for all promises to resolve and returns their values.
- Expected output: [2, 4, 6]
*/