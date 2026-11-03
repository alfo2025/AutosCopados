--SELECT nombre as 'Nombre', apellido as 'Apellido', mail as 'Correo'
--FROM usuario;
-- aca les asignamos alias pero es inncecesario porque ya estan con ese nombre en la tabla
use autoscopados;

SELECT *
FROM usuario;


SELECT nombre,apellido
FROM usuario;

SELECT *
FROM usuario
WHERE nombre='Maria';



SELECT *
FROM usuario
WHERE nombre LIKE 'Mar%';
-- aca me va a morstrar las chicas que se llaman maria marcela martina etccc

SELECT *
FROM usuario
ORDER BY `fechaNacimiento` ASC;

SELECT *
FROM usuario
ORDER BY nombre ASC;


SELECT *
FROM usuario
WHERE nombre LIKE 'H%';







SELECT *
FROM publicacion_auto;

SELECT *
FROM publicacion_auto
ORDER BY fechaPublicacion ASC;


SELECT *
FROM publicacion_auto
ORDER BY precio ASC;


SELECT P.modelo AS 'Modelo', P.fechaPublicacion as 'Fecha de Publicacion', P.km, M.nombre AS 'Marca'
FROM publicacion_auto P
INNER JOIN marca M on M.id = P.id_marca
WHERE M.nombre = 'Toyota';

SELECT U.nombre AS 'Vendedor', P.modelo AS 'Modelo', P.fechaPublicacion AS 'Fecha de Publicacion', P.estado AS 'Estado del Producto'
FROM publicacion_auto P
INNER JOIN usuario U on U.id = P.id_vendedor
WHERE `fechaPublicacion` > '2020-01-01';

SELECT *
FROM publicacion_auto
WHERE fechaPublicacion BETWEEN '2015-01-01' AND '2020-01-01';

SELECT M.nombre AS 'Marca', COUNT(P.id) AS 'Publicaciones de autos'
FROM marca M
INNER JOIN publicacion_auto P on P.id_marca = M.id
GROUP BY P.id_marca
ORDER BY COUNT(P.id)

SELECT P.modelo AS 'Publicacion', U.nombre AS 'Vendedor', COUNT(O.id) AS 'Cantidad de ofertas'
FROM publicacion_auto P
INNER JOIN usuario U on U.id = P.id_vendedor
INNER JOIN oferta O ON O.id_pubAuto = p.id
GROUP BY P.id
ORDER BY COUNT(O.id)

SELECT P.modelo AS 'MODELO DEL AUTO', U.nombre 'COMPRADOR', O.monto AS 'MONTO', O.cuotas AS 'CUOTAS', M.nombre AS 'METODO DE PAGO', C.fecha_compra AS 'DIA COMPRADO'
from compra C
INNER JOIN oferta O ON C.id_oferta = O.id
INNER JOIN usuario U ON O.id_comprador = U.id
INNER JOIN metodopago M ON C.id_metodoPago = M.id
INNER JOIN publicacion_auto P ON O.id_pubAuto = P.id
ORDER BY o.monto