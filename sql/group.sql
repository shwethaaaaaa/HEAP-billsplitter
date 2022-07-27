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
    `trip_duration` VARCHAR (256) NOT NULL,
    PRIMARY KEY (`group_id`)
);


-- import group
INSERT INTO `group` (group_id, owner_id, group_name, group_members, user_ids, home_currency, group_status, trip_duration)
VALUES (1, 7, "Switzerland", "Jane,Krish,Joey", "1,7,3", "SGD", "open","12/03/22-20/03/22"),
(2, 1, "Bali","Jane,Mary,Joey", "1,2,3", "SGD", "open","12/04/22-20/04/22"),
(3,5,"Japan","Ron,Monica,Chandler,Krish,Prakash", "4,5,6,7,8", "SGD", "open","12/05/22-20/05/22"),
(4,1, "London","Jane,Monica,Krish,Joey", "1,5,7,3", "SGD", "open","12/06/22-20/06/22");

-- SQL statements
-- USE heap15_group;