DROP DATABASE IF EXISTS heap15_transaction;

CREATE DATABASE heap15_transaction;
USE heap15_transaction;

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE `transaction` (
	`transaction_id` INT AUTO_INCREMENT NOT NULL,
    `group_id` INT NOT NULL,
    `payer` VARCHAR(256) NOT NULL,
    `payer_id` INT NOT NULL, 
	`ower` VARCHAR(500) NOT NULL,
    `ower_id` INT NOT NULL, 
    `Exchange_rate`FLOAT NOT NULL,
    `amount` FLOAT NOT NULL,
    `description` VARCHAR (256) NOT NULL,
    `receipt` VARCHAR(256) NOT NULL,
    PRIMARY KEY (`transaction_id`)
);

-- import transaction
INSERT INTO transaction (transaction_id , group_id, payer, payer_id, ower, ower_id, Exchange_rate,amount ,description, receipt)
VALUES (1,3,"Mary",1,"Jane",2,1.20,20.50,"lunch","reciept picture"),
(2,3,"Mary", 3, "Joey",7, 1.30,18.50,"dinner","reciept picture"),
(3,4,"Vincent", 5, "Ray", 8, 1.00,19.50,"breakfast","reciept picture"),
(4,3,"Jane", 9, "Mary", 10, 1.20,18.50,"Shopping","reciept picture");

-- SQL statements
USE heap15_transaction;
SELECT * FROM transaction;
