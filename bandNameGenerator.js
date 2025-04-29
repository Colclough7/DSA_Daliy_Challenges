/*My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, 
combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.*/





/*JS*/



function bandNameGenerator(str) {
  if (str[0] === str[str.length - 1]) {
    // Capitalize the first letter, and combine the noun without repeating the shared character
    const capitalized = str[0].toUpperCase() + str.slice(1);
    return capitalized + str.slice(1);
  } else {
    // Just return "The" + capitalized noun
    return "The " + str[0].toUpperCase() + str.slice(1);
  }
}
