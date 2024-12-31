/*Task
We need a function to collect these numbers, that may receive two integers a a, b
b that defines the range 
[a,b]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]


If there are no numbers of this kind in the range 
[a,b]
[a,b] the function should output an empty list.



  90, 100 --> []*/




/*JS*/



function sumDigPow(a, b) {
  // Your code here
   let result = [];
  
  // Iterate through all numbers in the range [a, b]
  for (let num = a; num <= b; num++) {
    let digits = num.toString().split('').map(Number); // Convert the number to an array of digits
    let sumOfPowers = digits.reduce((sum, digit, index) => {
      return sum + Math.pow(digit, index + 1); // Raise digit to the power of its 1-based index
    }, 0);
    
    // If the sum of the powers equals the number, add it to the result
    if (sumOfPowers === num) {
      result.push(num);
    }
  }
  
  return result;
}
