--- 1- Retrieve all films with a rating of G or PG, which are not currently rented
SELECT DISTINCT f.film_id, f.title, f.rating
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE f.rating IN ('G', 'PG')
  AND (r.return_date IS NOT NULL OR r.rental_id IS NULL);


-- 2-Create a new table children_waiting_list
CREATE TABLE children_waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    film_id INT REFERENCES film(film_id) ON DELETE CASCADE,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3- Retrieve all films with a rating of G or PG, which are not currently rented
SELECT f.title, COUNT(cwl.waiting_id) AS waiting_count
FROM children_waiting_list cwl
JOIN film f ON cwl.film_id = f.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.title;

-- Insert a Test Data
INSERT INTO children_waiting_list (child_name, film_id) VALUES
('Alice', 1),
('Bob', 1),
('Charlie', 2);