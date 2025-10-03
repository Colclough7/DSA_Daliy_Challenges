/*Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.*/




/*JS*/



function gordon(a) {
  return a
    .toUpperCase()                          // Convert all to uppercase
    .replace(/A/g, '@')                     // Replace 'A' with '@'
    .replace(/[EIOU]/g, '*')                // Replace other vowels with '*'
    .split(' ')                             // Split into words
    .map(word => word + '!!!!')             // Add '!!!!' to each word
    .join(' ');                             // Join words back into a string
}
