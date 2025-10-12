/*Write a function that takes two string parameters search_text and full_text and returns the number of times the search_text is found within the full_text.

Overlap is not permitted: "aaa" contains 1 instance of "aa", not 2.
search_text will never be empty.
Examples:
full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
--> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
--> should return 1*/




/*JS*/




function solution(fullText, search) {
  let count = 0;
  let i = 0;

  while (i <= fullText.length - search.length) {
    if (fullText.substring(i, i + search.length) === search) {
      count++;
      i += search.length; // Move past this match to avoid overlap
    } else {
      i++;
    }
  }

  return count;
}
