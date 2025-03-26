/*Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

Examples
454793 ---> "4547-9-3"
     0 ---> "0"
     1 ---> "1"
13579  ---> "1-3-5-7-9"
 86420 ---> "86420"*/




/*JS*/




function insertDash(num) {
    let numStr = num.toString(); // Convert the number to a string
    let result = '';

    for (let i = 0; i < numStr.length; i++) {
        result += numStr[i];

        // Check if the current and next digit are both odd
        if (i < numStr.length - 1 && parseInt(numStr[i]) % 2 !== 0 && parseInt(numStr[i + 1]) % 2 !== 0) {
            result += '-'; // Insert a dash between them
        }
    }

    return result;
}
