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
VALUES (1,1,"Jane",1,"Krish",7,1.20,20.50,"Lunch"),
(2,1,"Krish", 7, "Joey",3, 1.30,18.50,"Dinner"),
(3,1,"Joey", 3, "Krish", 7, 1.00,8.50,"Breakfast"),
(4,1,"Jane", 1, "Joey",3, 1.20,60.50,"Shopping"),
(5,2,"Mary", 2, "Jane", 1, 1.00,19.50,"Breakfast"),
(6,2,"Joey", 3, "Mary", 2, 1.00,30.50,"Breakfast"),
(7,2,"Joey", 3, "Jane", 1, 1.00,60.50,"Breakfast"),
(8,2,"Mary", 2, "Joey", 3, 1.00,15,"Macs Dinner"),
(9,3,"Ron", 4, "Chandler", 6, 1.00,10,"breakfast"),
(10,3,"Monica", 5, "Ron", 4, 1.00,15,"breakfast"),
(11,3,"Krish", 7, "Prakash", 8, 1.00,20,"breakfast"),
(12,3,"Krish", 7, "Ron", 4, 1.00,12.50,"breakfast"),
(13,4,"Jane", 1, "Monica", 5, 1.00,13,"Dinner"),
(14,4, "Krish",7, "Joey", 3, 1.00, 26, "Shopping"),
(15,4,"Monica",5, "Joey", 3, 1.00, 50, "Shopping");


-- SQL statements
USE heap15_transaction;
SELECT * FROM transaction;
