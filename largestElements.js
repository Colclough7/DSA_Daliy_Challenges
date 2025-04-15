/*Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]*/




/*JS*/





function largest(n, array) {
  // Sort the array in descending order and take the first n elements
  let topN = array.sort((a, b) => b - a).slice(0, n);
  // Return them in ascending order
  return topN.sort((a, b) => a - b);
}
