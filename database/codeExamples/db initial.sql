-- USE zdravlj1_detoxificationcenter;
-- CREATE DATABASE detoxificationcenter;
-- USE detoxificationcenter;

DROP TABLE IF EXISTS `connect_user_order`;
DROP TABLE IF EXISTS `connect_user_contact`;
DROP TABLE IF EXISTS `connect_order_contact`;
DROP TABLE IF EXISTS `connect_order_orderdestination`;
DROP TABLE IF EXISTS `connect_order_product`;
DROP TABLE IF EXISTS `connect_order_shop`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS `orderdestination`;
DROP TABLE IF EXISTS `contact`;
DROP TABLE IF EXISTS `admin`;
DROP TABLE IF EXISTS `product`;
DROP TABLE IF EXISTS `shop`;

CREATE TABLE `admin` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `username` varchar(25) NOT NULL,
    `adminPassword` varchar(25) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `admin` (`username`, `adminPassword`) VALUES ('Aleksandar', '1234');

CREATE TABLE `user` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(25) NOT NULL,
    `lastName` varchar(25) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `order` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `discount` int(3) NOT NULL,
    `cumulativePrice` int(10) NOT NULL,
    `orderDate` date NOT NULL,
    `transactionColor` varchar(5) DEFAULT "white",
    `comment` varchar(1000),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `orderdestination` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `placeOfLiving` varchar(25) NOT NULL,
    `street` varchar(25) NOT NULL,
    `doorNumber` varchar(25) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;;


CREATE TABLE `connect_order_orderdestination` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `orderId` int(15) NOT NULL,
    `orderDestinationId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`), 
    FOREIGN KEY (`orderDestinationId`) REFERENCES `orderdestination`(`id`) 
) ENGINE = InnoDB;

CREATE TABLE `contact` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `phoneNumber` varchar(15) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `shop` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `shopName` varchar(30) NOT NULL,
    `active` BOOLEAN NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
INSERT INTO `shop` (`shopName`, `active`) VALUES 
('Centar za detoksikaciju', true);

CREATE TABLE `connect_order_shop` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `orderId` int(15) NOT NULL,
    `shopId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`), 
    FOREIGN KEY (`shopId`) REFERENCES `shop`(`id`)
) ENGINE = InnoDB;

CREATE TABLE `product` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `productName` varchar(30) NOT NULL,
    `price` int(15) NOT NULL,
    `active` BOOLEAN NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `connect_order_product` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `orderId` int(15) NOT NULL,
    `productId` int(15) NOT NULL,
    `quantity` int(3) NOT NULL,
    `totalPrice` int(10) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`), 
    FOREIGN KEY (`productId`) REFERENCES `product`(`id`)
) ENGINE = InnoDB;


CREATE TABLE `connect_user_contact` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `userId` int(15) NOT NULL,
    `contactId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userId`) REFERENCES `user`(`id`),
    FOREIGN KEY (`contactId`) REFERENCES `contact`(`id`)
) ENGINE = InnoDB;


CREATE TABLE `connect_user_order` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `userId` int(15) NOT NULL,
    `orderId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userId`) REFERENCES `user`(`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`)
) ENGINE = InnoDB;

CREATE TABLE `connect_order_contact` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `orderId` int(15) NOT NULL,
    `contactId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`), 
    FOREIGN KEY (`contactId`) REFERENCES `contact`(`id`)
) ENGINE = InnoDB;
