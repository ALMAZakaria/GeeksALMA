-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- Find out how many films there are for each rating.
select rating, count(*) as number_of_films from film group by rating;
select * from film;

-- Get a list of all the movies that have a rating of G or PG-13
-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
select * from film where rating in ('G' , 'PG-13') and length < 120 and rental_rate < 3 ORDER BY title;

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
update customer set first_name = 'imane', last_name = 'el ouannane',email = 'imane@email.com' WHERE customer_id = 1;
select * from customer where customer_id = 1;

-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
update address set address = 'casablanca' where address_id = (select address_id from customer where customer_id = 1);
select * from customer c inner join address a on a.address_id = c.address_id where c.customer_id = 1;