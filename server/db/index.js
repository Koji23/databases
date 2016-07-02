
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connect = function(data) {

  var mysql = require('mysql');
  // console.log('heard from connect', body);
  var connection = mysql.createConnection({
    host: 'localhost',
    // port: 3000,
    user: 'root',
    password: '',
    database: 'chat'
  });

  // console.log(connection);

  console.log("ATTEMPTING WRITE TO DATABASE");
  connection.query('INSERT INTO messages (id, user, message, room) VALUES (2, "jordan", "yo", "lobby");', function(err, res) {
    console.log(err, res);
  });

  connection.end();

};


//insert into ballerz(name, height,position) values ('jdan', '6ft', 'center')