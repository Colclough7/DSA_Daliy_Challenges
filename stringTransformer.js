/*Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.*/





/*JS*/




function stringTransformer(str) {
// Step 1: Change case of each character
  let transformedStr = str.split('').map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }).join('');
  
  // Step 2: Reverse the order of words, while preserving spaces
  let words = transformedStr.match(/\S+|\s+/g);

  // If there are no words (empty or only spaces), return the transformed string as is
  if (!words) {
    return transformedStr;
  }

  // Reverse the array and join it back to a string
  let reversedWords = words.reverse().join('');
  
  return reversedWords;
}
