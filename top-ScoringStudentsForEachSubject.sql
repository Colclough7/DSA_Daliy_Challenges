/*Write a query to produce a result set that lists an array of student names (ordered by their student_id in ascending order) for each subject where these students achieved the highest mark for that subject. Your result should also include the subject name and the highest mark achieved.

Table Schema:

students:

student_id (integer) - Unique identifier for each student.
student_name (varchar) - Name of the student.
details (varchar) - Additional details related to the student (for this challenge, it may have a static value like 'X').
subjects:

subject_id  (varchar) - Unique identifier for each subject (e.g., 'M' for Math).
subject_name (varchar) - Name of the subject (e.g., 'Math', 'English').
marks:

student_id (integer) - Identifier linking to the students table.
subject_id (varchar) - Identifier linking to the subjects table.
mark_rate (integer) - The mark or score the student has received for the subject.
Resultant Dataset Columns:

student_names (varchar[]) - Array of student names who scored the top mark for a subject, ordered by their student ID in ascending order.
subject_name (varchar) - Name of the subject.
mark_rate (integer) - The highest mark achieved in the subject.
The result set should be ordered by the subject_id in ascending order.

GLHF!​

Desired Output
​The desired output should look like this:​

student_names	subject_name	mark_rate
{Paul,Lukas}	English	100
{George}	History	98
{John}	Math	95
*/





/*SQL*/




-- Substitute with your SQL

WITH HighestMarks AS (
    SELECT 
        m.subject_id,
        MAX(m.mark_rate) AS max_mark
    FROM 
        marks m
    GROUP BY 
        m.subject_id
),
TopStudents AS (
    SELECT 
        s.student_name,
        s.student_id,
        m.subject_id,
        m.mark_rate
    FROM 
        marks m
    JOIN 
        students s ON m.student_id = s.student_id
    JOIN 
        HighestMarks hm ON m.subject_id = hm.subject_id AND m.mark_rate = hm.max_mark
)
SELECT 
    ARRAY_AGG(ts.student_name ORDER BY ts.student_id) AS student_names,
    sub.subject_name,
    hm.max_mark AS mark_rate
FROM 
    TopStudents ts
JOIN 
    subjects sub ON ts.subject_id = sub.subject_id
JOIN 
    HighestMarks hm ON ts.subject_id = hm.subject_id
GROUP BY 
    sub.subject_id, sub.subject_name, hm.max_mark
ORDER BY 
    sub.subject_id;
