/*Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']*/



/*JS*/



function filterLongWords(sentence, n) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Filter the words that are longer than n
  const longWords = words.filter(word => word.length > n);

  return longWords;
}
