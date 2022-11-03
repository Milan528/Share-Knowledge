INSERT INTO `share_knowledge`.`user` (`username`, `email`, `password`, `role`) VALUES
('admin', 'admin@elfak.rs','$2b$10$8cJJ8ZirZ5mqIP5xH61QjukOxG8Ny3GrHGjnYPOwULazBHAmDO/8m', 'admin'),
('aaaa','bbbbb@aaa.com','123','admin');

INSERT INTO `share_knowledge`.`post` (`title`,`text`,`type`,`date`,`userId`) VALUES
( 'Naslov', 'Tekst', 'Tip', '27-11-97user', 1);

INSERT INTO `share_knowledge`.`tags` (`tag`) VALUES
('A'),
('B'),
('C'),
('D'),
('E'),
('F');
