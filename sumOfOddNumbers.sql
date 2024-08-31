/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/


/*
the table "nums" contains an integer "n", the number
return your result in a column "res"
*/


/*SQL*/


WITH RowInfo AS (
    SELECT
        n,
        -- Calculate the starting odd number for the nth row
        (n * (n - 1)) + 1 AS starting_number
    FROM nums
),
OddNumbers AS (
    SELECT
        n,
        starting_number,
        -- Sum of the nth row of consecutive odd numbers
        (n * starting_number) + (n * (n - 1)) AS sum_of_row
    FROM RowInfo
)
SELECT
    sum_of_row AS res
FROM OddNumbers;
