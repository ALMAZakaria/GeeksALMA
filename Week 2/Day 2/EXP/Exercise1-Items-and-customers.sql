-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TABLE items(
 item_id SERIAL PRIMARY KEY,
 item_name VARCHAR (50) NOT NULL,
 price INTEGER NOT NULL
);

CREATE TABLE customers(
 customer_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL
);

insert into items (item_name , price) VALUES ('Small Desk' , 100);
insert into items (item_name , price) VALUES ('Large desk' , 300);
insert into items (item_name , price) VALUES ('fan' , 80);

insert into customers (first_name , last_name) VALUES ('Greg' , 'Jones');
insert into customers (first_name , last_name) VALUES ('Sandra' , 'Jones');
insert into customers (first_name , last_name) VALUES ('Scott' , 'Scott');
insert into customers (first_name , last_name) VALUES ('Trevor' , 'Green');
insert into customers (first_name , last_name) VALUES ('Melanie' , 'Johnson');

select * from customers;
select * from items;

-- All items, ordered by price (lowest to highest).
select * from items order by price ASC;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
select * from items where price >= 80 order by price DESC;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
select * from customers order by first_name ASC LIMIT 3;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
select last_name from customers order by last_name DESC;
