-- Exercise 1: DVD Rentals

-- 1. Get a list of all rentals which are out (have not been returned)
SELECT *
FROM rental
WHERE return_date IS NULL;

-- 2. Get a list of all customers who have not returned their rentals
SELECT customer_id, COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL
GROUP BY customer_id;

-- 3. Get a list of all the Action films with Joe Swank

-- Optional View Shortcut:
-- CREATE VIEW action_films_with_joe_swank AS
-- SELECT f.title, f.description
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- JOIN film_category fc ON f.film_id = fc.film_id
-- JOIN category c ON fc.category_id = c.category_id
-- WHERE a.first_name = 'Joe' AND a.last_name = 'Swank' AND c.name = 'Action';

SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE a.first_name = 'Joe' AND a.last_name = 'Swank' AND c.name = 'Action';


-- Exercise 2: Happy Halloween

-- 1. Number of stores and their city and country
SELECT s.store_id, ci.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

-- 2. Total hours of viewing time in each store (excluding unreturned DVDs)
SELECT i.store_id, SUM(f.length) AS total_minutes,
       ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
       ROUND(SUM(f.length) / 1440.0, 2) AS total_days
FROM inventory i
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY i.store_id;

-- 3. All customers in cities where stores are located
SELECT DISTINCT c.*
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city_id IN (
  SELECT ci.city_id
  FROM store s
  JOIN address a ON s.address_id = a.address_id
  JOIN city ci ON a.city_id = ci.city_id
);

-- 4. All customers in countries where stores are located
SELECT DISTINCT c.*
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
  SELECT co.country_id
  FROM store s
  JOIN address a ON s.address_id = a.address_id
  JOIN city ci ON a.city_id = ci.city_id
  JOIN country co ON ci.country_id = co.country_id
);

-- 5. Safe list of all non-horror, non-scary films
SELECT f.title, f.description, f.length,
       ROUND(f.length / 60.0, 2) AS hours,
       ROUND(f.length / 1440.0, 2) AS days
FROM film f
WHERE f.film_id NOT IN (
    SELECT fc.film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.name = 'Horror'
)
AND LOWER(f.title || ' ' || f.description) NOT SIMILAR TO '%(beast|monster|ghost|dead|zombie|undead)%';
