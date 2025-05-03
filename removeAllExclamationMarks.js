/*Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"*/





/*JS*/




function remove(string) {
  // Remove all exclamation marks
  let cleaned = string.replace(/!/g, '');
  // Add a single exclamation mark at the end
  return cleaned + '!';
}
