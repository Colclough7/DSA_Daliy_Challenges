/*Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'*/



/*JS*/


function boredom(staff){
  const departmentScores = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25
  };

  // Calculate the total boredom score
  let totalScore = 0;
  for (const person in staff) {
    const department = staff[person];
    totalScore += departmentScores[department];
  }

  // Determine the sentiment based on the total score
  if (totalScore <= 80) {
    return 'kill me now';
  } else if (totalScore < 100) {
    return 'i can handle this';
  } else {
    return 'party time!!';
  }
}
