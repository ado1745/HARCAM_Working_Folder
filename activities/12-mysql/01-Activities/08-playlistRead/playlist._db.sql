DROP DATABASE IF EXISTS playlist_DB;

CREATE DATABASE playlist_DB;

USE playlist_DB;


CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    artits VARCHAR(100) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO songs (title, artits, genre)
VALUES ("test", "JohnyO", "rock");


INSERT INTO songs (title, artits, genre)
VALUES ("test2", "SergM", "hiphop");


INSERT INTO songs (title, artits, genre)
VALUES ("test3", "MarkT", "dance");