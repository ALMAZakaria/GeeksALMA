-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";
/**
CREATE DATABASE "Hollywood"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False; **/
CREATE TABLE actors(
actor_id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL,
age DATE NOT NULL,
number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Zakaria','ALMA','12/05/1999',5)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Nasser','ALMA','12/05/1997',7)

SELECT


SELECT
   *
FROM
   actors
WHERE first_name='Nasser';