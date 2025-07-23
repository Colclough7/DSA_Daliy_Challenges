/*Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. 
So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()*/



/*JS*/



Math.round = function(number) {
  var intPart = number | 0;
  var fraction = number - intPart;
  return (fraction >= 0.5) ? intPart + 1 : intPart;
};

Math.ceil = function(number) {
  var intPart = number | 0;
  return (number > intPart) ? intPart + 1 : intPart;
};

Math.floor = function(number) {
  return number | 0;
};
