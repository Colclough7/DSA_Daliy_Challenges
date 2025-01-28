/*Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.*/




/*JS*/



function calculateTip(amount, rating) {
// Normalize the rating to lower case to handle case insensitivity
  const ratingLower = rating.toLowerCase();

  // Define the tip percentage based on the rating
  let tipPercentage;

  switch (ratingLower) {
    case 'terrible':
      tipPercentage = 0;
      break;
    case 'poor':
      tipPercentage = 0.05;
      break;
    case 'good':
      tipPercentage = 0.1;
      break;
    case 'great':
      tipPercentage = 0.15;
      break;
    case 'excellent':
      tipPercentage = 0.2;
      break;
    default:
      return "Rating not recognised"; // Return message if rating is unrecognized
  }

  // Calculate the tip and round it up
  const tip = Math.ceil(amount * tipPercentage);

  return tip;
}
