
/*Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!*/




/*JS*/



function alternate(n, firstValue, secondValue) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i % 2 === 0 ? firstValue : secondValue);
  }
  return result;
}
