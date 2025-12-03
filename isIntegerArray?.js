/*Write a function that:

returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.*/




/*JS*/



function isIntArray(arr) {
  // Must be an array; if not, return false
  if (!Array.isArray(arr)) return false;
  
  // Empty array → true
  if (arr.length === 0) return true;

  // Check each element
  return arr.every(
    (x) => Number.isInteger(x) ||
          (typeof x === "number" && !isNaN(x) && x % 1 === 0)
  );
}
