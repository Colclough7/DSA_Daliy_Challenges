/*For this challenge you need to create a simple SELECT statement that will return all columns from the people table, 
and join to the sales table so that you can return the COUNT of all sales and RANK each person by their sale_count.

people table schema
id
name
sales table schema
id
people_id
sale
price
You should return all people fields as well as the sale count as "sale_count" and the rank as "sale_rank".*/


-- Create your SELECT statement here

WITH SalesCount AS (
    SELECT
        people_id,
        COUNT(*) AS sale_count
    FROM sales
    GROUP BY people_id
),
RankedSales AS (
    SELECT
        people_id,
        sale_count,
        RANK() OVER (ORDER BY sale_count DESC) AS sale_rank
    FROM SalesCount
)
SELECT
    p.id,
    p.name,
    COALESCE(r.sale_count, 0) AS sale_count,
    COALESCE(r.sale_rank, 0) AS sale_rank
FROM people p
LEFT JOIN RankedSales r
    ON p.id = r.people_id;
