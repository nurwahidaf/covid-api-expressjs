-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2023 at 01:14 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patients`
--

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `in_date_at` date NOT NULL,
  `out_date_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`, `created_at`, `updated_at`) VALUES
(1, 'Fitri', '081253462865', 'Kabupaten Bogor', 'Recovered', '2022-11-18', '2022-11-18', NULL, '2022-11-18 10:54:49'),
(3, 'Dina', '081235662346', 'Kabupaten Wonosobo', 'Recovered', '2022-11-18', '2022-11-18', '2022-11-18 11:17:38', '2022-11-18 11:17:38'),
(4, 'Ferdian', '08517264528', 'Kabupaten Bogor', 'Recovered', '2022-11-19', '2022-11-19', '2022-11-18 20:27:06', '2022-11-18 20:27:06'),
(6, 'Haru', '085176674528', 'Jakarta', 'Positive', '2022-11-19', '2022-11-19', '2022-11-18 22:59:00', '2022-11-18 22:59:00'),
(7, 'Nara', '084125673728', 'Kabupaten Bandung', 'Dead', '2022-11-19', '2022-11-19', '2022-11-18 22:59:50', '2022-11-18 23:02:17'),
(13, 'Radit', '088123754685', 'Jakarta', 'Dead', '2023-01-08', '2023-01-13', NULL, '2023-01-15 10:44:25'),
(14, 'Reva', '088283647262', 'Bekasi', 'Positive', '2022-12-27', '2023-01-15', '2023-01-15 10:46:37', '2023-01-15 10:47:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
