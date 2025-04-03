/*Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal*/




/*JS*/



function compare(s1, s2) {
  // Helper function to check if the string is valid
  function isValid(s) {
    // If the string is null, undefined, or contains invalid values, treat it as invalid
    const invalidValues = ['null', 'NULL', 'Nil', 'None'];
    if (s === null || s === undefined || invalidValues.includes(s)) return false;
    
    // Check if the string contains only alphabetic characters (letters only)
    return /^[a-zA-Z]*$/.test(s);
  }

  // Convert both strings to uppercase and treat invalid strings as empty
  s1 = (isValid(s1) ? s1.toUpperCase() : '');
  s2 = (isValid(s2) ? s2.toUpperCase() : '');

  // Function to calculate the sum of ASCII values
  function getAsciiSum(str) {
    return str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  }

  // Compare the sums of the ASCII values of both strings
  return getAsciiSum(s1) === getAsciiSum(s2);
}
