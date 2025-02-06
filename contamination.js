
/*An AI has infected a text with a character!!

This text is now fully mutated to this character.

Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"*/




/*JS*/




function contamination(text, char){
  // Code here ;)
  
    // If the text is empty or char is empty, return an empty string
  if (text === "" || char === "") {
    return "";
  }

  // Return a string with the same length as `text`, consisting of the character `char`
  return char.repeat(text.length);
}
