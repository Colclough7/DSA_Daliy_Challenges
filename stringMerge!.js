/*Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. 
The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"*/





/*JS*/





function stringMerge(string1, string2, letter){
// Find the index of the first occurrence of the letter in both words
  const index1 = string1.indexOf(letter);
  const index2 = string2.indexOf(letter);
  
  // Merge the first part of string1 with the second part of string2, avoiding duplicating the letter
  const result = string1.slice(0, index1 + 1) + string2.slice(index2 + 1);
  
  return result;
}
