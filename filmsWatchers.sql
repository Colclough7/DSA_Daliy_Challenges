/*Write an SQL query to retrieve the top 5 customers who have rented the most movies, excluding customers who have rented at least one movie with an 'NC-17' rating. Subqueries are forbidden to make the task a bit curiouser - you can use select only once

Notes:
If two or more customers have the same amount of rentals then sort by last name alphabetically.
Schema
customer table:
Column       | Type     | Modifiers
------------ +----------+----------
customer_id  | integer  | not null
first_name   | varchar  | not null
last_name    | varchar  | not null
email        | varchar  | not null
inventory table:
Column       | Type      | Modifiers
------------ +-----------+----------
inventory_id | integer   | not null
film_id      | smallint  | not null
store_id     | smallint  | not null
film table:
Column           | Type     | Modifiers
-----------------+----------+----------
film_id          | integer  | not null
title            | varchar  | not null
description      | text     | not null
rating           | varchar  | not null
rental table:
Column       | Type      | Modifiers
-------------+-----------+----------
rental_id    | integer   | not null
customer_id  | integer   | not null
inventory_id | integer   | not null
rental_date  | timestamp | not null
return_date  | timestamp | 
Desired Output
The desired output should look like this:

customer_id  | full_name     | total_rentals |
-------------+---------------+---------------+
   32        | Jami Hayes    | 22            |
   14        | Hosea Jacobi  | 19            |
...
*/







/*SQL*/





SELECT c.customer_id,
       CONCAT(c.first_name, ' ', c.last_name) AS full_name,
       COUNT(r.rental_id) AS total_rentals
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
GROUP BY c.customer_id, c.first_name, c.last_name
HAVING SUM(CASE WHEN f.rating = 'NC-17' THEN 1 ELSE 0 END) = 0
ORDER BY total_rentals DESC, c.last_name
LIMIT 5;
