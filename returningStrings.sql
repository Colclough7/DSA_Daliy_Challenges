--Write a select statement that takes name from person table and return "Hello, <name> how are you doing today?" results in a column named greeting


--person table has name data


/*SQL*/


SELECT CONCAT('Hello, ',name,' how are you doing today?') as greeting FROM person 
