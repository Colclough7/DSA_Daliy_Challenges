/*Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1*/




/*JS*/



function countLettersAndDigits(input) {
  return (input.match(/[a-zA-Z0-9]/g) || []).length;
}
