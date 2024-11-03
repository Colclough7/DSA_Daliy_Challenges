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
