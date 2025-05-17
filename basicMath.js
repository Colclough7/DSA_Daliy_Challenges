/*In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"*/




/*JS*/



function calculate(str) {
  // Replace 'plus' with '+' and 'minus' with '-'
  let expression = str.replace(/plus/g, '+').replace(/minus/g, '-');

  // Use eval to calculate the result (safe here because input is limited to numbers, plus, and minus)
  let result = eval(expression);

  // Return the result as a string
  return result.toString();
}
