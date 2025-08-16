/*Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"*/




/*JS*/



function balance(left, right) {
  // Helper function to calculate weight of a string
  const getWeight = (str) => {
    let weight = 0;
    for (let char of str) {
      if (char === '!') weight += 2;
      else if (char === '?') weight += 3;
    }
    return weight;
  };

  const leftWeight = getWeight(left);
  const rightWeight = getWeight(right);

  if (leftWeight > rightWeight) return 'Left';
  if (rightWeight > leftWeight) return 'Right';
  return 'Balance';
}
