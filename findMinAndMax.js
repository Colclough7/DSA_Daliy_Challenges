/*Implement a function that returns the minimal and the maximal value of a list (in this order).*/


/*JS*/




function getMinMax(arr) {
  if (!arr || arr.length === 0) return null; // Handle empty or invalid input
  return [Math.min(...arr), Math.max(...arr)];
}
