DROP DATABASE IF EXISTS heap15_user;

CREATE DATABASE heap15_user;
USE heap15_user;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
	`user_id` INT AUTO_INCREMENT NOT NULL,
    `user_name` VARCHAR (256) NOT NULL,
	`email` VARCHAR(256) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    `phone_no` VARCHAR(256) NOT NULL, 
    PRIMARY KEY (`user_id`)
);

-- import user
INSERT INTO user (user_id, user_name, email, password, phone_no)
VALUES (1, "Jane", "janedoe@gmail.com", "password", "+6591998490"),
(2, "Mary", "marypotter@gmail.com", "password", "+6586613363"),
(3, "Joey", "joeydoe@gmail.com", "password", "+6581614989"),
(4, "Ron", "ron@gmail.com", "password", "+6594576312"),
(5, "Monica", "monicafrens@gmail.com", "password", "+6591998490"),
(6, "Chandler", "chandlerfrens@gmail.com", "password", "+6586613363"),
(7, "Krish", "krazykrishfrens@gmail.com", "password", "+6581614989"),
(8, "Prakash", "prakashfrens@gmail.com", "password", "+6594576312");

-- SQL statements
USE heap15_user;
SELECT * FROM user;
-- DELETE FROM user WHERE user_id = 4;