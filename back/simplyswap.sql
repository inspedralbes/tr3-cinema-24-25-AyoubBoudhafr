-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-03-2025 a las 14:56:08
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `simplyswap`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inmueble`
--

CREATE TABLE `inmueble` (
  `id` bigint(20) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `descripcion_short` varchar(100) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `fecha_publicacion` datetime(6) NOT NULL,
  `pais` varchar(255) NOT NULL,
  `precio` double NOT NULL,
  `usuario_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inmueble`
--

INSERT INTO `inmueble` (`id`, `ciudad`, `descripcion`, `descripcion_short`, `direccion`, `fecha_publicacion`, `pais`, `precio`, `usuario_id`) VALUES
(1, 'Barcelona', 'Apartamento de lujo con vista al mar', 'Hermoso apartamento', 'Av. Principal 123', '2025-03-21 12:26:23.000000', 'España', 650000, 1),
(2, 'Madrid', 'Casa con amplio jardín y piscina', 'Casa acogedora', 'Av. Diagonal 456', '2025-03-21 12:26:23.000000', 'España', 199000, 1),
(3, 'Madrid', 'Casa con amplio jardín y piscina', 'JUAN', 'Av. Diagonal 456', '2025-03-21 12:26:23.000000', 'España', 199000, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inmueble_imagenes`
--

CREATE TABLE `inmueble_imagenes` (
  `inmueble_id` bigint(20) NOT NULL,
  `imagen_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inmueble_imagenes`
--

INSERT INTO `inmueble_imagenes` (`inmueble_id`, `imagen_url`) VALUES
(1, '/assets/hermosoApartamento.webp'),
(1, '/assets/hermosoApartamento2.webp'),
(1, '/assets/hermosoApartamento3.webp'),
(1, '/assets/hermosoApartamento4.webp'),
(1, '/assets/hermosoApartamento5.webp'),
(2, '/assets/casaAcojedora.webp'),
(2, '/assets/casaAcojedora2.webp'),
(2, '/assets/casaAcojedora3.webp'),
(2, '/assets/casaAcojedora4.webp'),
(2, '/assets/casaAcojedora5.webp'),
(2, '/assets/casaAcojedora6.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `id` bigint(20) NOT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `entrega_disponible` bit(1) NOT NULL,
  `fecha_publicacion` datetime(6) DEFAULT NULL,
  `fecha_publicacion_producto` datetime(6) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` double NOT NULL,
  `usuario_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`id`, `autor`, `descripcion`, `entrega_disponible`, `fecha_publicacion`, `fecha_publicacion_producto`, `nombre`, `precio`, `usuario_id`) VALUES
(1, 'Juan Lopez', 'Libro clásico de Antoine de Saint-Exupéry', b'1', '1943-04-06 00:00:00.000000', '2025-03-21 12:26:23.000000', 'El principito', 15.99, 1),
(2, 'Jose Fernandez', 'Novela distópica de George Orwell', b'0', '1949-06-08 00:00:00.000000', '2025-03-21 12:26:23.000000', '1984', 25.5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro_imagenes`
--

CREATE TABLE `libro_imagenes` (
  `libro_id` bigint(20) NOT NULL,
  `imagen_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libro_imagenes`
--

INSERT INTO `libro_imagenes` (`libro_id`, `imagen_url`) VALUES
(1, '/assets/principito.webp'),
(1, '/assets/principito2.webp'),
(2, '/assets/1984.webp'),
(2, '/assets/1984_2.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motor`
--

CREATE TABLE `motor` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_publicacion` datetime(6) NOT NULL,
  `kilometraje` int(11) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `precio` double NOT NULL,
  `usuario_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `motor`
--

INSERT INTO `motor` (`id`, `descripcion`, `fecha_publicacion`, `kilometraje`, `marca`, `modelo`, `precio`, `usuario_id`) VALUES
(1, 'Toyota Corolla en excelente estado', '2025-03-21 12:26:23.000000', 50000, 'Toyota', 'Corolla', 12000, 1),
(2, 'Honda Civic 2020, poco uso', '2025-03-21 12:26:23.000000', 30000, 'Honda', 'Civic', 15000, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motor_imagenes`
--

CREATE TABLE `motor_imagenes` (
  `motor_id` bigint(20) NOT NULL,
  `imagen_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `motor_imagenes`
--

INSERT INTO `motor_imagenes` (`motor_id`, `imagen_url`) VALUES
(1, '/assets/toyota_corolla.webp'),
(1, '/assets/toyota_corolla2.webp'),
(1, '/assets/toyota_corolla3.webp'),
(1, '/assets/toyota_corolla4.webp'),
(1, '/assets/toyota_corolla5.webp'),
(1, '/assets/toyota_corolla6.webp'),
(2, '/assets/honda_civic.webp'),
(2, '/assets/honda_civic2.webp'),
(2, '/assets/honda_civic3.webp'),
(2, '/assets/honda_civic4.webp'),
(2, '/assets/honda_civic5.webp'),
(2, '/assets/honda_civic6.webp'),
(2, '/assets/honda_civic7.webp'),
(2, '/assets/honda_civic8.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio` double NOT NULL,
  `usuario_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_imagenes`
--

CREATE TABLE `producto_imagenes` (
  `producto_id` bigint(20) NOT NULL,
  `imagen_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto_imagenes`
--

INSERT INTO `producto_imagenes` (`producto_id`, `imagen_url`) VALUES
(1, '/assets/iphone13_1.webp'),
(1, '/assets/iphone13_2.webp'),
(1, '/assets/iphone13_3.webp'),
(1, '/assets/iphone13_4.webp'),
(1, '/assets/iphone13_5.webp'),
(1, '/assets/iphone13_6.webp'),
(2, '/assets/samsung_s21_1.webp'),
(2, '/assets/samsung_s21_2.webp'),
(2, '/assets/samsung_s21_3.webp'),
(2, '/assets/samsung_s21_4.webp'),
(3, '/assets/macbookpro_1.webp'),
(3, '/assets/macbookpro_2.webp'),
(4, '/assets/ipad4_1.webp'),
(4, '/assets/ipad4_2.webp'),
(4, '/assets/ipad4_3.webp'),
(4, '/assets/ipad4_4.webp'),
(4, '/assets/ipad4_5.webp'),
(4, '/assets/ipad4_6.webp'),
(4, '/assets/ipad4_7.webp'),
(4, '/assets/ipad4_8.webp'),
(4, '/assets/ipad4_9.webp'),
(5, '/assets/googlepixel6.webp'),
(5, '/assets/googlepixel6_2.webp'),
(5, '/assets/googlepixel6_3.webp'),
(5, '/assets/googlepixel6.webp'),
(6, '/assets/ps5_1.webp'),
(6, '/assets/ps5_2.webp'),
(6, '/assets/ps5_3.webp'),
(7, '/assets/xboxseriesx.webp'),
(7, '/assets/xboxseriesx_2.webp'),
(7, '/assets/xboxseriesx_3.webp'),
(8, '/assets/dellxps13.webp'),
(8, '/assets/dellxps13_2.webp'),
(8, '/assets/dellxps13_3.webp'),
(8, '/assets/dellxps13_4.webp'),
(9, '/assets/applewatch7.webp'),
(9, '/assets/applewatch7_2.webp'),
(9, '/assets/applewatch7_3.webp'),
(9, '/assets/applewatch7_4.webp'),
(10, '/assets/airpodspro.webp'),
(10, '/assets/airpodspro_2.webp'),
(10, '/assets/airpodspro_3.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologia`
--

CREATE TABLE `tecnologia` (
  `id` bigint(20) NOT NULL,
  `categoria` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `envio_disponible` bit(1) NOT NULL,
  `fecha_publicacion` datetime(6) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` double NOT NULL,
  `usuario_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tecnologia`
--

INSERT INTO `tecnologia` (`id`, `categoria`, `descripcion`, `envio_disponible`, `fecha_publicacion`, `nombre`, `precio`, `usuario_id`) VALUES
(1, 1, 'iPhone 13 en excelente estado', b'1', '2025-03-21 12:26:23.000000', 'iPhone 13', 799, 1),
(2, 1, 'Samsung Galaxy S21 con caja y accesorios', b'0', '2025-03-21 12:26:23.000000', 'Samsung Galaxy S21', 699, 1),
(3, 1, 'MacBook Pro con chip M1 Pro', b'1', '2025-03-21 12:26:23.000000', 'MacBook Pro 16', 2000, 1),
(4, 1, 'iPad Air 4ta generación con chip A14 Bionic', b'1', '2025-03-21 12:26:23.000000', 'iPad Air 4', 599, 1),
(5, 1, 'Google Pixel 6 con cámara de 50MP', b'0', '2025-03-21 12:26:23.000000', 'Google Pixel 6', 599, 1),
(6, 1, 'PlayStation 5 con soporte para 4K y ray tracing', b'1', '2025-03-21 12:26:23.000000', 'Sony PlayStation 5', 499, 1),
(7, 1, 'Xbox Series X con SSD ultrarrápido', b'1', '2025-03-21 12:26:23.000000', 'Xbox Series X', 499, 1),
(8, 1, 'Ultrabook Dell XPS 13 con pantalla táctil', b'1', '2025-03-21 12:26:23.000000', 'Dell XPS 13', 1299, 1),
(9, 1, 'Apple Watch con pantalla Retina Always-On', b'0', '2025-03-21 12:26:23.000000', 'Apple Watch Series 7', 399, 1),
(10, 1, 'Auriculares inalámbricos con cancelación de ruido', b'1', '2025-03-21 12:26:23.000000', 'AirPods Pro', 249, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transacciones`
--

CREATE TABLE `transacciones` (
  `id` bigint(20) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `fecha_transaccion` datetime(6) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio_pagado` double NOT NULL,
  `producto_id` bigint(20) NOT NULL,
  `comprador_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `transacciones`
--

INSERT INTO `transacciones` (`id`, `categoria`, `estado`, `fecha_transaccion`, `nombre`, `precio_pagado`, `producto_id`, `comprador_id`) VALUES
(1, 'Tecnología', 'COMPLETADA', '2025-03-22 15:26:41.000000', 'Laptop Gamer', 150.99, 456, 1),
(2, 'Tecnología', 'COMPLETADA', '2025-03-22 15:27:07.000000', 'Laptop Gamer', 150.99, 456, 1),
(3, 'Tecnologia', 'Preparando pedido', '2025-03-22 15:30:29.000000', 'MacBook Pro 16', 2000, 2, 2),
(4, 'Tecnologia', 'Preparando pedido', '2025-03-22 15:30:54.000000', 'MacBook Pro 16', 2000, 2, 2),
(5, 'Tecnologia', 'Preparando pedido', '2025-03-22 15:32:51.000000', 'MacBook Pro 16', 2000, 2, 2),
(6, 'Tecnologia', 'Preparando pedido', '2025-03-22 15:33:38.000000', 'MacBook Pro 16', 2000, 2, 2),
(7, 'Tecnologia', 'Preparando pedido', '2025-03-22 15:42:34.000000', 'Samsung Galaxy S21', 699, 2, 2),
(8, 'Tecnologia', 'Preparando pedido', '2025-03-23 01:42:01.000000', 'Samsung Galaxy S21', 699, 2, 2),
(9, 'libro', 'Preparando pedido', '2025-03-23 01:47:42.000000', '1984', 25.5, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `telefono` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `ciudad`, `email`, `foto_perfil`, `nombre`, `pais`, `password`, `telefono`) VALUES
(1, 'Madrid', 'juan@gmail.com', '/assets/juan.webp', 'Juan Pérez', 'España', '$2a$10$3sFvB/9yzzsrBs.4ZDYm4erNtDVNXDaAMCKC9BHuP47/XnT7HzbiO', '123456789'),
(2, 'Barcelona', 'admin@gmail.com', '/assets/maria.webp', 'Ayoub Boudhafri', 'España', '$2a$10$3sFvB/9yzzsrBs.4ZDYm4erNtDVNXDaAMCKC9BHuP47/XnT7HzbiO', '987654321');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inmueble`
--
ALTER TABLE `inmueble`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKbugt504fv67a636hi857lfycq` (`usuario_id`);

--
-- Indices de la tabla `inmueble_imagenes`
--
ALTER TABLE `inmueble_imagenes`
  ADD KEY `FKr9oidtgc0e9oo0pkcb2102m7q` (`inmueble_id`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKbhl4astcnayc1dju4gf85xs9o` (`usuario_id`);

--
-- Indices de la tabla `libro_imagenes`
--
ALTER TABLE `libro_imagenes`
  ADD KEY `FKf211e9qjfeayndsoiaddbdlas` (`libro_id`);

--
-- Indices de la tabla `motor`
--
ALTER TABLE `motor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7m0dspygf3w5a74xdo1g41y06` (`usuario_id`);

--
-- Indices de la tabla `motor_imagenes`
--
ALTER TABLE `motor_imagenes`
  ADD KEY `FKijfrc2s76bv85loy63qscg0ed` (`motor_id`);

--
-- Indices de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9okk5sq8kbrf9nucsuu5rx0mq` (`usuario_id`);

--
-- Indices de la tabla `producto_imagenes`
--
ALTER TABLE `producto_imagenes`
  ADD KEY `FKkdcblmg9ai7klqw43lk828pc1` (`producto_id`);

--
-- Indices de la tabla `tecnologia`
--
ALTER TABLE `tecnologia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKr3tfko6flgiscbj1elfisxij2` (`usuario_id`);

--
-- Indices de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjl8ljdpdunifyunmpbspyr390` (`comprador_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKkfsp0s1tflm1cwlj8idhqsad0` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `inmueble`
--
ALTER TABLE `inmueble`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `motor`
--
ALTER TABLE `motor`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tecnologia`
--
ALTER TABLE `tecnologia`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `transacciones`
--
ALTER TABLE `transacciones`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `inmueble`
--
ALTER TABLE `inmueble`
  ADD CONSTRAINT `FKbugt504fv67a636hi857lfycq` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `inmueble_imagenes`
--
ALTER TABLE `inmueble_imagenes`
  ADD CONSTRAINT `FKr9oidtgc0e9oo0pkcb2102m7q` FOREIGN KEY (`inmueble_id`) REFERENCES `inmueble` (`id`);

--
-- Filtros para la tabla `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `FKbhl4astcnayc1dju4gf85xs9o` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `libro_imagenes`
--
ALTER TABLE `libro_imagenes`
  ADD CONSTRAINT `FKf211e9qjfeayndsoiaddbdlas` FOREIGN KEY (`libro_id`) REFERENCES `libro` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `motor`
--
ALTER TABLE `motor`
  ADD CONSTRAINT `FK7m0dspygf3w5a74xdo1g41y06` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `motor_imagenes`
--
ALTER TABLE `motor_imagenes`
  ADD CONSTRAINT `FKijfrc2s76bv85loy63qscg0ed` FOREIGN KEY (`motor_id`) REFERENCES `motor` (`id`);

--
-- Filtros para la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD CONSTRAINT `FK9okk5sq8kbrf9nucsuu5rx0mq` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `producto_imagenes`
--
ALTER TABLE `producto_imagenes`
  ADD CONSTRAINT `FKkdcblmg9ai7klqw43lk828pc1` FOREIGN KEY (`producto_id`) REFERENCES `tecnologia` (`id`);

--
-- Filtros para la tabla `tecnologia`
--
ALTER TABLE `tecnologia`
  ADD CONSTRAINT `FKr3tfko6flgiscbj1elfisxij2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `transacciones`
--
ALTER TABLE `transacciones`
  ADD CONSTRAINT `FKjl8ljdpdunifyunmpbspyr390` FOREIGN KEY (`comprador_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
