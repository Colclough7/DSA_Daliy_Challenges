/*In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

The order is: uppercase letters, lowercase letters, numbers and special characters.

"*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
More examples in the test cases.

Good luck!*/




/*JS*/



function solve(s) {
  let upper = 0, lower = 0, numbers = 0, special = 0;

  for (let char of s) {
    if (/[A-Z]/.test(char)) {
      upper++;
    } else if (/[a-z]/.test(char)) {
      lower++;
    } else if (/[0-9]/.test(char)) {
      numbers++;
    } else {
      special++;
    }
  }

  return [upper, lower, numbers, special];
}
