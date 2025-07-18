/*Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

Code Examples

    prefill(3,1) --> [1,1,1]
    
    prefill(2,"abc") --> ['abc','abc']
    
    prefill("1", 1) --> [1]
    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"*/





/*JS*/



function prefill(n, v) {
  // Convert n to a number if it's a string representation of a number
  const num = Number(n);

  // Validate n
  if (
    typeof n === 'boolean' ||         // rule out booleans
    Number.isNaN(num) ||              // rule out non-numeric strings
    !Number.isInteger(num) ||         // must be an integer
    num < 0                           // must be non-negative
  ) {
    throw new TypeError(`${n} is invalid`);
  }

  // If v is omitted, it will be undefined automatically
  return Array(num).fill(v);
}
