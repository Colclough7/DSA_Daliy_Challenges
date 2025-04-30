/*Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats*/




/*JS*/




var countDeafRats = function(town) {
  // Remove whitespace
  town = town.replace(/\s/g, "");

  // Find the index of the Pied Piper
  let pIndex = town.indexOf("P");

  let deafRats = 0;

  // Process the string in chunks of 2 characters (rat representations)
  for (let i = 0; i < town.length; i += 2) {
    // Skip the Piper character
    if (town[i] === "P") {
      i--;
      continue;
    }

    let rat = town.slice(i, i + 2);

    // Before the Piper, correct rats face right (~O)
    if (i < pIndex) {
      if (rat !== "~O") deafRats++;
    }

    // After the Piper, correct rats face left (O~)
    if (i > pIndex) {
      if (rat !== "O~") deafRats++;
    }
  }

  return deafRats;
};
