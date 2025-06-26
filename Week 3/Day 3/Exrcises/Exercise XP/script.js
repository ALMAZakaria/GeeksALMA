// # Exercise 1: Find numbers divisible by a divisor (default 23)
function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum:", sum);
}
displayNumbersDivisible();       // # Default usage with 23
displayNumbersDivisible(3);     // # Bonus test with 3
displayNumbersDivisible(45);    // # Bonus test with 45

// # Exercise 2: Shopping list total cost and stock management
const stock = { banana: 6, apple: 0, pear: 12, orange: 32, blueberry: 1 };
const prices = { banana: 4, apple: 2, pear: 1, orange: 1.5, blueberry: 10 };
let shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--;  // # Bonus: reduce stock
    }
  }
  console.log("Total bill:", total);
}
myBill();

// # Exercise 3: Do I have enough change?
function changeEnough(itemPrice, amountOfChange) {
  const coinValues = [0.25, 0.10, 0.05, 0.01];
  let total = 0;
  for (let i = 0; i < coinValues.length; i++) {
    total += amountOfChange[i] * coinValues[i];
  }
  return total >= itemPrice;
}
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true

// # Exercise 4: Vacation cost calculator
function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) cost *= 0.95;
  return cost;
}

function totalVacationCost() {
  let nights = 3;
  let destination = "London";
  let days = 7;

  let hotel = hotelCost(nights);
  let plane = planeRideCost(destination);
  let car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
  return hotel + plane + car;
}
totalVacationCost(); // # Example usage (change to prompt-based for interactive)

// # Exercise 5: Users DOM manipulation
window.addEventListener("DOMContentLoaded", () => {
  let container = document.getElementById("container");

  // Change Pete to Richard
  let uls = document.querySelectorAll("ul");
  uls[0].children[1].textContent = "Richard";

  // Remove Sarah
  uls[1].removeChild(uls[1].children[1]);

  // Change first li in each ul to your name
  uls.forEach(ul => {
    ul.children[0].textContent = "Zakaria"; // # Replace with your name
    ul.classList.add("student_list");
  });

  // Bonus styling
  uls[0].classList.add("university", "attendance");
  container.style.backgroundColor = "lightblue";
  container.style.padding = "10px";

  // Hide Dan and add border to Richard
  document.querySelectorAll("li").forEach(li => {
    if (li.textContent === "Dan") li.style.display = "none";
    if (li.textContent === "Richard") li.style.border = "1px solid black";
  });

  // Change font size
  document.body.style.fontSize = "18px";

  // Alert if background is lightblue
  if (container.style.backgroundColor === "lightblue") {
    const names = Array.from(uls).map(ul => ul.children[0].textContent);
    alert("Hello " + names.join(" and "));
  }
});

// # Exercise 6: Navbar update
window.addEventListener("DOMContentLoaded", () => {
  let navBar = document.getElementById("navBar");
  navBar.setAttribute("id", "socialNetworkNavigation");

  let ul = navBar.querySelector("ul");
  let newLi = document.createElement("li");
  newLi.textContent = "Logout";
  ul.appendChild(newLi);

  // Log first and last li
  console.log("First:", ul.firstElementChild.textContent);
  console.log("Last:", ul.lastElementChild.textContent);
});

// # Exercise 7: Book list display
window.addEventListener("DOMContentLoaded", () => {
  const allBooks = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "https://images-na.ssl-images-amazon.com/images/I/41aQPTCmeVL.jpg",
      alreadyRead: true
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://images-na.ssl-images-amazon.com/images/I/41E1xbmEmyL.jpg",
      alreadyRead: false
    }
  ];

  const section = document.querySelector(".listBooks");

  allBooks.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("mb-4", "flex", "items-center", "space-x-4");

    const p = document.createElement("p");
    p.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
      p.classList.add("text-red-600", "font-semibold");
    }

    const img = document.createElement("img");
    img.src = book.image;
    img.classList.add("w-20", "h-auto", "rounded");

    div.appendChild(img);
    div.appendChild(p);
    section.appendChild(div);
  });
});
