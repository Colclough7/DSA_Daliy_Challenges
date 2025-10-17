/*Introduction
There is a war...between alphabets!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spread throughout the battlefield. Who will win?

Task
Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. 
When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

Example (Input --> Output)
"s*zz"           --> "Right side wins!"
"*zd*qm*wp*bs*"  --> "Let's fight again!"
"zzzz*s*"        --> "Right side wins!"
"www*www****z"   --> "Left side wins!"*/



/*JS*/




function alphabetWar(fight) {
  const leftPower = { w: 4, p: 3, b: 2, s: 1 };
  const rightPower = { m: 4, q: 3, d: 2, z: 1 };

  const chars = fight.split('');
  const length = chars.length;
  const surviving = new Array(length).fill(true);

  // Mark letters to be destroyed by bombs
  for (let i = 0; i < length; i++) {
    if (chars[i] === '*') {
      if (i > 0) surviving[i - 1] = false;
      surviving[i] = false;
      if (i < length - 1) surviving[i + 1] = false;
    }
  }

  // Calculate scores
  let leftScore = 0;
  let rightScore = 0;

  for (let i = 0; i < length; i++) {
    if (!surviving[i]) continue;
    const letter = chars[i];
    if (leftPower[letter]) leftScore += leftPower[letter];
    else if (rightPower[letter]) rightScore += rightPower[letter];
  }

  if (leftScore > rightScore) return 'Left side wins!';
  if (rightScore > leftScore) return 'Right side wins!';
  return "Let's fight again!";
}
