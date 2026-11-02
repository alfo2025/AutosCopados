DELETE FROM usuario
WHERE id = 1;

DELETE FROM usuario
WHERE id = 2;

DELETE FROM usuario
WHERE edad < 18;


DELETE FROM auto
WHERE id = 1;

DELETE FROM auto
WHERE marca = 'Toyota';

DELETE FROM auto
WHERE anio < 2010;


DELETE FROM compra
WHERE id = 1;

DELETE FROM compra
WHERE precio < 5000000;

DELETE FROM compra
WHERE fecha < '2025-01-01';