/*In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.*/






/*JS*/




function testEven(n) {
    //Your awesome code here!
  return Number.isInteger(n) && n % 2 === 0;
}