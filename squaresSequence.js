/*Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]*/



/*JS*/




function squares(x, n) {
  // If n is less than or equal to 0, return an empty array
  if (n <= 0) return [];

  let result = [];
  let current = x;

  // Generate the sequence
  for (let i = 0; i < n; i++) {
    result.push(current);
    current = current * current; // Square the current number
  }

  return result;
}
