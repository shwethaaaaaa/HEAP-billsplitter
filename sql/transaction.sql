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
    PRIMARY KEY (`transaction_id`)
);

-- import transaction
INSERT INTO transaction (transaction_id, group_id, payer, payer_id, ower, ower_id, Exchange_rate,amount ,description)
VALUES (1,3,"Mary",2,"Jane",1,1.20,20.50,"lunch"),
(2,3,"Mary", 2, "Joey",3, 1.30,18.50,"dinner"),
(3,4,"Ron", 4, "Monica", 5, 1.00,19.50,"breakfast"),
(4,3,"Jane", 1, "Mary",2, 1.20,20.50,"Shopping"),
(5,4,"Monica", 5, "Chandler", 6, 1.00,19.50,"breakfast"),
(6,4,"Chandler", 6, "Ron", 4, 1.00,30.50,"breakfast"),
(7,4,"Krish", 7, "Prakash", 8, 1.00,60.50,"breakfast");

-- SQL statements
USE heap15_transaction;
SELECT * FROM transaction;
