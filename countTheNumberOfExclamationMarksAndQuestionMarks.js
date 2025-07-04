/*Description:
Count the number of exclamation marks and question marks, return the product.

Examples
""          --->   0
"!"         --->   0
"!ab? ?"    --->   2
"!!"        --->   0
"!??"       --->   2
"!???"      --->   3
"!!!??"     --->   6
"!!!???"    --->   9
"!???!!"    --->   9
"!????!!!?" --->  20*/




/*JS*/




function product(string) {
  let exclamations = 0;
  let questions = 0;

  for (let char of string) {
    if (char === '!') exclamations++;
    if (char === '?') questions++;
  }

  return exclamations * questions;
}
