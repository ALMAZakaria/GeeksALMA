// 1st Daily Challenge: Promises with Array Operations

function makeAllCaps(wordsArray) {
  return new Promise((resolve, reject) => {
      if (wordsArray.every(word => typeof word === "string")) {
          resolve(wordsArray.map(word => word.toUpperCase()));
      } else {
          reject("Error: Array contains non-string values.");
      }
  });
}

function sortWords(uppercasedArray) {
  return new Promise((resolve, reject) => {
      if (uppercasedArray.length > 4) {
          resolve(uppercasedArray.sort());
      } else {
          reject("Error: Array length is not greater than 4.");
      }
  });
}

// Testing
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) // ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch(error => console.log(error));


// 2nd Daily Challenge: Morse Code Translation

const morseJSON = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
  "6": "-....", "7": "--...", "8": "---..", "9": "----.", "a": ".-", "b": "-...", "c": "-.-.",
  "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
  "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-",
  "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--",
  "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(morseJSON);
      if (Object.keys(morseJS).length === 0) {
          reject("Error: Morse object is empty.");
      } else {
          resolve(morseJS);
      }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence:").toLowerCase();
      const morseTranslation = [];

      for (const char of userInput) {
          if (morseJS[char]) {
              morseTranslation.push(morseJS[char]);
          } else {
              reject(`Error: Character "${char}" not found in Morse code.`);
              return;
          }
      }
      resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  const outputElement = document.createElement("pre");
  outputElement.textContent = morseTranslation.join("\n");
  document.body.appendChild(outputElement);
}

// Chaining the functions
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log(error));
