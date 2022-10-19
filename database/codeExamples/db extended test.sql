-- CREATE DATABASE detoxificationcenter;
USE detoxificationcenter;

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
INSERT INTO `user` (`firstName`, `lastName`) VALUES 
('Aleksandar', 'Aleksandrovic'),
('Marko', 'Markovic'),
('Pera', 'Peric');


CREATE TABLE `order` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `discount` int(3) NOT NULL,
    `cumulativePrice` int(10) NOT NULL,
    `orderDate` date NOT NULL,
    `transactionColor` varchar(5) DEFAULT "white",
    `comment` varchar(1000),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `order` (`discount`, `cumulativePrice`, `orderDate`, `comment`) VALUES 
('0', '800',"2020-01-14", ''),
('0', '400', "2020-01-15", 'Bol u venama'),
('0', '600', "2020-01-16", 'Urinarna infekcija');


CREATE TABLE `orderdestination` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `placeOfLiving` varchar(25) NOT NULL,
    `street` varchar(25) NOT NULL,
    `doorNumber` varchar(25) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;;
INSERT INTO `orderdestination` (`placeOfLiving`, `street`, `doorNumber`) VALUES 
('Zlot', 'Borska', '94'),
('Bor', 'Zlotsa', '49'),
('Leskovac', 'Leskovacka', '50');


CREATE TABLE `connect_order_orderdestination` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `orderId` int(15) NOT NULL,
    `orderDestinationId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`), 
    FOREIGN KEY (`orderDestinationId`) REFERENCES `orderdestination`(`id`) 
) ENGINE = InnoDB;
INSERT INTO `connect_order_orderdestination` (`orderId`, `orderDestinationId`) VALUES 
('1', '2'),
('2', '1'),
('3', '3');

CREATE TABLE `contact` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `phoneNumber` varchar(15) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
INSERT INTO `contact` (`phoneNumber`) VALUES 
('0607154400'),
('0607154402'),
('0607154404');

CREATE TABLE `shop` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `shopName` varchar(30) NOT NULL,
    `active` BOOLEAN NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
INSERT INTO `shop` (`shopName`, `active`) VALUES 
('Centar za detoksikaciju', true),
('Zdravlje s juga', true),
('Kupindo', true);

CREATE TABLE `connect_order_shop` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `orderId` int(15) NOT NULL,
    `shopId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`), 
    FOREIGN KEY (`shopId`) REFERENCES `shop`(`id`)
) ENGINE = InnoDB;
INSERT INTO `connect_order_shop` (`orderId`, `shopId`) VALUES 
('1', '1'),
('2', '2'),
('3', '3');

CREATE TABLE `product` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `productName` varchar(30) NOT NULL,
    `price` int(15) NOT NULL,
    `active` BOOLEAN NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;
INSERT INTO `product` (`productName`, `price`, `active`) VALUES 
('Carobni napitak', '100', true),
('Pivo', '200', true),
('Kisela corbica', '300', true);

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
INSERT INTO `connect_order_product` (`orderId`, `productId`, `quantity`, `totalPrice`) VALUES 
('1', '1', '4', '400'),
('1', '2', '2', '400'),
('2', '2', '1', '200'),
('3', '3', '1', '400');



CREATE TABLE `connect_user_contact` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `userId` int(15) NOT NULL,
    `contactId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userId`) REFERENCES `user`(`id`),
    FOREIGN KEY (`contactId`) REFERENCES `contact`(`id`)
) ENGINE = InnoDB;
INSERT INTO `connect_user_contact` (`userId`, `contactId`) VALUES 
('1', '2'),
('1', '3'),
('2', '2'),
('3', '3');


CREATE TABLE `connect_user_order` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `userId` int(15) NOT NULL,
    `orderId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`userId`) REFERENCES `user`(`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`)
) ENGINE = InnoDB;
INSERT INTO `connect_user_order` (`userId`, `orderId`) VALUES 
('1', '2'),
('3', '3'),
('2', '1');

CREATE TABLE `connect_order_contact` (
    `id` int(15) NOT NULL AUTO_INCREMENT,
    `orderId` int(15) NOT NULL,
    `contactId` int(15) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`orderId`) REFERENCES `order`(`id`), 
    FOREIGN KEY (`contactId`) REFERENCES `contact`(`id`)
) ENGINE = InnoDB;
INSERT INTO `connect_order_contact` (`orderId`, `contactId`) VALUES 
('1', '2'),
('2', '1'),
('3', '3');
