/*Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]*/




/*JS*/




const orderedCount = function (str) {
  // Initialize an empty object to store character counts
  const charCount = {};
  
  // Initialize an array to keep track of the order of appearance
  const order = [];
  
  // Iterate over the string and count occurrences of each character
  for (let char of str) {
    if (!charCount[char]) {
      charCount[char] = 1;
      order.push(char); // Record the character first time it appears
    } else {
      charCount[char]++;
    }
  }

  // Convert the object to an array of [char, count] tuples
  const result = order.map(char => [char, charCount[char]]);

  return result;
};
