/*Given a demographics table in the following format:

** demographics table schema **

id
name
birthday
race
you need to return the same table where all letters are lowercase in the race column.*/



--PseduoCode - UPDATE demographics SET race column LOWERCASE(race column);


/*  SQL  */
UPDATE demographics SET race = LOWER(race);
SELECT * FROM demographics;
