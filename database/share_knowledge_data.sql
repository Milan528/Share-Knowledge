INSERT INTO `share_knowledge`.`user` (`username`, `email`, `password`, `role`) VALUES
('admin', 'admin@elfak.rs','$2b$10$w1gSmaNYIDSH.xMGYF5OZOXTsIfskuW4BSlVmFR9yepzWDR/jvOIa', 'admin'), -- password = 123
('aaaa','bbbbb@aaa.com','123','admin');

INSERT INTO `share_knowledge`.`post` (`title`,`text`,`type`,`date`,`likes`,`userId`) VALUES
( 'Naslov', 'Tekst', 'a', '27-11-97', 5, 1),
( 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto', 'q', '27-11-97', 5, 1),
( 'qui est esse', '"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla', 'a', '27-11-97', 5, 1),
( 'ea molestias quasi exercitationem repellat qui ipsa sit aut', 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut', 'q', '27-11-97', 5, 1),
( 'eum et est occaecati', 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit', 'a', '27-11-97', 5, 1),
( 'nesciunt quas odio', 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque', 'q', '27-11-97', 5, 1),
( 'dolorem eum magni eos aperiam quia', 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae', 'a', '27-11-97', 5, 1),
( 'magnam facilis autem', 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas', 'q', '27-11-97', 5, 1),
( 'dolorem dolore est ipsam', 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae', 'a', '27-11-97', 5, 1),
( 'nesciunt iure omnis dolorem tempora et accusantium', 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas', 'q', '27-11-97', 5, 1);

INSERT INTO `share_knowledge`.`tags` (`tag`) VALUES
('A'),
('B'),
('C'),
('D'),
('E'),
('F');

INSERT INTO `share_knowledge`.`post_tag` (`postId`,`tagId`) VALUES
("postId":1, "tagId":1),
("postId":8, "tagId":1),
("postId":1, "tagId":2),
("postId":5, "tagId":2),
("postId":2, "tagId":3),
("postId":5, "tagId":3),
("postId":7, "tagId":3),
("postId":3, "tagId":4),
("postId":4, "tagId":4),
("postId":4, "tagId":5),
("postId":5, "tagId":5),
("postId":6, "tagId":5),
("postId":8, "tagId":5),
("postId":9, "tagId":5),
("postId":7, "tagId":6),
("postId":10, "tagId":6)
