/*Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"*/




/*JS*/




function sevenAte9(str) {
 while (str.includes("797")) {
    str = str.replace("797", "77");
  }
  return str;
}
