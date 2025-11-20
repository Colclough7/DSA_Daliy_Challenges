/*One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"*/




/*JS*/



function makePassword(phrase) {
  // Split the phrase into words
  const words = phrase.split(' ');

  // Take first letter of each word and apply replacements
  return words.map(word => {
    let ch = word[0];

    // Apply number substitutions
    if (/[iI]/.test(ch)) ch = '1';
    else if (/[oO]/.test(ch)) ch = '0';
    else if (/[sS]/.test(ch)) ch = '5';

    return ch;
  }).join('');
}
