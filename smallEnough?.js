/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/


/*JS*/




function smallEnough(a, limit) {
  // Check if all elements in array a are less than or equal to the limit
  return a.every(num => num <= limit);
}
