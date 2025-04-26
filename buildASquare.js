/*I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++*/






/*JS*/




function generateShape(integer) {
  // Create one row of '+' characters
  const row = '+'.repeat(integer);
  // Repeat the row 'integer' times and join with newline characters
  return Array(integer).fill(row).join('\n');
}
