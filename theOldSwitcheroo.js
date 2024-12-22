/*Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.*/





/*JS*/



function vowel2index(str) {
   //code me
  
   const vowels = 'aeiouAEIOU';  // List of vowels (case insensitive)
    let result = [];  // Array to store the new characters
    
    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // Check if the character is a vowel
        if (vowels.includes(char.toLowerCase())) {
            result.push(i + 1);  // Append the position (1-based index)
        } else {
            result.push(char);  // Append the non-vowel character
        }
    }
    
    // Join the array into a string and return
    return result.join('');
}
