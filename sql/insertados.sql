-- Active: 1790884592847@@127.0.0.1@3306@autoscopados
USE autoscopados;

INSERT INTO `usuario` (nombre, apellido, mail, clave, fechaNacimiento, dni, fotoDNIF, fotoDNIR, fotoUsuario, admin)
VALUES  ('Ramon','Suares','ramonesxd@gmail.com', 'hola12345', '2003-09-05 14:30:00', 12345678, '.img/hola.img', '.img/hola.img', '.img/hla.img', false),
        ('Julio','Peres','julilo@gmail.com', 'hola56789', '2004-03-05 14:30:00', 23423328, '.img/hola.img', '.img/hola.img', '.img/hoa.img', false),
        ('Noel','Andrones','nonoan@gmail.com', 'tetera45', '2005-03-02 14:30:00', 34325678, '.img/hola.img', '.img/hola.img', '.img/hla.img', false),
        ('Pedro','Casco','hola@gmail.com', 'hoyos12', '2002-09-02 14:30:00', 12346534, '.img/hola.img', '.img/hola.img', '.img/hol.img', false),
        ('Jorje','Miranda','jorje@gmail.com', 'sunflower5', '2003-09-02 14:30:00', 67456578, '.img/hola.img', '.img/hola.img', '.img/holasss.img', true),
        ('Hernan','Mendes','elpillohernan@gmail.com', 'theamazing5', '2001-02-05 14:30:00', 13657845, '.img/hola.img', '.img/hola.img', '.img/holasss.img', false);
        
INSERT INTO `marca` (nombre)
VALUES  ("Toyota"),
        ("Steallantis"),
        ("Volkswagen"),
        ("Ford"),
        ("Chevrolet"),
        ("Nissan"),
        ("Mercedes-Benz");

INSERT INTO `metodopago` (nombre)
VALUES  ("MercadoPago"),
        ("Paypal"),
        ("Naranja X"),
        ("Personal Pay"),
        ("Uala"),
        ("Cuenta DNI"),
        ("Brubank");

INSERT INTO `publicacion_auto` (id_vendedor, id_marca, modelo, fechaPublicacion, foto, km, combustible, precio, estado)
VALUES  (1, 1, 'Corolla XEI', '2026-01-10', 'corolla.jpg', 45000, 'Nafta', 18500000, 'Disponible'),
        (2, 1, 'Hilux SRV', '2013-01-15', 'hilux.jpg', 35000, 'Diesel', 32500000, 'Reservado'),
        (3, 2, 'Cronos Precision', '2026-01-20', 'cronos.jpg', 32000, 'Nafta', 15800000, 'Disponible'),
        (4, 2, 'Peugeot 208', '2012-02-01', '208.jpg', 28000, 'Nafta', 17200000, 'Disponible'),
        (5, 3, 'Gol Trend', '2018-02-05', 'gol.jpg', 78000, 'Nafta', 10500000, 'Disponible'),
        (1, 3, 'Amarok Highline', '2026-02-10', 'amarok.jpg', 46000, 'Diesel', 29500000, 'Reservado'),
        (2, 4, 'Ranger XLT', '2016-02-15', 'ranger.jpg', 56000, 'Diesel', 28900000, 'Disponible'),
        (3, 5, 'Onix LTZ', '2016-02-20', 'onix.jpg', 51000, 'Nafta', 13900000, 'Suspendido'),
        (4, 6, 'Kicks Exclusive', '2017-03-01', 'kicks.jpg', 19000, 'Nafta', 23500000, 'Disponible'),
        (5, 7, 'Clase A 200', '2011-03-05', 'clase_a.jpg', 30000, 'Nafta', 38500000, 'Oculto');
--- 4 11 23
INSERT INTO `oferta` (id_pubAuto, id_comprador, monto, fecha_ofertado, estado, cuotas)
VALUES  (1, 2, 17500000, '2026-04-01', 'Enviada', 12),
        (1, 3, 1450000, '2025-09-01', 'Enviada', 12),
        (1, 5, 1450000, '2025-09-01', 'Enviada', 12),

        (2, 3, 30000000, '2026-04-02', 'Aceptada', 24),
        (2, 4, 22030000, '2026-02-01', 'Rechazada', 14),
        
        (3, 1, 15000000, '2026-04-03', 'Rechazada', 12),
        (3, 2, 15000000, '2026-04-03', 'Rechazada', 12),
        
        (4, 1, 16500000, '2026-04-05', 'Enviada', 18),
        (4, 5, 16500000, '2026-04-05', 'Enviada', 18),
        (4, 2, 16500000, '2026-04-05', 'Enviada', 18),
        
        (5, 2, 10000000, '2026-04-06', 'Aceptada', 12),
        (5, 3, 10000000, '2026-04-06', 'Rechazada', 12),
        
        (6, 2, 28000000, '2026-04-08', 'Cancelada', 24),
        (6, 4, 28000000, '2025-04-07', 'Rechazada', 24),
        (6, 3, 28000000, '2025-03-03', 'Rechazada', 24),
        (6, 5, 28000000, '2026-03-01', 'Cancelada', 24),
        
        (7, 1, 27000000, '2026-04-10', 'Enviada', 36),
        (7, 3, 27000000, '2026-04-10', 'Rechazada', 36),
        (7, 5, 27000000, '2026-04-10', 'Enviada', 36),
        (7, 4, 27000000, '2026-04-10', 'Enviada', 36),
        
        (8, 1, 13000000, '2026-04-12', 'Rechazada', 12),
        (8, 5, 13000000, '2025-03-12', 'Rechazada', 12),
        
        (9, 2, 22000000, '2026-04-15', 'Aceptada', 18),
        (9, 5, 22000000, '2022-04-15', 'Rechazada', 18),
        
        (10, 3, 36000000, '2026-04-18', 'Enviada', 24);

INSERT INTO `compra` (id_oferta, fecha_compra, id_metodoPago, lugarEntrega)
VALUES  (4, '2026-04-05', 1, 'Quilmes, Buenos Aires'),
        (11, '2026-04-09', 3, 'Avellaneda, Buenos Aires'),
        (23, '2026-04-18', 6, 'La Plata, Buenos Aires');

INSERT INTO `comentario`
(id_pubAuto, id_usuario, texto, fecha)
VALUES
(1, 2, 'Hola, ¿el auto tiene todos los servicios realizados?', '2026-04-02'),
(2, 3, '¿Aceptarias una oferta menor al precio publicado?', '2026-04-03'),
(3, 1, 'Ta horrible', '2026-04-04'),
(4, 1, 'Me interesa, ¿todavia se encuentra disponible?', '2026-04-06'),
(5, 2, 'Se ve rayado', '2026-04-07'),
(6, 3, '¿Cuanto tiempo de uso tiene la camioneta?', '2026-04-09'),
(7, 1, 'Cuantos niños entran en el maletero', '2026-04-11'),
(8, 1, 'Es un robo!!!!!, que asco ver esta gente', '2026-04-13'),
(9, 2, 'Gente creanme que existe mejores cosas q esto', '2026-04-16'),
(10, 3, '¿Tiene algun tipo de garantia?', '2026-04-19');
