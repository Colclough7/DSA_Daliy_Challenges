/*Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.*/







/*JS*/



function mergeArrays(a, b) {
  // your code here
    // Merge both arrays
  let merged = [...a, ...b];

  // Create a new array with unique elements and sort the result
  let uniqueSortedArray = [...new Set(merged)].sort((x, y) => x - y);

  return uniqueSortedArray;
}
