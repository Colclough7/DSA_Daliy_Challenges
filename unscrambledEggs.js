/*Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg")  =>  "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice reggular eggspressions, so commenting would be appreciated.*/






/*JS*/




function unscrambleEggs(word) {
  // This regex replaces every occurrence of "egg" following a consonant
  // ([^aeiou]) is any character that's not a vowel (case-sensitive)
  // We use a capturing group to keep the consonant
  return word.replace(/([^aeiouAEIOU])egg/g, '$1');
}
