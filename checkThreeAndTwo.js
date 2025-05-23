/*Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"*/






/*JS*/




function checkThreeAndTwo(array) {
  const counts = {};

  // Count occurrences
  for (let char of array) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // Get values of counts
  const values = Object.values(counts);

  // Check if one value is 3 and one is 2
  return values.includes(3) && values.includes(2);
}
