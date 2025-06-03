/*dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

data and towns can be seen in "Your Test Cases:".

Task:

function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
Examples:

mean("London", data), 51.19(9999999999996) 
variance("London", data), 57.42(833333333374)
Notes:

if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

Shell

Shell tests only variance.
In "function "variance" $1 is "data", $2 is "town".*/


/*JS*/



function mean(town, strng) {
    const townData = strng.split('\n').find(line => line.startsWith(town + ":"));
    if (!townData) return -1;

    const numbers = townData
        .split(":")[1]
        .split(",")
        .map(entry => parseFloat(entry.split(" ")[1]));

    const total = numbers.reduce((sum, val) => sum + val, 0);
    return total / numbers.length;
}

function variance(town, strng) {
    const avg = mean(town, strng);
    if (avg === -1) return -1;

    const townData = strng.split('\n').find(line => line.startsWith(town + ":"));
    const numbers = townData
        .split(":")[1]
        .split(",")
        .map(entry => parseFloat(entry.split(" ")[1]));

    const variance = numbers.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / numbers.length;
    return variance;
}
