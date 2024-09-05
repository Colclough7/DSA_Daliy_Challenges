/*We have two tables: customers and loans.

customers table:

id (integer): The primary key for the table.
age (integer): The age of the customer.
loans table:

id (integer): The primary key for the table.
customer_id (integer): A foreign key referencing id in the customers table.
loan_status (string): The status of the loan, either 'paid' or 'unpaid'.
loan_amount (float): The amount of the loan.
Write a SQL query that returns a list of all customers who have IDs between 1 and 10. For each customer, the query should return their ID (as customer_id) and their loan eligibility based on the following criteria:

If the customer is 18 to 65 years old (inclusive) and all their loans are paid or they don't have any loans, they should be considered eligible for a loan, and the query should return 'loan can be given'.
Otherwise, the query should return 'loan cannot be given'.
The results should be sorted by customer_id in descending order.

GLHF!

Desired Output
The desired output should look like this:

customer_id	loan_eligibility
10	loan can be given
9	loan can be given
8	loan cannot be given
...*/
