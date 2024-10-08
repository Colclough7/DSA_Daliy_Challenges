/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.*/

-- # write your SQL statement here: you are given a table 'booltoword' with column 'bool', return a table with column 'bool' and your result in a column named 'res'.


/*SQL*/


SELECT 
    bool,
    CASE 
        WHEN bool THEN 'Yes'
        ELSE 'No'
    END AS res
FROM 
    booltoword;
