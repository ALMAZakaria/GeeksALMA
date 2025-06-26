// Exercise: Replace "not...bad" with "good"
let sentence = "The movie is not that bad, I like it"; // Example sentence

// Find the positions of "not" and "bad"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Check if "bad" appears after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
}

console.log(sentence);