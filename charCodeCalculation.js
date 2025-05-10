/*Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6*/






/*JS*/



function calc(x) {
  // Step 1: Convert characters to ASCII codes and join them into a string
  let total1 = x.split('').map(char => char.charCodeAt(0)).join('');
  
  // Step 2: Replace all 7s with 1s
  let total2 = total1.replace(/7/g, '1');
  
  // Step 3: Calculate the sum of digits for total1 and total2
  const sumDigits = str => str.split('').reduce((sum, digit) => sum + Number(digit), 0);
  
  let sum1 = sumDigits(total1);
  let sum2 = sumDigits(total2);
  
  // Step 4: Return the difference
  return sum1 - sum2;
}
