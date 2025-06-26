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

select * from customers;
select * from items;

create table purchases (
    purchase_id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(customer_id),
    item_id INTEGER REFERENCES items(item_id),
    quantity_purchased INTEGER NOT NULL
);


-- Insert purchases for the customers
insert into purchases (customer_id, item_id, quantity_purchased) 
values (
    (select customer_id from customers where first_name = 'Scott' and last_name = 'Scott'),
    (select item_id from items where item_name = 'fan'),
    1
);

insert into purchases (customer_id, item_id, quantity_purchased) 
values (
    (select customer_id from customers where first_name = 'Melanie' and last_name = 'Johnson'),
    (select item_id from items where item_name = 'Large desk'),
    10
);

insert into purchases (customer_id, item_id, quantity_purchased) 
values (
    (select customer_id from customers where first_name = 'Greg' and last_name = 'Jones'),
    (select item_id from items where item_name = 'Small Desk'),
    2
);

-- All purchases. Is this information useful to us?
select * from purchases;

-- All purchases, joining with the customers table.
select p.purchase_id, c.first_name, c.last_name, p.item_id, p.quantity_purchased from purchases p
join customers c on p.customer_id = c.customer_id;

-- Purchases of the customer with the ID equal to 5.
select * from purchases where customer_id = 5;

-- Purchases for a large desk AND a small desk
select * from purchases where item_id in ( select item_id from items where item_name in ('Large desk', 'Small Desk'));

-- Use SQL to show all the customers who have made a purchase.
select c.first_name, c.last_name, i.item_name from purchases p
inner join customers c on p.customer_id = c.customer_id
inner join items i on p.item_id = i.item_id;

-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
-- it works bc its defaults to NULL
insert into purchases (customer_id, quantity_purchased) values (1, 2);