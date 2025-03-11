/*Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.*/




/*JS*/




function isSortedAndHow(array) {
  if (array.every((val, i, arr) => i === 0 || arr[i - 1] <= val)) {
    return "yes, ascending";
  }
  if (array.every((val, i, arr) => i === 0 || arr[i - 1] >= val)) {
    return "yes, descending";
  }
  return "no";
}
