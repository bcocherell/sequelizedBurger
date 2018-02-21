DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

/* Create new table with a primary key that auto-increments */
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255),
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);