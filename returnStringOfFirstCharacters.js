/*In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.*/





/*JS*/


function makeString(s){
  // ...
  // Split the string into words
  const words = s.split(' ');
  
  // Map over the words, taking the first character of each word
  const firstLetters = words.map(word => word[0]);
  
  // Join the first letters into a single string and return it
  return firstLetters.join('');
}
