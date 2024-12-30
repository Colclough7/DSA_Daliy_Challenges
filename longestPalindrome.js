/*Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0*/





/*JS*/




function longestPalindrome(s){
  //your code here
    if (s.length === 0) return 0;

  let maxLength = 1; // Minimum palindrome length is 1 (any single character)

  // Helper function to expand around a center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Return the length of the palindrome
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes (centered at i)
    let len1 = expandAroundCenter(i, i);
    // Check for even-length palindromes (centered between i and i+1)
    let len2 = expandAroundCenter(i, i + 1);

    // Update maxLength with the largest palindrome found
    maxLength = Math.max(maxLength, len1, len2);
  }

  return maxLength;
}
