USE `lamegame`;

CREATE TABLE `highscore` (
`highscore_id` int(6) AUTO_INCREMENT PRIMARY KEY,
`highscore_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
`highscore_score` int(11)
);