--Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:




/*input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.*/


WITH RECURSIVE gcd_cte AS (
    SELECT numerator, denominator, numerator AS a, denominator AS b
    FROM fraction
    UNION ALL
    SELECT gcd_cte.numerator, gcd_cte.denominator, gcd_cte.b, gcd_cte.a % gcd_cte.b
    FROM gcd_cte
    WHERE gcd_cte.b != 0
),
gcd_result AS (
    SELECT numerator, denominator, a AS gcd
    FROM gcd_cte
    WHERE b = 0
)
SELECT 
    f.numerator, 
    f.denominator, 
    f.numerator / g.gcd AS reduced_numerator, 
    f.denominator / g.gcd AS reduced_denominator
FROM 
    fraction f
JOIN 
    gcd_result g
ON 
    f.numerator = g.numerator AND f.denominator = g.denominator
ORDER BY 
    f.numerator ASC, f.denominator ASC;

