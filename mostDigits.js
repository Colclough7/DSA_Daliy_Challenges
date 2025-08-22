/*Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.*/


/*JS*/




function findLongest(array) {
  return array.reduce((longest, current) => {
    return String(Math.abs(current)).length > String(Math.abs(longest)).length
      ? current
      : longest;
  });
}
