/*Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:

The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0*/





/*JS*/



function derive(coefficient,exponent) {
   // Multiply coefficient and exponent
  let newCoefficient = coefficient * exponent;
  
  // Subtract 1 from the exponent
  let newExponent = exponent - 1;
  
  // Return the result in the required format
  return `${newCoefficient}x^${newExponent}`;
}
