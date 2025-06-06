/*Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

The array will never be empty.*/






/*JS*/




function average(scores) {
    const sum = scores.reduce((acc, val) => acc + val, 0);
    return Math.round(sum / scores.length);
}
