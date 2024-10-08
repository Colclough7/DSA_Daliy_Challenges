/*Let's consider a situation where we have three tables:

users table:

Columns: id, name
Primary key: id
products table:

Columns: id, product_name
Primary key: id
orders table:

Columns: id, user_id, product_id
Primary key: id
Foreign keys: user_id references users(id), product_id references products(id)
In this kata, we need to find the most popular product (i.e., the product that has been ordered the most). In case of a tie in the number of orders, return all most ordered products ordered by product ID in descending order. Include in the result also the total number of orders for that product.

GLHF!

Desired Output
The desired output should look like this:

product_id	product_name	count_orders
2	Product2	20
1	Product1	20*/

SELECT 
    p.id AS product_id,
    p.product_name,
    COUNT(o.id) AS count_orders
FROM 
    products p
LEFT JOIN 
    orders o ON p.id = o.product_id
GROUP BY 
    p.id, p.product_name
HAVING 
    COUNT(o.id) = (
        SELECT 
            MAX(order_count) 
        FROM (
            SELECT 
                COUNT(*) AS order_count
            FROM 
                orders
            GROUP BY 
                product_id
        ) AS order_counts
    )
ORDER BY 
    p.id DESC;
