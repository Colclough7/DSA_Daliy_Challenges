/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/




/*JS*/


function findShort(s) {
  return s
    .split(' ')
    .reduce((shortest, word) => 
      Math.min(shortest, word.length), Infinity);
}
