/*Hello SQL!

Return a table with a single column named Greeting with the phrase 'hello world!'*/




/*SQL*/





-- write your select statement to return hello world



CREATE TABLE Greetings (
    "Greeting" VARCHAR(255)
);

INSERT INTO Greetings ("Greeting") 
VALUES ('hello world!');

SELECT "Greeting" FROM Greetings;

