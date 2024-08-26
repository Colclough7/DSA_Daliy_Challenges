/*You will be given a table numbers, with one column number.

Return a dataset with two columns: number and is_even, where number contains the original input value, 
and is_even containing "Even" or "Odd" depending on number column values.

Numbers table schema
* number INT
Output table schema
* number  INT
* is_even STRING*/





--# write your SQL SELECT statement here: you are given a table 'numbers' with column 'number', return a table with column 'number' and your result in a column named 'is_even'.


/*SQL*/


SELECT 
    number,
    CASE 
        WHEN number % 2 = 0 THEN 'Even'
        ELSE 'Odd'
    END AS is_even
FROM 
    numbers;
