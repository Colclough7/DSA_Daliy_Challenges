/*Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.*/





/*JS*/




function moveTen(s) {
    return s.split('').map(char => {
        // Get character code and shift by 10, wrap around if needed
        let code = char.charCodeAt(0);
        let newCode = ((code - 97 + 10) % 26) + 97;
        return String.fromCharCode(newCode);
    }).join('');
}
