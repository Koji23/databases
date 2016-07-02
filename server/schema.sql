CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (
  /* Describe your table here.*/
  id int, 
  user varchar(20), 
  message varchar(140), 
  room varchar(20),
  PRIMARY KEY (id)
);

-- INSERT INTO messages (user, message, room) 
-- VALUES ('jordan', 'hello', 'main');
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

