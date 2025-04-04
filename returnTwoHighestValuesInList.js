/*In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []*/





/*JS*/




function twoHighest(arr) {
  // Remove duplicates by converting to a Set, then convert back to array
  let uniqueArr = [...new Set(arr)];
  
  // Sort the array in descending order
  uniqueArr.sort((a, b) => b - a);
  
  // Return the top two highest values, or fewer if there aren't enough
  return uniqueArr.slice(0, 2);
}
