/*We have a table named books with the following schema:

id (integer) - The unique identifier for each book entry.
title (varchar) - The title of the book.
author (varchar) - The author of the book.
genres (varchar[]) - An array of genres associated with the book.
Write a SQL query to achieve the following:

Return a list of genres.
Count the number of books in each genre.
List titles of the books in each genre as an array. The titles within this array should be sorted alphabetically.
The output should be ordered by the number of books in each genre in descending order, and then alphabetically by genre name for genres with the same book count.

GLHF!

Desired Output
The desired output should look like this:

genre	count	books
Adventure	2	{"Harry Potter","Lord of the Rings"}
Dystopian	2	{1984,"Brave New World"}
Fantasy	2	{"Harry Potter","Lord of the Rings"}
Science Fiction	2	{"Brave New World",Foundation}
Political	1	{1984}*/


-- Substitute with your SQL


WITH UnnestedGenres AS (
    SELECT
        unnest(genres) AS genre,
        title
    FROM
        books
),
AggregatedData AS (
    SELECT
        genre,
        COUNT(*) AS count,
        ARRAY_AGG(title ORDER BY title) AS books
    FROM
        UnnestedGenres
    GROUP BY
        genre
)
SELECT
    genre,
    count,
    books
FROM
    AggregatedData
ORDER BY
    count DESC,  -- Sort by the number of books in descending order
    genre;       -- Sort by genre alphabetically if counts are the same
