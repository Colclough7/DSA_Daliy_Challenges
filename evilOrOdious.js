/*The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

good luck :)*/




/*JS*/



function evil(n) {
    // Convert the number to binary and count the number of '1's
    let onesCount = n.toString(2).split('1').length - 1;
    
    // Check if the count of '1's is even or odd
    if (onesCount % 2 === 0) {
        return "It's Evil!";
    } else {
        return "It's Odious!";
    }
}
