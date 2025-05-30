const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};

const jsonString = JSON.stringify(marioGame);
console.log(jsonString);

/* 
What happens to nested objects?

The nested objects inside characters become nested JSON objects within the JSON string.

The entire structure (including nested properties) is converted to a string in JSON format.

Keys and string values become quoted strings.

Numbers stay as numbers (not quoted).

Functions and undefined values are ignored (not present in your object).

Example output snippet:

json
Copier
Modifier
{
  "detail":"An amazing game!",
  "characters":{
    "mario":{
      "description":"Small and jumpy. Likes princesses.",
      "height":10,
      "weight":3,
      "speed":12
    },
    ...
  }
}
*/

/*

o format the JSON string nicely (indentation, new lines):

js
Copier
Modifier
const prettyJsonString = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonString);
The second parameter null means no replacer function.

The third parameter 2 means indent with 2 spaces.
*/


const prettyJsonString = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonString);

/*
Using Web Inspector to add a breakpoint and check JSON values
How to do it:

Open your browser's Developer Tools (F12 or Ctrl+Shift+I).

Go to the Sources tab.

Add a breakpoint on the line where you call JSON.stringify.

Run your code (reload or trigger the function).

When paused, you can inspect the variable (jsonString or prettyJsonString) in the Scope pane.

You can explore the JSON string and see the nested structure inside the string.


*/