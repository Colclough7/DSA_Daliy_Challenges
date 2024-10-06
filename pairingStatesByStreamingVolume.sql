/*You have the state_streams table, where each raw contains the abbreviation of the state and the total hours of streaming from the video hosting:

state (String)	total_streams (Integer)
NC	34569
SC	33999
CA	98324
MA	19345
..	..
Write an SQL query that selects pairs of states from the state_streams table where the total number of streams is less than a thousand of each other.

Your query should return a result set with three columns: state_a, state_b and difference.
Each row in the result set should represent a pair of states whose total_streams difference is less than 1000 along with displaying this difference.
The same pair of states should not appear more than once in the result set. For example, if you have a pair (NC, SC), you should not have another pair (SC, NC) in the results.
The states in both columns of your result set should be ordered in ascending alphabetical order. First by state_a and afterwards by state_b
state column is unique - there are no duplicate states.
Desired Output
For the example above, the desired output should look like this:

state_a	state_b	difference
NC	SC	570*/


/*SQL*/


SELECT 
    s1.state AS state_a,
    s2.state AS state_b,
    ABS(s1.total_streams - s2.total_streams) AS difference
FROM 
    state_streams s1
JOIN 
    state_streams s2 ON s1.state < s2.state
WHERE 
    ABS(s1.total_streams - s2.total_streams) < 1000
ORDER BY 
    state_a, state_b;
