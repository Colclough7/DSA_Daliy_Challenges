/*Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters*/




/*JS*/



const kebabize = str => {
  return str
    .replace(/[^a-zA-Z]/g, '')          // Remove all non-letter characters
    .replace(/([A-Z])/g, '-$1')         // Add hyphen before uppercase letters
    .toLowerCase()                      // Convert the whole string to lowercase
    .replace(/^-/, '');                 // Remove leading hyphen, if any
};
