/*Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: m = y2 - y1 / x2 - x1 */





/*JS*/




function slope(points){
//..
   const [a, b, c, d] = points;
    if (a === c) {
        return "undefined";
    } else {
        return String((d - b) / (c - a)); // Return the slope as a string
    }
}
