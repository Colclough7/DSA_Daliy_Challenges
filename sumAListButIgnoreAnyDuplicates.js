/*Please write a function that sums a list, but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.*/





/*JS*/



function sumNoDuplicates(numList) {
  // Create an object to count the frequency of each number
  const counts = {};

  // Count each number
  for (let num of numList) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // Sum only numbers that appear exactly once
  let sum = 0;
  for (let num of numList) {
    if (counts[num] === 1) {
      sum += num;
    }
  }

  return sum;
}
