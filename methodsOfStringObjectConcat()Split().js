/*Task
Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"*/




/*JS*/



function splitAndMerge(string, separator) {
  // Step 1: Split the string into words
  return string.split(" ")
    // Step 2: For each word, split into characters and join with the separator
    .map(word => word.split("").join(separator))
    // Step 3: Join all the words back into a sentence with spaces
    .join(" ");
}
