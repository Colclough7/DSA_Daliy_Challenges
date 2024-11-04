/*In a retail database system, we have three main tables: sales, product_prices, and customer_reviews. The sales table logs each sale's time and related product ID. product_prices records the history of product prices, and customer_reviews captures 
customer ratings for products over time. We need a query to analyze the price and customer sentiment at the time of each sale.

sales:

id(int): primary key.
sale_time(datetime): timestamp of the sale
product_id(int): id of a product that is being sold
product_prices:

id(int): primary key.
price_time (datetime): timestamp of the price record
product_id (int): id of a product price of which is considered
price (float)
customer_reviews:

id(int): primary key.
review_time (datetime): timestamp of the review record
product_id (int): id of a product review of which is considered
review_rating (int) - the rating that was provided by a customer
Write an SQL query to fetch the time of each sale, the most recent product price, and the most recent customer review rating at or before the time of the sale. The results should be ordered first by the time of the sale and then by the sale ID if 
multiple sales occur at the same time.

Returned Columns:

sale_time (text): The timestamp of each sale, cast to text. It represents when each sale occurred in the sales table.
product_id (int): Id of the product that is being sold.
price (float): The most recent product price from the product_prices table at or before the sale
review_rating (int, nullable): The most recent review rating from the customer_reviews table at or before the sale_time. This column represents customer latest sentiment towards the product at the time of sale.
Query should order the results by sale_time in descending order and then by sales.id also in descending order to handle sales that occur at the same timestamp.

It's possible that a sale occurs for a product that does not have a corresponding price record in the product_prices table at or before the sale time. In such cases, the query should exclude these sales from the results. On the other hand, the customer_reviews 
table may not always have a review for every product at the time of sale. If a review is unavailable, the query should include these sales but display null for the review_rating column.

For this sample data:

sales:

| id | sale_time           | product_id |
|----|---------------------|------------|
| 1  | 2024-04-11 12:00:00 | 1          |
| 2  | 2024-04-11 12:10:00 | 2          |
product_prices: 

| id | price_time          | product_id | price |
|----|---------------------|------------|-------|
| 1  | 2024-04-11 11:55:00 | 1          | 10.99 |
| 2  | 2024-04-11 11:50:00 | 2          | 20.99 |
customer_reviews: 

| id | review_time         | product_id | review_rating |
|----|---------------------|------------|---------------|
| 1  | 2024-04-11 11:53:00 | 1          | 5             |
| 2  | 2024-04-11 11:48:00 | 2          | 4             |
the desired output is the following:

| sale_time           | product_id | price | review_rating |
|---------------------|------------|-------|---------------|
| 2024-04-11 12:10:00 |   2        | 20.9  |       4       |
| 2024-04-11 12:00:00 |   1        | 10.99 |       5       |

*/



/*SQL*/
