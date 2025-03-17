
/*Task

The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.

You should use for..in in your code, otherwise your solution may not pass this kata.*/



/*JS*/





function giveMeFive(obj) {
  let result = [];
  
  // Loop through each key in the object
  for (let key in obj) {
    // Check if the length of the key is 5
    if (key.length === 5) {
      result.push(key);
    }
    
    // Check if the length of the value is 5 (assuming the value is a string)
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  
  return result;
}
