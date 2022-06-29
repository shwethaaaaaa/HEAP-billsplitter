DROP DATABASE IF EXISTS heap15_group;

CREATE DATABASE heap15_group;
USE heap15_group;

DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
	`group_id` INT AUTO_INCREMENT NOT NULL,
    `group_name` VARCHAR(256) NOT NULL,
	`group_members` VARCHAR(500) NOT NULL,
    `home_currency` VARCHAR(256) NOT NULL,
    `group_status` VARCHAR (256) NOT NULL,
    PRIMARY KEY (`group_id`)
);

-- import group
INSERT INTO `group` (group_id, group_name, group_members, home_currency, group_status)
VALUES (1, "Swiss Trip", "Jane,Bob,Joey","SGD", "open"),
(2,	"UK Trip", "Ron,Mark,Harry","SGD", "open"),
(3,	"Girls Trip to Bali","Jane,Mary,Joey", "SGD", "open"),
(4,	"23 Japan Trip","Joey,Marcus,Monica", "SGD", "open");

-- SQL statements
USE heap15_group;