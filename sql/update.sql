UPDATE usuario
SET mail = 'nuevo@gmail.com'
WHERE id = 1;

UPDATE usuario
SET edad = 25
WHERE id = 2;

UPDATE usuario
SET nombre = 'Juan'
WHERE id = 3;


UPDATE auto
SET marca = 'Toyota'
WHERE id = 1;

UPDATE auto
SET anio = 2024
WHERE id = 2;


UPDATE compra
SET precio = 15000000
WHERE id = 1;

UPDATE compra
SET fecha = '2026-11-02'
WHERE id = 2;



UPDATE usuario
SET mail = 'alfonso@gmail.com'
WHERE id = 1;

UPDATE usuario
SET apellido = 'Colapinto'
WHERE id = 2;

UPDATE usuario
SET nombre = 'Juan'
WHERE id = 3;

UPDATE usuario
SET fechaNacimiento = '2000-05-15'
WHERE id = 4;

UPDATE usuario
SET admin = 1
WHERE id = 5;


UPDATE publicacion_auto
SET precio = 15000000
WHERE id = 1;

UPDATE publicacion_auto
SET modelo = 'Corolla'
WHERE id = 2;

UPDATE publicacion_auto
SET km = 80000
WHERE id = 3;

UPDATE publicacion_auto
SET combustible = 'Nafta'
WHERE id = 4;

UPDATE publicacion_auto
SET estado = 'Reservado'
WHERE id = 5;

UPDATE publicacion_auto
SET precio = 20000000
WHERE modelo = 'Hilux';


UPDATE marca
SET nombre = 'Toyota'
WHERE id = 1;

UPDATE marca
SET nombre = 'Ford'
WHERE id = 2;

UPDATE marca
SET nombre = 'Chevrolet'
WHERE id = 3;


UPDATE oferta
SET monto = 12000000
WHERE id = 1;

UPDATE oferta
SET cuotas = 12
WHERE id = 2;

UPDATE oferta
SET estado = 'Aceptada'
WHERE id = 3;

UPDATE oferta
SET estado = 'Rechazada'
WHERE id = 4;

UPDATE oferta
SET fecha_ofertado = '2026-11-02'
WHERE id = 5;


UPDATE compra
SET fecha_compra = '2026-11-02'
WHERE id = 1;

UPDATE compra
SET lugarEntrega = 'Buenos Aires'
WHERE id = 2;

UPDATE compra
SET id_metodoPago = 1
WHERE id = 3;

UPDATE compra
SET lugarEntrega = 'Neuquen'
WHERE id = 4;


UPDATE metodopago
SET nombre = 'Efectivo'
WHERE id = 1;

UPDATE metodopago
SET nombre = 'Transferencia'
WHERE id = 2;

UPDATE metodopago
SET nombre = 'Tarjeta'
WHERE id = 3;


UPDATE comentario
SET texto = 'Muy buen auto'
WHERE id = 1;

UPDATE comentario
SET texto = 'El precio es muy alto'
WHERE id = 2;

UPDATE comentario
SET fecha = '2026-11-02'
WHERE id = 3;

UPDATE comentario
SET texto = 'Estoy interesado'
WHERE id = 4;

UPDATE comentario
SET fecha = '2026-10-15'
WHERE id = 5;