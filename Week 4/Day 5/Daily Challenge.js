function areAnagrams(str1, str2) {
  // Helper function to clean and sort characters
  const cleanString = str => 
    str
      .toLowerCase()            // ignore case
      .replace(/\s+/g, '')      // remove all whitespace
      .split('')                // split into array of chars
      .sort()                   // sort alphabetically
      .join('');                // join back to string

  return cleanString(str1) === cleanString(str2);
}

/*Exemples*/
console.log(areAnagrams("Astronomer", "Moon starer"));       // true
console.log(areAnagrams("School master", "The classroom"));  // true
console.log(areAnagrams("The Morse Code", "Here come dots"));// true
console.log(areAnagrams("Hello", "Olelh"));                   // true
console.log(areAnagrams("Hello", "World"));                   // false
