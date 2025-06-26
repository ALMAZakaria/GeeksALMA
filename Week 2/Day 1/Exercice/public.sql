CREATE DATABASE public;
CREATE TABLE items(
	item_id SERIAL PRIMARY KEY
);
CREATE TABLE customers(
	customer_id SERIAL PRIMARY KEY
);
/**-- ALTER TABLE items TO ADD 2 COLUMNS 1---**/
ALTER TABLE items ADD COLUMN name TEXT; 
ALTER TABLE items ADD COLUMN price INT;

/**-- INSERT DATA TO TABLE items---**/
INSERT INTO items (item_id, name, price) VALUES
(1,'Small Desk',100),
(2,'Large desk',300),
(3,'Fan',80);

/**-- ALTER TABLE customers TO ADD 2 COLUMNS 1---**/
ALTER TABLE customers ADD COLUMN first_name TEXT; 
ALTER TABLE customers ADD COLUMN last_name TEXT;

/**-- INSERT DATA TO TABLE items---**/
INSERT INTO customers (first_name, last_name) VALUES
('Greg','Jones'),
('Sandra','Jones'),
('Scott','Scott'),
('Trevor','Green'),
('Melanie ','Johnson');

/** 3-fetch the following data from the database:---**/ 
/** 3-1-All the items.---**/
SELECT * FROM items;

/** 3-2-All the items with a price above 80 (80 not included).---**/
SELECT * FROM items WHERE price>80;

/** 3-3-All the items with a price below 300. (300 included)---**/
SELECT * FROM items WHERE price<300;

/** 3-4-All customers whose last name is ‘Smith’ (What will be your outcome?).---**/
SELECT * FROM customers WHERE last_name='Smith';
-- The Answer is: It will show an emty table because there is no customers with the last name ‘Smith’

/** 3-5-All customers whose last name is ‘Jones’.---**/
SELECT * FROM customers WHERE last_name='Jones';

/** 3-6-All customers whose firstname is not ‘Scott’.---**/
SELECT * FROM customers WHERE first_name !='Scott';

