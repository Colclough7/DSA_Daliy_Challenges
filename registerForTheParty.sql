/*You received an invitation to an amazing party. Now you need to write an insert statement to add yourself to the table of participants.

participants table schema

name (string)
age (integer)
attending (boolean)
NOTES:

Since alcohol will be served, you can only attend if you are 21 or older
You can't attend if the attending column returns anything but true*/

-- Psedocode - Insert into participants table(name,age,attending)
--values('name',age,boolean);

INSERT INTO participants(name,age,attending)
VALUES('Dewayne Johnson',51,True);
SELECT * FROM participants;
