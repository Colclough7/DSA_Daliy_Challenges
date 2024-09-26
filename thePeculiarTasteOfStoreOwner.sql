/*The DVD rental store is doing a marketing campaign to promote their latest collection of films featuring actors whose names start with the letter "J". The store owner, who is a big fan of actors with "J" names, insists that they must be prominently displayed in the store and featured in all their advertisements.

Despite not understanding the store owner's peculiar tastes, you need to get the necessary list of actors. Thoughts about the new Playstation that will be bought from the next salary warm your heart while working on this task.

Task:
Write a SQL query that retrieves the actor_id, full_name, and film_title of the most recent film that an actor whose first name starts with the letter "J" has participated in. The report should be ordered by actor_id in ascending order.

Notes:
Unfortunately, DVD Rental DB does not have a timestamp for the release date of the film (only year), so by "the most recent film" we will simply take "the film with the biggest film_id". So, for example, if the actor has been starred in the films that have ids of 545 and 4, and 405 - we need to take the film with an id of 545

for the sample tests, static dump of DVD Rental Sample Database is used, for the final solution - random tests.

Good luck!

P. S. My goal is to create plenty of high-quality SQL katas because Codewars is definitely missing that. Please check out my other katas. Any feedback is appreciated. Cheers!

Schema
film table:
Column           | Type     | Modifiers
-----------------+----------+----------
film_id          | integer  | not null
title            | varchar  | not null
description      | text     | not null
rating           | varchar  | not null
film_actor table:
Column   | Type     | Modifiers
---------+----------+----------
id       | integer  | not null
film_id  | integer  | not null
actor_id | integer  | not null
actor table:
Column      | Type      | Modifiers
------------+-----------+----------
actor_id    | integer   | not null
first_name  | varchar   | not null
last_name   | varchar   | not null
Desired Output
The desired output should look like this:

actor_id | full_name           |     film_title        
---------+---------------------+-----------------------
   4     | Jennifer Davis      | Unforgiven Zoolander | 
   27    | Johnny Lollobrigida | Sunrise League       |
...*/
