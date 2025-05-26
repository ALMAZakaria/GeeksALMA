// JavaScript Exercise: Pass by Value & Pass by Reference

// The client variable holds a string value.
let client = "John";

// The groceries object contains a list of items and payment information.
const groceries = {
    fruits: ["pear", "apple", "banana"], // Array of fruits
    vegetables: ["tomatoes", "cucumber", "salad"], // Array of vegetables
    totalPrice: "20$", // Total price of groceries
    other: {
        paid: true, // Payment status
        meansOfPayment: ["cash", "creditCard"] // Payment methods
    }
};

/*  Exercise 1: Display Groceries */
/* This function loops through the `fruits` array using `forEach` and logs each fruit. */
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Call the function to see the output.
displayGroceries();

/*  Exercise 2: Clone Groceries */
/* This function demonstrates pass-by-value and pass-by-reference behavior in JavaScript. */
const cloneGroceries = () => {
    // `user` is assigned the value of `client` (pass by value).
    let user = client;

    // Changing `client` to "Betty".
    client = "Betty";

    console.log("User:", user); 
    // Expected output: "John", because primitive values (strings) are passed **by value**.
    // Changing `client` does NOT affect `user` since `user` has a separate copy.

    // `shopping` is assigned the reference of `groceries` (pass by reference).
    let shopping = groceries;

    // Changing the `totalPrice` key to "35$".
    shopping.totalPrice = "35$";

    console.log("Groceries total price:", groceries.totalPrice);
    // Expected output: "35$". 
    // Since objects in JavaScript are passed **by reference**, modifying `shopping` also modifies `groceries`.

    // Changing the `paid` key to `false`.
    shopping.other.paid = false;

    console.log("Groceries paid status:", groceries.other.paid);
    // Expected output: `false`.
    // Again, since `shopping` is a reference to the original `groceries` object, changes reflect everywhere.

};

// Call the function to test modifications.
cloneGroceries();
