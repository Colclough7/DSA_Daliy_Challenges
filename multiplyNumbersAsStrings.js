
/*This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

Usage of BigInt is disallowed and will be checked in the full test suite.*/



/*JS*/


function multiply(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    const m = num1.length, n = num2.length;
    const result = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const p1 = i + j, p2 = i + j + 1;
            const sum = mul + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    // Convert to string and remove leading zeros
    while (result[0] === 0) {
        result.shift();
    }

    return result.join('');
}
