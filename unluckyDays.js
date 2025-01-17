/*Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1*/





/*JS*/




function unluckyDays(year){
  //your code here
 let count = 0;
  
  // Loop through all 12 months
  for (let month = 0; month < 12; month++) {
    // Create a date object for the 13th day of the given month in the given year
    let date = new Date(year, month, 13);
    
    // Check if the 13th day is a Friday (getDay() returns 5 for Friday)
    if (date.getDay() === 5) {
      count++;
    }
  }
  
  return count;
}
