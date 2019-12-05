CREATE DATABASE pokemon;

USE pokemon;

CREATE TABLE team (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  number int NOT NULL,
  type varchar(20) NOT NULL,
  image LONGBLOB NOT NULL,
  PRIMARY KEY (ID)
)
