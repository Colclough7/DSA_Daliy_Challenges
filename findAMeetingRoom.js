/*Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"*/





/*JS*/




function meeting(x){
 // Iterate through the array
    for (let i = 0; i < x.length; i++) {
        // Check if the room is empty
        if (x[i] === 'O') {
            return i;  // Return the index of the first empty room
        }
    }
    
    // If no empty room is found
    return "None available!";
}
