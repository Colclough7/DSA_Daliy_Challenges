/*###Lucky number

Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

Function will return true for lucky numbers and false for others.*/





/*JS*/





function isLucky(n) {
  // Convert number to string and sum its digits
  let sum = 0;
  for (let digit of n.toString()) {
    sum += parseInt(digit);
  }

  // Check if sum is 0 or divisible by 9
  return sum === 0 || sum % 9 === 0;
}
