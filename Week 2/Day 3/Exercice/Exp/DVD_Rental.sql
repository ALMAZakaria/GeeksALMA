--  Exercise 1: DVD Rental --
-- 1. Get a list of all the languages
SELECT * FROM language;

-- 2. Get all films joined with their languages (title, description, language name)
SELECT film.title, film.description, language.name AS language
FROM film
JOIN language ON film.language_id = language.language_id;

-- 3. Get all languages even if there are no films (LEFT JOIN)
SELECT film.title, film.description, language.name AS language
FROM language
LEFT JOIN film ON film.language_id = language.language_id;

-- 4. Create new table "new_film"
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- 5. Add some new films to new_film
INSERT INTO new_film (name) VALUES ('Inception'), ('Titanic'), ('Matrix');

-- 6. Create table customer_review
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title TEXT NOT NULL,
    score INT CHECK(score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Add 2 movie reviews
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Amazing!', 9, 'Really great movie with mind twists.'),
(2, 2, 'Emotional ride', 8, 'Loved the acting and story.');

-- 8. Delete a film that has a review
DELETE FROM new_film WHERE id = 1;
-- This will automatically delete the associated review in customer_review due to ON DELETE CASCADE

-- PART 2 --
-- 1. Update the language of some films
UPDATE film SET language_id = 2 WHERE film_id IN (1, 2, 3);

-- 2. Foreign keys in customer table
/*-- Usually references store, address, and potentially other tables
This means values inserted must exist in those referenced tables.--*/

-- 3. Drop the customer_review table
DROP TABLE customer_review;
-- May require CASCADE if other tables depend on it

-- 4. Rentals still outstanding (return_date IS NULL)
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- 5. 30 most expensive outstanding rentals
SELECT film.title, rental.rental_date, film.replacement_cost
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;

-- 6. Help friend find movies
-- First film: Sumo wrestler + Penelope Monroe
SELECT DISTINCT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'
AND film.description ILIKE '%sumo%';

-- Second film: Short documentary < 60 mins and rated R
SELECT title FROM film
WHERE length < 60 AND rating = 'R';

-- Third film: Matthew Mahan, paid > $4, returned between 28 July - 1 Aug 2005
SELECT film.title
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND payment.amount > 4
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- Fourth film: Matthew Mahan + "boat" in title/description + expensive replacement cost
SELECT film.title
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC;


--Exercise 2 : DVD Rental --
-- 1. Update the language of some films
UPDATE film SET language_id = 2 WHERE film_id IN (1, 2, 3);

-- 2. Foreign keys in customer table
/--- Usually references store, address, and potentially other tables
This means values inserted must exist in those referenced tables.---/

-- 3. Drop the customer_review table
DROP TABLE customer_review;
-- May require CASCADE if other tables depend on it

-- 4. Rentals still outstanding (return_date IS NULL)
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- 5. 30 most expensive outstanding rentals
SELECT film.title, rental.rental_date, film.replacement_cost
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;

-- 6. Help friend find movies
-- First film: Sumo wrestler + Penelope Monroe
SELECT DISTINCT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'
AND film.description ILIKE '%sumo%';

-- Second film: Short documentary < 60 mins and rated R
SELECT title FROM film
WHERE length < 60 AND rating = 'R';

-- Third film: Matthew Mahan, paid > $4, returned between 28 July - 1 Aug 2005
SELECT film.title
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND payment.amount > 4
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- Fourth film: Matthew Mahan + "boat" in title/description + expensive replacement cost
SELECT film.title
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC;
