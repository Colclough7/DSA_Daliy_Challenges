/*Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.*/





/*JS*/



function binaryToString(binary) {
    if (binary === "") return "";

    let result = "";
    for (let i = 0; i < binary.length; i += 8) {
        let byte = binary.slice(i, i + 8);            // Get 8-bit chunk
        let charCode = parseInt(byte, 2);             // Convert binary to decimal
        result += String.fromCharCode(charCode);      // Convert to ASCII character
    }
    return result;
}
