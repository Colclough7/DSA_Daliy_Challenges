/*Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true*/




/*JS*/




function containAllRots(strng, arr) {
    // your code
      if (strng === "") return true; // Edge case for empty string
    
    const rotations = [];
    const n = strng.length;
    
    // Generate all rotations of the string
    for (let i = 0; i < n; i++) {
        rotations.push(strng.slice(i) + strng.slice(0, i)); // Create rotation by slicing the string
    }
    
    // Check if all rotations are present in the array
    for (let rotation of rotations) {
        if (!arr.includes(rotation)) {
            return false; // If any rotation is missing, return false
        }
    }
    
    return true; // All rotations are found, return true
}
