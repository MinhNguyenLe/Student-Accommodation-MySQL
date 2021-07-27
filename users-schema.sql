CREATE TABLE `student-accommodation`.`users` 
( `id` INT(11) NOT NULL AUTO_INCREMENT , 
`name` VARCHAR(64) NOT NULL , 
`age` INT(64) NOT NULL , 
`phone` INT(64) NOT NULL , 
`email` VARCHAR(64) NOT NULL , 
`password` VARCHAR(128) NOT NULL , 
`job` VARCHAR(64) NOT NULL , 
`isAdmin` BOOLEAN NOT NULL , 
`avatar` VARCHAR(1024) NOT NULL , 
`coverImage` VARCHAR(1024) NOT NULL , 
PRIMARY KEY (`id`)) 
ALTER TABLE `users` CHANGE `phone` `phone` VARCHAR(20) NOT NULL;
ALTER TABLE `users` CHANGE `id` `idUser` INT(11) NOT NULL AUTO_INCREMENT;
ENGINE = InnoDB;