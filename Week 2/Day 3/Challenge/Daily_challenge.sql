--Part I:-

- 1--Create 2 tables : Customer and Customer profile. 
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);



CREATE TABLE Customer_Profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE REFERENCES Customer(id)
);
-- 2-Insert those customers
INSERT INTO Customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- 3- Insert Customer Profiles using subqueries

-- John is logged in
INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES (
    true, 
    (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')
);

-- Jerome is not logged in
INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES (
    false,
    (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
);


-- 4-1- Get first_name of customers who are logged in

SELECT c.first_name
FROM Customer c
JOIN Customer_Profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;


-- 4-2- Get all customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id;


-- 4-3- Get the number of customers that are not logged in
SELECT COUNT(*) AS not_logged_in_count
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;

--Part II: 

-- 1-
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);


-- 2-  Insert books
INSERT INTO Book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- 3. Create the Student table (age <= 15)

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);


-- 4- Insert students
INSERT INTO Student (name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- 5- Create the Book_Lending table

CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 6- Insert book lending records

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES 
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
),
(
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);


-- 7-1 . Select all columns from the Library table
SELECT * FROM Library;


-- 7-2- Select the student name and the book title
SELECT s.name AS student_name, b.title AS book_title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;


-- 7-3- Select the average age of children who borrowed "Alice in Wonderland"

SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- 7-4- Delete a student and observe what happens
DELETE FROM Student WHERE name = 'John';
