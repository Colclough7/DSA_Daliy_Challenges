/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12*/


-- # write your SQL statement here: you are given a table 'quarterof' with column 'month', return a table with column 'month' and your result in a column named 'res'.


/*SQL*/


SELECT 
    month,
    CASE
        WHEN month IN (1, 2, 3) THEN 1
        WHEN month IN (4, 5, 6) THEN 2
        WHEN month IN (7, 8, 9) THEN 3
        WHEN month IN (10, 11, 12) THEN 4
    END AS res
FROM 
    quarterof;
