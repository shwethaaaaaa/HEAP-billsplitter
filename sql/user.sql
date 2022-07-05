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
VALUES (1, "janedoe15", "janedoe@gmail.com", "password", "12345678"),
(2, "mary18", "marypotter@gmail.com", "password", "87654321"),
(3, "joeydoe16", "joeydoe@gmail.com", "password", "12345678"),
(4, "ronweasly15", "ron@gmail.com", "password", "+6594576312"),
(5, "happy15", "monicafrens@gmail.com", "password", "+6581614989"),
(6, "chandler20", "chandlerfrens@gmail.com", "password", "+6586613663"),
(7, "krish20", "krazykrishfrens@gmail.com", "password", "12345678"),
(8, "prakash20", "prakashfrens@gmail.com", "password", "12345678");

-- SQL statements
USE heap15_user;
SELECT * FROM user;
-- DELETE FROM user WHERE user_id = 4;