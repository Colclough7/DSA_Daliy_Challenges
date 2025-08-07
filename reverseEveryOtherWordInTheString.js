/*Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata.*/


/*JS*/



function reverse(str) {
  return str
    .trim()                      // Remove leading/trailing whitespace
    .split(/\s+/)                // Split on one or more spaces
    .map((word, i) =>
      i % 2 === 1 ? word.split('').reverse().join('') : word
    )
    .join(' ');                  // Join with single space
}
