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


-- Substitute with your SQL


WITH customer_loans AS (
    SELECT
        c.id AS customer_id,
        c.age,
        COALESCE(SUM(CASE WHEN l.loan_status = 'unpaid' THEN 1 ELSE 0 END), 0) AS unpaid_loan_count
    FROM
        customers c
    LEFT JOIN
        loans l ON c.id = l.customer_id
    WHERE
        c.id BETWEEN 1 AND 10
    GROUP BY
        c.id, c.age
),
eligibility AS (
    SELECT
        customer_id,
        CASE
            WHEN age BETWEEN 18 AND 65 AND unpaid_loan_count = 0 THEN 'loan can be given'
            ELSE 'loan cannot be given'
        END AS loan_eligibility
    FROM
        customer_loans
)
SELECT
    customer_id,
    loan_eligibility
FROM
    eligibility
ORDER BY
    customer_id DESC;
