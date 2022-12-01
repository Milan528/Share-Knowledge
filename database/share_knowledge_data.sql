INSERT INTO `share_knowledge`.`user` (`username`, `email`, `password`, `role`) VALUES
('admin', 'admin@elfak.rs','$2b$10$w1gSmaNYIDSH.xMGYF5OZOXTsIfskuW4BSlVmFR9yepzWDR/jvOIa', 'admin'), -- password = 123
('a','a@elfak.rs','123','admin'),
('b','b@elfak.rs','123','admin'),
('c','c@elfak.rs','123','admin'),
('d','d@elfak.rs','123','admin');

INSERT INTO `share_knowledge`.`post` (`title`,`text`,`type`,`date`, `userId`) VALUES
( 'Naslov', 'Tekst', 'a', '27-11-97', 1),
( 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto', 'q', '27-11-97', 1),
( 'qui est esse', '"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla', 'a', '27-11-97', 1),
( 'ea molestias quasi exercitationem repellat qui ipsa sit aut', 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut', 'q', '27-11-97', 1),
( 'eum et est occaecati', 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit', 'a', '27-11-97', 1),
( 'nesciunt quas odio', 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque', 'q', '27-11-97', 1),
( 'dolorem eum magni eos aperiam quia', 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae', 'a', '27-11-97', 1),
( 'magnam facilis autem', 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas', 'q', '27-11-97', 1),
( 'dolorem dolore est ipsam', 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae', 'a', '27-11-97', 1),
( 'nesciunt iure omnis dolorem tempora et accusantium', 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas', 'q', '27-11-97', 1);

INSERT INTO `share_knowledge`.`tags` (`tag`) VALUES
('A'),
('B'),
('C'),
('D'),
('E'),
('F');

INSERT INTO `share_knowledge`.`post_tag` (`postId`,`tagId`) VALUES
(1, 1),
(8, 1),
(1, 2),
(5, 2),
(2, 3),
(5, 3),
(7, 3),
(3, 4),
(4, 4),
(4, 5),
(5, 5),
(6, 5),
(8, 5),
(9, 5),
(7, 6),
(10,6);

INSERT INTO `share_knowledge`.`post_file` (`path`, `ext`, `postId`) VALUES
('1.docx', '.docx', '1'),
('1.pdf', '.pdf', '1'),
('1.png', '.png', '1');

INSERT INTO `share_knowledge`.`postLikedBy` (`postId`, `userId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(3, 2),
(4, 1);

INSERT INTO `share_knowledge`.`comment` (`text`, `date`, `userId`) VALUES
( 'Ovo je prvi komentar ', '27-11-97', 1),
( 'Ovo je drugi komentar ', '28-11-97', 1),
( 'Ovo je treci komentar ', '29-11-97', 1),
( 'Ovo je cetvrti komentar ', '30-11-97', 1);

INSERT INTO `share_knowledge`.`commentLikedBy` (`commentId`, `userId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(3, 2),
(4, 1);

INSERT INTO `share_knowledge`.`post_comment` (`postId`,`commentId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4);

INSERT INTO `share_knowledge`.`comment_file` (`path`, `ext`, `commentId`) VALUES
('2.docx', '.docx', '1'),
('2.pdf', '.pdf', '1'),
('2.png', '.png', '1');

