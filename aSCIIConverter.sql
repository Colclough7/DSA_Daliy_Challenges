/*Given a demographics table in the following format:

** demographics table schema **

id
name
birthday
race
you need to return the same table where all text fields (name & race) are changed to the ascii code of their first byte.

e.g. Verlie = 86 Warren = 87 Horace = 72 Tracy = 84*/


--Pseduocode - SELECT name, FN_ASCII(name) Alise as NumCodeOfName, race, FN_ASCII(race) Alise as NumCodeOfRace FROM demographics

/*  SQL  */
SELECT id, ASCII(LEFT(name,1)) as name, birthday, ASCII(LEFT(race,1)) as race
FROM demographics
