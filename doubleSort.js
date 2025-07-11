/*Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.*/





/*JS*/



function dbSort(a) {
  // Separate numbers and strings
  const numbers = a.filter(item => typeof item === 'number').sort((x, y) => x - y);
  const strings = a.filter(item => typeof item === 'string').sort();

  // Concatenate sorted numbers and sorted strings
  return numbers.concat(strings);
}
