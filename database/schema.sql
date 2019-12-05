DROP DATABASE IF EXISTS pokemon;

CREATE DATABASE pokemon;

USE pokemon;

CREATE TABLE team (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(20) NOT NULL,
  numero int NOT NULL,
  tipo varchar(20) NOT NULL,
  amount int NOT NULL,
  img LONGBLOB NOT NULL,
  PRIMARY KEY (ID),
  CONSTRAINT UC_team UNIQUE (id, nombre, numero)
);

INSERT INTO team (nombre, numero, tipo, amount, img) VALUES("bulbasaur", 1, "poison, grass", 1, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
INSERT INTO team (nombre, numero, tipo, amount, img) VALUES("pikachu", 25, "electric", 1, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")