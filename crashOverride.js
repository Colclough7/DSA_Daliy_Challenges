/*Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'*/



/*JS*/




function aliasGen(first,last){
    // Code Here
  // Normalize the names to uppercase to ensure case insensitivity
    first = first.trim();
    last = last.trim();
    
    // Check if the first character of both names is a letter from A-Z
    if (!first || !last || !/[A-Za-z]/.test(first[0]) || !/[A-Za-z]/.test(last[0])) {
        return "Your name must start with a letter from A - Z.";
    }

    // Get the first letters of the names, converted to uppercase
    const firstLetter = first[0].toUpperCase();
    const lastLetter = last[0].toUpperCase();

    // Generate the alias based on the first letters
    return `${firstName[firstLetter]} ${surname[lastLetter]}`;
}
