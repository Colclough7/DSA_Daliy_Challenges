/*In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!*/



/*JS*/



function solve(a, b) {
  let result = '';

  // Characters in `a` but not in `b`
  for (let char of a) {
    if (!b.includes(char)) {
      result += char;
    }
  }

  // Characters in `b` but not in `a`
  for (let char of b) {
    if (!a.includes(char)) {
      result += char;
    }
  }

  return result;
}
