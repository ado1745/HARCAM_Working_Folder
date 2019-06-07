DROP DATABASE IF EXISTS topSongs_db;

CREATE DATABASE topSongs_db;

USE topSongs_db;

CREATE TABLE songs
(
    id INT NOT NULL
    AUTO_INCREMENT,
 global_rank INT NOT NULL,
 artist VARCHAR
    (255) NOT NULL,
 songname VARCHAR
    (255) NOT NULL,
 year_released INT NOT NULL,
 raw_score DECIMAL
    (10,4),
 USA_score DECIMAL
    (10,4),
 UK_score DECIMAL
    (10,4),
 Europe_score DECIMAL
    (10,4),
 rest_of_world_score DECIMAL
    (10,4),
 PRIMARY KEY
    (id)
);
