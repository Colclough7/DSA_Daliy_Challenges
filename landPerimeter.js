/*Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. 
Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] 
which represents:

should return: "Total land perimeter: 24".

Following input:

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']
which represents:

should return: "Total land perimeter: 18"*/


/*JS*/



function landPerimeter(arr) {
  let perimeter = 0;
  const rows = arr.length;
  const cols = arr[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (arr[r][c] === 'X') {
        // each land tile contributes 4 sides initially
        perimeter += 4;

        // check neighbors and subtract shared edges
        if (r > 0 && arr[r - 1][c] === 'X') perimeter--;
        if (r < rows - 1 && arr[r + 1][c] === 'X') perimeter--;
        if (c > 0 && arr[r][c - 1] === 'X') perimeter--;
        if (c < cols - 1 && arr[r][c + 1] === 'X') perimeter--;
      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}
