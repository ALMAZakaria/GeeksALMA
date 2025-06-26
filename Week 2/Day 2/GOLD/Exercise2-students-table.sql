-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

select * from students

-- Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. 
-- Update both their birth_dates to 02/11/1998.
update students set birth_date = '02/11/1998' where first_name = 'Lea' and last_name = 'Benichou';
update students set birth_date = '02/11/1998' where first_name = 'Marc' and last_name = 'Benichou';

-- Change the last_name of David from ‘Grez’ to ‘Guez’
update students set last_name = 'Guez' where first_name = 'David' and last_name = 'Grez';

-- Delete the student named ‘Lea Benichou’ from the table.
delete from students where first_name = 'Lea' and last_name = 'Benichou';

-- Count how many students are in the table.
select count(*) as total_students from students;

-- Count how many students were born after 1/01/2000.
select count(*) as total_students_born_after_2000 from students where birth_date > '01/01/2000';

-- Add a column to the student table called math_grade.
alter table students add column math_grade INTEGER;

-- Add 80 to the student which id is 1.
update students set math_grade = 80 where student_id = 1;

-- Add 90 to the students which have ids of 2 or 4.
update students set math_grade = 90 where student_id in (2 , 4);

-- Add 40 to the student which id is 6
update students set math_grade = 40 where student_id = 6;

-- Count how many students have a grade bigger than 83
select count(*) as bigger_than_83 from students where math_grade > 83;

-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. 
-- Give him a grade of 70.
select birth_date from students where first_name = 'Omer' and last_name = 'Simpson' limit 1;
insert into students (first_name, last_name, birth_date, math_grade) values ('Omer', 'Simpson', '1980-03-10', 70);

-- Bonus: Count how many grades each student has.
select first_name, last_name, count(math_grade) as total_grade from students group by first_name, last_name;

-- Find the sum of all the students grades.
select sum(math_grade) as total_grades from students;


