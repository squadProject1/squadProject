-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema newschema
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `userPassword` VARCHAR(45) NULL,
  `userBirth` VARCHAR(45) NULL,
  `userEmail` VARCHAR(100) NULL,
  `userPic` VARCHAR(300) NULL,
  `userBio` VARCHAR(45) NULL,
  `userGender` VARCHAR(45) NULL,
  `userFollowers` INT NULL,
  `userStatus` VARCHAR(45) NULL,
  `fullName` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`posts` (
  `id` INT NOT NULL,
  `title` VARCHAR(200) NULL,
  `date` VARCHAR(45) NULL,
  `like` INT NULL,
  `dislike` INT NULL,
  `content` VARCHAR(45) NULL,
  `postscol` VARCHAR(500) NULL,
  `dateUpdate` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `posts_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_posts_posts1_idx` (`posts_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_posts_posts1`
    FOREIGN KEY (`posts_id`)
    REFERENCES `mydb`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comments` (
  `id` INT NOT NULL,
  `content` VARCHAR(45) NULL,
  `like` INT NULL,
  `dislike` INT NULL,
  `dateCreate` VARCHAR(45) NULL,
  `dateUpdate` VARCHAR(45) NULL,
  `comments_id` INT NOT NULL,
  `posts_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comments_comments1_idx` (`comments_id` ASC) VISIBLE,
  INDEX `fk_comments_posts1_idx` (`posts_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_comments1`
    FOREIGN KEY (`comments_id`)
    REFERENCES `mydb`.`comments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_posts1`
    FOREIGN KEY (`posts_id`)
    REFERENCES `mydb`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`category` (
  `id` INT NOT NULL,
  `Title` VARCHAR(45) NULL,
  `content` VARCHAR(45) NULL,
  `picture` VARCHAR(400) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`postCtegory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`postCtegory` (
  `posts_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  INDEX `fk_postCtegory_posts1_idx` (`posts_id` ASC) VISIBLE,
  INDEX `fk_postCtegory_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_postCtegory_posts1`
    FOREIGN KEY (`posts_id`)
    REFERENCES `mydb`.`posts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_postCtegory_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `mydb`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- ------------------------------------------------------
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Chris Brown', 'passw123', '20/03/1992', 'chris.brown@mail.com', 'https://favim.com/pd/p/orig/2018/10/04/uluserPassword, ang-korean-boys-Favim.com-6362293.jpg', 'Musician and fitness enthusiast', 'Male', 700, 'offline');
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Ali Hussein', 'passw123', '03/11/1982', 'ali.hussein@mail.com', 'https://i.pinimg.com/736x/20/f0/43/20f043633a3a4fbfdc7125b21e9a941e.jpg', 'Software engineer and nature lover', 'Male', 1200, 'online');
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Fatima Khalil', 'passw123', '18/06/1993', 'fatima.khalil@mail.com', 'https://i.pinimg.com/736x/eb/fc/16/ebfc16752a814704f12b081d018a0861.jpg', 'Graphic designer and movie enthusiast', 'Female', 900, 'offline');
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Mohammed Ali', 'passw123', '29/09/1987', 'mohammed.ali@mail.com', 'https://burst.shopifycdn.com/photos/dark-haired-man-in-brown-leather-jacket.jpg?width=1000&format=pjpg&exif=0&iptc=0', 'Programmer and video game player', 'Male', 600, 'offline');
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Layla Nasr', 'passw123', '14/02/1998', 'layla.nasr@mail.com', 'https://as2.ftcdn.net/v2/jpg/02/82/61/73/1000_F_282617310_blqy91sDmGuTBpQjpUEFJmS3bZ7vHPAi.jpg', 'Nature photographer and adventurer', 'Female', 1500, 'online');
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Omar Hassan', 'passw123', '07/07/1980', 'omar.hassan@mail.com', 'https://i.pinimg.com/736x/f0/b6/ea/f0b6ea6cdb83304ab03251a620116c44.jpg', 'Music producer and fitness coach', 'Male', 800, 'away');
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Sara Ahmed', 'passw123', '12/08/1995', 'sara.ahmed@mail.com', 'https://i.pinimg.com/736x/91/4a/f8/914af8bcbb750d8c12e29dd2399aad95.jpg', 'Art enthusiast and software developer', 'Female', 1100, 'online'); 
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Nour Kamal', 'passw123', '06/05/1990', 'nour.kamal@mail.com', 'https://pbs.twimg.com/media/ClGC8AlWAAI2HBi?format=jpg&name=medium', 'Travel blogger and language learner', 'Female', 920, 'away');
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Youssef Ali', 'passw123', '19/11/1988', 'youssef.ali@mail.com', 'https://www.shutterstock.com/image-photo/handsome-smiling-young-man-folded-260nw-2069457431.jpg', 'UX designer and coffee connoisseur', 'Male', 850, 'online'); 
INSERT INTO user (userName, userPassword, userBirth, userEmail, userPic, userBio, userGender,userFollowers,userStatus) VALUES('Amina Farid', 'passw123', '02/09/1992', 'amina.farid@mail.com', 'https://wallpapers.com/images/featured/white-girl-4o95t9anok4vxlqf.jpg', 'Fitness trainer and fashion lover', 'Female', 1300, 'offline'); 

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
