/*Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]*/





/*JS*/



function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1); // returns a new array from index 1 to end
}

function init(arr) {
  return arr.slice(0, -1); // returns a new array from start to second-to-last
}

function last(arr) {
  return arr[arr.length - 1];
}
