/*When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.*/




/*JS*/





function swap(string) {
  return string.split('').map(char => 
    'aeiou'.includes(char.toLowerCase()) ? char.toUpperCase() : char
  ).join('');
}
