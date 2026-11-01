-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-11-2026 a las 02:06:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE `autoscopados`;

USE `autoscopados`;

CREATE TABLE `comentario` (
  `id` int(11) NOT NULL,
  `id_pubAuto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `texto` varchar(200) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id` int(11) NOT NULL,
  `id_oferta` int(11) NOT NULL,
  `fecha_compra` date NOT NULL,
  `id_metodoPago` int(11) NOT NULL,
  `lugarEntrega` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodopago`
--

CREATE TABLE `metodopago` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta`
--

CREATE TABLE `oferta` (
  `id` int(11) NOT NULL,
  `id_pubAuto` int(11) NOT NULL,
  `id_comprador` int(11) NOT NULL,
  `monto` float NOT NULL,
  `fecha_ofertado` date NOT NULL,
  `estado` enum('Enviada','Aceptada','Rechazada','Cancelada') NOT NULL,
  `cuotas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion_auto`
--

CREATE TABLE `publicacion_auto` (
  `id` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL,
  `modelo` varchar(30) NOT NULL,
  `fechaPublicacion` date NOT NULL,
  `km` float NOT NULL,
  `combustible` enum('Nafta','Nafta/GNC','Diesel','Hibrido') NOT NULL,
  `precio` float NOT NULL,
  `estado` enum('Disponible','Suspendido','Oculto','Reservado','Comprado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `clave` int(20) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `dni` int(11) NOT NULL,
  `fotoDNIF` varchar(300) NOT NULL,
  `fotoDNIR` varchar(300) NOT NULL,
  `fotoUsuario` varchar(300) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_pubAuto_comentario` (`id_pubAuto`),
  ADD KEY `fk_id_usuario_comentario` (`id_usuario`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_oferta_compra` (`id_oferta`),
  ADD KEY `fk_id_metodoPago_compra` (`id_metodoPago`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `metodopago`
--
ALTER TABLE `metodopago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oferta`
--
ALTER TABLE `oferta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_pubAuto_oferta` (`id_pubAuto`),
  ADD KEY `fk_id_comprador_oferta` (`id_comprador`);

--
-- Indices de la tabla `publicacion_auto`
--
ALTER TABLE `publicacion_auto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_marca_publicacion` (`id_marca`),
  ADD KEY `fk_id_vendedor_publicacion` (`id_vendedor`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `un_dni_usuario` (`dni`),
  ADD UNIQUE KEY `un_mail_usuario` (`mail`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `metodopago`
--
ALTER TABLE `metodopago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `oferta`
--
ALTER TABLE `oferta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion_auto`
--
ALTER TABLE `publicacion_auto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `fk_id_pubAuto_comentario` FOREIGN KEY (`id_pubAuto`) REFERENCES `publicacion_auto` (`id`),
  ADD CONSTRAINT `fk_id_usuario_comentario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `fk_id_metodoPago_compra` FOREIGN KEY (`id_metodoPago`) REFERENCES `metodopago` (`id`),
  ADD CONSTRAINT `fk_id_oferta_compra` FOREIGN KEY (`id_oferta`) REFERENCES `oferta` (`id`);

--
-- Filtros para la tabla `oferta`
--
ALTER TABLE `oferta`
  ADD CONSTRAINT `fk_id_comprador_oferta` FOREIGN KEY (`id_comprador`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `fk_id_pubAuto_oferta` FOREIGN KEY (`id_pubAuto`) REFERENCES `publicacion_auto` (`id`);

--
-- Filtros para la tabla `publicacion_auto`
--
ALTER TABLE `publicacion_auto`
  ADD CONSTRAINT `fk_id_marca_publicacion` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id`),
  ADD CONSTRAINT `fk_id_vendedor_publicacion` FOREIGN KEY (`id_vendedor`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
