CREATE DATABASE IF NOT EXISTS `share_knowledge` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `share_knowledge`;

DROP TABLE IF EXISTS comment_file;
DROP TABLE IF EXISTS commentLikedBy;
DROP TABLE IF EXISTS commentDislikedBy;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS postLikedBy;
DROP TABLE IF EXISTS postDislikedBy;
DROP TABLE IF EXISTS post_tag;
DROP TABLE IF EXISTS post_file;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS post;
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

CREATE TABLE post (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    text varchar(1000) NOT NULL,
    type varchar(100) NOT NULL,
    date date NOT NULL,
    userId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id) ,
    FULLTEXT (title,text)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE tags (
    id int NOT NULL AUTO_INCREMENT,
    tag varchar(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (tag)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE postLikedBy (
postId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (postId,userId),
FOREIGN KEY (userId) REFERENCES user(id), 
FOREIGN KEY (postId) REFERENCES post(id) 
) DEFAULT CHARSET=utf8;

CREATE TABLE postDislikedBy (
postId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (postId,userId),
FOREIGN KEY (userId) REFERENCES user(id), 
FOREIGN KEY (postId) REFERENCES post(id) 
) DEFAULT CHARSET=utf8;

CREATE TABLE post_file (
    id int NOT NULL AUTO_INCREMENT,
    path varchar(256) NOT NULL,
    ext varchar(256) NOT NULL,
    postId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (postId) REFERENCES post(id) 
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE post_tag (
    postId int NOT NULL,
    tagId int NOT NULL,
    PRIMARY KEY (postId,tagId),
    FOREIGN KEY (postId) REFERENCES post(id), 
    FOREIGN KEY (tagId) REFERENCES tags(id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE comment (
    id int NOT NULL AUTO_INCREMENT,
    text varchar(1000) NOT NULL,
    date date NOT NULL,
    userId int NOT NULL,
    postId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id),
    FOREIGN KEY (postId) REFERENCES post(id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8; 

CREATE TABLE commentLikedBy (
commentId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (commentId,userId),
FOREIGN KEY (userId) REFERENCES user(id), 
FOREIGN KEY (commentId) REFERENCES comment(id) 
) DEFAULT CHARSET=utf8;

CREATE TABLE commenDislikedBy (
commentId int NOT NULL,
userId int NOT NULL, 
PRIMARY KEY (commentId,userId),
FOREIGN KEY (userId) REFERENCES user(id), 
FOREIGN KEY (commentId) REFERENCES comment(id) 
) DEFAULT CHARSET=utf8;

CREATE TABLE comment_file (
    id int NOT NULL AUTO_INCREMENT,
    path varchar(256) NOT NULL,
    ext varchar(256) NOT NULL,
    commentId int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (commentId) REFERENCES comment(id) 
) ENGINE = InnoDB DEFAULT CHARSET=utf8;