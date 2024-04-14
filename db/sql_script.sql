-- SQLite

-- 1. READ
SELECT * FROM items
SELECT id, name FROM items WHERE id = 4
SELECT id, name FROM items WHERE name LIKE '%vy%'

-- 2. Create
INSERT INTO items (name, description, img)
VALUES ('Item1', 'Description of Item1', 'image.png');

-- 3. Update
UPDATE items
SET name = 'NewName', description = 'NewDescription', img = 'image222.png'
WHERE id = 5;

-- 4. DELETE
DELETE FROM items WHERE id = 5;
DELETE FROM items WHERE name LIKE '%Item%';

