SELECT *
FROM usuario;

SELECT *
FROM usuario
ORDER BY edad ASC;

SELECT *
FROM usuario
ORDER BY edad DESC;

SELECT *
FROM usuario
WHERE edad > 18;

SELECT *
FROM usuario
WHERE edad < 30;


SELECT *
FROM usuario
ORDER BY nombre ASC;



SELECT *
FROM usuario
WHERE edad > 18
ORDER BY edad ASC;



SELECT *
FROM usuario
WHERE nombre LIKE 'A%';









SELECT *
FROM auto;

SELECT *
FROM auto
ORDER BY anio ASC;


SELECT *
FROM auto
WHERE marca = 'Toyota';

SELECT *
FROM auto
WHERE anio > 2020;

SELECT *
FROM auto
WHERE anio BETWEEN 2015 AND 2020;

SELECT *
FROM auto
ORDER BY marca ASC;

SELECT marca, anio
FROM auto;

SELECT *
FROM auto
WHERE marca = 'Ford'
ORDER BY anio DESC;




SELECT *
FROM compra;

SELECT *
FROM compra
ORDER BY precio ASC;

SELECT *
FROM compra
WHERE precio > 10000000;

SELECT *
FROM compra
WHERE precio BETWEEN 5000000 AND 15000000;

SELECT *
FROM compra
ORDER BY fecha ASC;

SELECT precio, fecha
FROM compra;


