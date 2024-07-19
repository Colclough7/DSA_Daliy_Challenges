--Your task is to sort the information in the provided table 'companies' by number of employees (high to low). Returned table should be in the same format as provided:

--companies table schema

-- id
-- ceo
-- motto
-- employees
-- Solution should use pure SQL

--Pseduo code: From the companies table, return the number of employees.

/*  SQL  */

SELECT * 
FROM companies 
ORDER BY employees DESC;
