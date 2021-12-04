DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

USE mvp;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE goals (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  userid INT,
  goalName VARCHAR(50),
  frequency VARCHAR(50),
  lastComplete VARCHAR(50) DEFAULT NULL,
  FOREIGN KEY (userid) REFERENCES users(id)
);

 insert into users (username) values ('Annie'), ('Connor'), ("R'el");

 insert into goals (userid, goalname, frequency, lastcomplete)
  values
  (1, 'drink one Coke Zero','daily', NULL),
  (1, 'go outside', 'daily', NULL),
  (1, 'talk to Connor', 'daily', NULL),
  (2, 'take a shot', 'daily', NULL),
  (2, '50 pushups', 'daily', NULL),
  (2, 'talk to Annie','daily', NULL),
  (3, 'take three photos','daily', NULL),
  (3, 'walk home from work','daily', NULL),
  (3, 'listen to a podcast','daily', NULL);