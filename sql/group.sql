DROP DATABASE IF EXISTS heap15_group;

CREATE DATABASE heap15_group;
USE heap15_group;


DROP TABLE IF EXISTS `group`;

CREATE TABLE `group` (
	`group_id` INT AUTO_INCREMENT NOT NULL,
    `owner_id` INT NOT NULL,
    `group_name` VARCHAR(256) NOT NULL,
	`group_members` VARCHAR(500) NOT NULL,
    `user_ids` VARCHAR(256) NOT NULL,
    `home_currency` VARCHAR(256) NOT NULL,
    `group_status` VARCHAR (256) NOT NULL,
    PRIMARY KEY (`group_id`)
);


-- import group
INSERT INTO `group` (group_id, owner_id, group_name, group_members, user_ids, home_currency, group_status)
VALUES (1, 7, "Swiss Trip", "Jane,Krish,Joey", "1,7,3", "SGD", "open"),
(2, 1, "Girls Trip to Bali","Jane,Mary,Joey", "1,2,3", "SGD", "open"),
(3,5,"23 Japan Trip","Ron,Monica,Chandler,Krish,Prakash", "4,5,6,7,8", "SGD", "open")

-- SQL statements
-- USE heap15_group;