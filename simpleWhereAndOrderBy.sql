/*For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50

people table schema
id
name
age
You should return all people fields where their age is over 50 and order by the age descending*/


Pseduo code - /*SELECT ALL 
              FROM people table
              WHERE age is greater than 50
              ORDER BY age in DESCENDING order*/


-- Create your SELECT statement here
SELECT * 
FROM people
WHERE age > 50
ORDER BY age desc;
