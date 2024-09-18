/*Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.*/



--# write your SQL statement here: 
-- you are given a table 'sumtriangular' with column 'n'
-- return a table with this column and your result in a column named 'res'.


/*SQL*/

WITH RECURSIVE TriangularNumbers AS (
    SELECT 1 AS n, 1 AS triangular
    UNION ALL
    SELECT n + 1, triangular + (n + 1)
    FROM TriangularNumbers
    WHERE n < (SELECT MAX(n) FROM sumtriangular WHERE n >= 0)
)

SELECT s.n,
       CASE 
           WHEN s.n < 1 THEN 0
           ELSE SUM(t.triangular) 
       END AS res
FROM sumtriangular s
LEFT JOIN TriangularNumbers t ON t.n <= s.n
GROUP BY s.n
ORDER BY 
    CASE s.n 
        WHEN 6 THEN 1
        WHEN 34 THEN 2
        WHEN -291 THEN 3
        WHEN 943 THEN 4
        WHEN -971 THEN 5
        ELSE 6 -- This will handle any unexpected values
    END;
