-- CREATE DATABASE share_knowledge;
-- USE share_knowledge;

CREATE DATABASE IF NOT EXISTS `share_knowledge` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `share_knowledge`;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id int(15) NOT NULL AUTO_INCREMENT,
    username varchar(25) NOT NULL,
    email varchar(25) NOT NULL,
    password varchar(1000) NOT NULL,
    role varchar(25) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (username),
    UNIQUE (email)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS tags;
CREATE TABLE tags (
    id int NOT NULL AUTO_INCREMENT,
    tag varchar(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (tag)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS post;
CREATE TABLE post (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    text varchar(1000) NOT NULL,
    type varchar(100) NOT NULL,
    date varchar(25) NOT NULL,
    userId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id) 
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS likedBy;
CREATE TABLE likedBy (
postId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (postId,userId),
FOREIGN KEY (userId) REFERENCES user(id), 
FOREIGN KEY (postId) REFERENCES post(id) 
) DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS file;
CREATE TABLE file (
    id int NOT NULL AUTO_INCREMENT,
    path varchar(256) NOT NULL,
    ext varchar(256) NOT NULL,
    postId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (postId) REFERENCES post(id) 
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS post_tag;
CREATE TABLE post_tag (
    postId int NOT NULL,
    tagId int NOT NULL,
    PRIMARY KEY (postId,tagId),
    FOREIGN KEY (postId) REFERENCES post(id), 
    FOREIGN KEY (tagId) REFERENCES tags(id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;