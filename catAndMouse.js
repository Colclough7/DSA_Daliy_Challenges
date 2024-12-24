/*You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

"C.....m" returns "Escaped!" <-- more than three characters between

"C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.*/




/*JS*/



function catMouse(x){
  const catPos = x.indexOf('C'); // Position of the cat
  const mousePos = x.indexOf('m'); // Position of the mouse
  
  // Calculate the number of characters between the cat and the mouse
  const distance = mousePos - catPos - 1;

  // If the distance is greater than 3, the mouse escapes; otherwise, it gets caught
  return distance > 3 ? "Escaped!" : "Caught!";
}
