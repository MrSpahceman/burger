DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
-- back ticks encapsulate table,property,or data base name.
USE `burgers_db`;

CREATE TABLE `burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(100) DEFAULT NULL,  
  `devoured` TINYINT(1) NOT NULL DEFAULT `0`,
  `occurance` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);
 
-- SELECT * FROM `burgers`;