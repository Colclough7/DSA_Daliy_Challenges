/*Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. 
For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. 
Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.*/





/*JS*/



function removeRotten(bagOfFruits){
  // ...
   // If the array is null or empty, return an empty array
  if (!bagOfFruits) {
    return [];
  }
  
  // Create a new array with the updated fruits
  return bagOfFruits.map(fruit => {
    // If the fruit starts with "rotten", remove the "rotten" prefix and convert to lowercase
    if (fruit.startsWith("rotten")) {
      return fruit.slice(6).toLowerCase();  // Remove "rotten" (6 characters) and convert to lowercase
    }
    // Otherwise, just convert the fruit to lowercase
    return fruit.toLowerCase();
  });
}
