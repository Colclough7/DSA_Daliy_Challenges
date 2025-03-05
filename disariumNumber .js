/*Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"*/


/*JS*/



function disariumNumber(n) {
    // Convert the number into a string to access each digit
    const digits = n.toString().split('');
    
    // Calculate the sum of digits raised to their respective positions
    const sum = digits.reduce((acc, digit, index) => {
        return acc + Math.pow(Number(digit), index + 1);
    }, 0);
    
    // Check if the sum equals the original number
    if (sum === n) {
        return "Disarium !!";
    } else {
        return "Not !!";
    }
}
