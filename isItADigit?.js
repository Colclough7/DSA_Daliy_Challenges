/*Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.*/







/*JS*/





String.prototype.digit = function() {
   return /^\d$/.test(this);
};
