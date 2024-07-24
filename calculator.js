# Challenge: Calculator

## Instructions

/*Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.*/

//Parameters - number num1 (first number), number num2 (second number), string operator('+','-','*','/')
//Returns - integer
//Example - Fn(1,3,'+') => 4
//Pseduo code - function calculator(num1:number,num2:number,operator:string): number 


//code

function calculator(num1,num2,operator){

let result

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    throw new Error('Invalid operator');
}
return result 
}


//OR



function calculator(num1, num2, operator) {
  // Declare a variable to store the result
  let result;

  // Use if/else if/else statements to determine which operation to perform
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    // If the operator is not one of the above, throw an error
    throw new Error('Invalid operator');
  }

  return result;
}
