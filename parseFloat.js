/*Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.*/





/*JS*/


function parseF(s) {
  // Check if the input is null or undefined
  if (s === null || s === undefined) {
    return null;
  }

  // Try to convert the input to a number using the Number constructor
  const parsed = Number(s);

  // If the result is NaN, return null
  if (isNaN(parsed)) {
    return null;
  }

  // Return the parsed number if it's valid
  return parsed;
}
