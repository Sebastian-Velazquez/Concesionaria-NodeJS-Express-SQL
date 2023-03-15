-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2023 a las 00:27:44
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--
CREATE DATABASE IF NOT EXISTS `proyecto` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `proyecto`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_category` int(25) NOT NULL,
  `category_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `id_color` int(11) NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `colores`
--

INSERT INTO `colores` (`id_color`, `nombre`) VALUES
(1, 'Violeta'),
(2, 'Rojo'),
(3, 'celeste');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelos`
--

CREATE TABLE `modelos` (
  `id_modelo` int(11) NOT NULL,
  `tipo_de_modelo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `modelos`
--

INSERT INTO `modelos` (`id_modelo`, `tipo_de_modelo`) VALUES
(1, 'Sedán'),
(2, 'Coupé'),
(3, '4x4'),
(4, 'Camioneta'),
(5, 'Lujo'),
(6, 'Deportivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_product` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` int(11) NOT NULL,
  `anio` date NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_color` int(11) NOT NULL,
  `id_modelo` int(11) NOT NULL,
  `outstanding` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_product`, `name`, `price`, `anio`, `description`, `image`, `id_color`, `id_modelo`, `outstanding`) VALUES
(7, 'Ford Foucus 1.6 16v', 3450000, '2014-02-26', 'Auto 5 puertas, usado con GNC', 'image-1677452979786.jpg', 3, 5, 0),
(8, '---sedan', 12, '2023-03-23', '', 'default-image.png', 1, 1, 0),
(9, '--coupe', 231, '2023-03-14', 'daf', 'image-1677853593497.jpeg', 1, 2, 0),
(10, 'Sergio Sebastian Velazquez', 123, '2023-03-01', 'asd', 'default-image.png', 1, 2, 0),
(11, 'Chata 4x4 de lujo', 14, '2023-03-08', 'asd', 'default-image.png', 3, 3, 0),
(12, 'a', 12, '2023-03-06', '123', 'default-image.png', 1, 1, 0),
(13, 'asd', 14, '2023-03-01', 'dqwe', 'default-image.png', 1, 1, 0),
(14, '116', 16, '2023-03-28', 'we', 'default-image.png', 1, 1, 0),
(15, 'eqw', 20, '2023-03-20', '123', 'default-image.png', 2, 1, 0),
(16, 'sedan', 100, '2023-03-22', 'wqe', 'default-image.png', 2, 1, 0),
(17, 'sedab', 1000, '2023-03-14', 'asd', 'default-image.png', 1, 1, 0),
(18, 'caro', 500000, '2023-03-06', 'aad', 'default-image.png', 2, 1, 0),
(19, 'asd', 100000, '2023-03-21', 'asd', 'default-image.png', 1, 2, 0),
(20, 'a', 123123, '2023-03-29', '123', 'default-image.png', 1, 2, 0),
(21, 'sad', 2147483647, '2023-03-21', '', 'default-image.png', 1, 2, 0),
(22, 'Camioneta', 123, '2023-02-28', '', 'default-image.png', 2, 4, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `birth_date` date NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_category` int(25) NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `first_name`, `last_name`, `birth_date`, `email`, `password`, `id_category`, `image`) VALUES
(1, 'Thomas', 'Manzone', '0000-00-00', 'tomas@gmail.com', 'encrypted', 0, 'img.jpg'),
(2, 'Sergio', 'Velazquez', '0000-00-00', 'asd@asd.com', '$2a$10$w0XfXDOkTCkgldZkjpbWE.iwCyFZplcsXdEVJlLlVuHkLJUUVjEIu', 1, 'avatar.jpg'),
(3, 'Sergio', 'Velazquez', '0000-00-00', 'sergio@sergio.com', '$2a$10$P2lq25hQj37oquQjvxrTeuHqOrN.BYDGvjNUz8r0.YuWC0EuryI7m', 1, 'avatar.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_category`);

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id_color`);

--
-- Indices de la tabla `modelos`
--
ALTER TABLE `modelos`
  ADD PRIMARY KEY (`id_modelo`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `FK_c70b0fd0-c303-4482-a8cb-0acd97d02fc8` (`id_modelo`),
  ADD KEY `FK_be610b57-4855-47c1-8fe5-3b7da5436da7` (`id_color`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_category` (`id_category`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_category` int(25) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colores`
--
ALTER TABLE `colores`
  MODIFY `id_color` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `modelos`
--
ALTER TABLE `modelos`
  MODIFY `id_modelo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `categorias_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `usuarios` (`id_category`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK_be610b57-4855-47c1-8fe5-3b7da5436da7` FOREIGN KEY (`id_color`) REFERENCES `colores` (`id_color`),
  ADD CONSTRAINT `FK_c70b0fd0-c303-4482-a8cb-0acd97d02fc8` FOREIGN KEY (`id_modelo`) REFERENCES `modelos` (`id_modelo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
