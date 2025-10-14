/*Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

"abraxxxas" → true
"xoxotrololololololoxxx" → false
"softX kitty, warm kitty, xxxxx" → true
"softx kitty, warm kitty, xxxxx" → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false*/





/*JS*/




function tripleX(str) {
  const firstX = str.indexOf('x');
  
  // If there's no 'x', return false
  if (firstX === -1) return false;

  // Check if the next two characters are also 'x'
  return str[firstX + 1] === 'x' && str[firstX + 2] === 'x';
}
