//   Exercise: Game Info Processing

const gameInfo = [
  { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
  { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
  { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
  { username: "tyson", team: "green", score: 1, items: ["book", "pen"] }
];

//   Step 1: Create an array of usernames with "!" added at the end
const usernames = [];
gameInfo.forEach(({ username }) => usernames.push(username + "!"));
console.log(usernames);
// Expected output: ["john!", "becky!", "susy!", "tyson!"]

//   Step 2: Filter users with a score greater than 5
const winners = [];
gameInfo.forEach(({ username, score }) => { if (score > 5) winners.push(username); });
console.log(winners);
// Expected output: ["becky", "susy"]

//   Step 3: Calculate the total score of all users
let totalScore = 0;
gameInfo.forEach(({ score }) => totalScore += score);
console.log(totalScore);
// Expected output: 71
