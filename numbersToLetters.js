/*Given an array of numbers (in string format), you must return a string. 
The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.*/


/*JS*/



function switcher(x){
 const map = {
    '27': '!',  // Special case for '!'
    '28': '?',  // Special case for '?'
    '29': ' ',  // Special case for space
  };

  // Loop through the array and convert each number
  return x.map(num => {
    if (map[num]) {
      return map[num];  // If it's a special case, return the mapped character
    }
    const letterCode = 26 - (parseInt(num) - 1);  // Adjust for reverse alphabet mapping
    return String.fromCharCode(96 + letterCode);   // Convert to corresponding letter
  }).join('');
}
