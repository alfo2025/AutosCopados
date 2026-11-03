
--DELETE FROM usuario;
--esto va a vasiar mi tabla



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





DELETE FROM usuario;

DELETE FROM usuario
WHERE id = 1;

DELETE FROM usuario
WHERE nombre = 'Maria';

DELETE FROM usuario
WHERE nombre LIKE 'MAR%';

DELETE FROM usuario
WHERE fechaNacimiento > '2008-01-01';

DELETE FROM usuario
WHERE admin = 0;


DELETE FROM publicacion_auto;

DELETE FROM publicacion_auto
WHERE id = 1;

DELETE FROM publicacion_auto
WHERE modelo = 'Corolla';

DELETE FROM publicacion_auto
WHERE precio < 5000000;

DELETE FROM publicacion_auto
WHERE km > 150000;

DELETE FROM publicacion_auto
WHERE estado = 'Suspendido';

DELETE FROM publicacion_auto
WHERE fechaPublicacion < '2025-01-01';


DELETE FROM marca;

DELETE FROM marca
WHERE id = 1;

DELETE FROM marca
WHERE nombre = 'Toyota';

DELETE FROM marca
WHERE nombre LIKE 'F%';

DELETE FROM marca
WHERE id > 10;


DELETE FROM oferta;

DELETE FROM oferta
WHERE id = 1;

DELETE FROM oferta
WHERE monto < 5000000;

DELETE FROM oferta
WHERE cuotas > 12;

DELETE FROM oferta
WHERE estado = 'Rechazada';

DELETE FROM oferta
WHERE estado = 'Cancelada';

DELETE FROM oferta
WHERE fecha_ofertado < '2025-01-01';


DELETE FROM compra;

DELETE FROM compra
WHERE id = 1;

DELETE FROM compra
WHERE fecha_compra < '2025-01-01';

DELETE FROM compra
WHERE id_metodoPago = 2;

DELETE FROM compra
WHERE lugarEntrega = 'Buenos Aires';

DELETE FROM compra
WHERE id_oferta = 3;


DELETE FROM metodopago;

DELETE FROM metodopago
WHERE id = 1;

DELETE FROM metodopago
WHERE nombre = 'Efectivo';

DELETE FROM metodopago
WHERE nombre LIKE 'Tarjeta%';


DELETE FROM comentario;

DELETE FROM comentario
WHERE id = 1;

DELETE FROM comentario
WHERE id_usuario = 2;

DELETE FROM comentario
WHERE id_pubAuto = 3;

DELETE FROM comentario
WHERE fecha < '2025-01-01';

DELETE FROM comentario
WHERE texto LIKE '%caro%';