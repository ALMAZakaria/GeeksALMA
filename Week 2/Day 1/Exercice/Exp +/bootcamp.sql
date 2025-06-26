-- 1-Create a database called bootcamp.
CREATE DATABASE bootcamp;
--2-Create a table called students.
CREATE TABLE students();



--Add the following columns:
-- 3-1- id
ALTER TABLE students ADD COLUMN id SERIAL PRIMARY KEY;

-- 3-2- last_name
ALTER TABLE students ADD COLUMN last_name TEXT;

-- 3-2- first_name
ALTER TABLE students ADD COLUMN first_name TEXT;

-- 3-2- birth_date
ALTER TABLE students ADD COLUMN birth_date DATE;

-- Insert

-- 1- Insert the data. The id is auto_incremented. 
INSERT INTO students (first_name, last_name, birth_date)
VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');
-- Id Is auto incremented so it gived me the last value

--SELECT

-- 1-Fetch all of the data from the table student
SELECT * FROM students 

-- 2 Insert  last_name, first_name and birth_date to the students table
INSERT INTO students (first_name, last_name, birth_date)
VALUES
('Zakaria', 'ALMA', '1999-05-12');


-- 3-For the following questions, only fetch the first_names and last_names of the students
SELECT first_name, last_name FROM students;
-- 3-1-Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students WHERE id=2;

-- 3-2-Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name FROM students 
WHERE last_name='Benichou' AND first_name='Marc'


-- 3-3 Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' OR first_name = 'Marc';


-- 3-4 Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a%';


-- 3-5  Students whose first_name starts with the letter a:
SELECT first_name, last_name FROM students
WHERE first_name ILIKE 'a%';


-- 3-6 Students whose first_name ends with the letter 'a':
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a';

-- 3-7  Students whose second-to-last letter of their first_name is 'a' (e.g. “Leah”):
SELECT first_name, last_name FROM students
WHERE first_name ~ '.a.$';


-- 3-8 Students whose id is equal to 1 AND 3 (This returns nothing):
SELECT first_name, last_name FROM students
WHERE id = 1 AND id = 3;

-- 4- Students whose birth_date is on or after 01/01/2000:
SELECT first_name, last_name FROM students
WHERE birth_date >= '2000-01-01';

