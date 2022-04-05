<<<<<<< Updated upstream
DROP DATABASE IF EXISTS zookeepr_db;
CREATE DATABASE zookeepr_db;
=======
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `categories` WRITE;
INSERT INTO `categories` VALUES (1,'Cats & Claws'),(2,'Canine Friends'),(3,'Fish & Sea'),(4,'Baby Animals'),(5,'Horse & Hoofed'),(6,'Featheref Friends'),(7,'Creepy Favorites');
UNLOCK TABLES;

DROP TABLE IF EXISTS `media`;

CREATE TABLE `media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `media` WRITE;
UNLOCK TABLES;
>>>>>>> Stashed changes
