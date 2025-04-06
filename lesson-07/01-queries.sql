# exercises 2
## A
SELECT * FROM languages;

## B
SELECT * FROM collections LIMIT 20;

## C
SELECT * FROM books;
SELECT books.name FROM books WHERE publishedYear > 2000;

## D
SELECT books.name FROM books WHERE description LIKE '%tình yêu%';

## E
SELECT * FROM users ORDER BY id DESC;
