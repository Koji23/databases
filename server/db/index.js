
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.insert = function(data) {

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

  var insertQuery = 'INSERT INTO messages ( user, message, room) VALUES (' + JSON.stringify(data.username) + ', ' + JSON.stringify(data.text) + ', ' + JSON.stringify(data.roomname) + ');';
  connection.query(insertQuery, function(err, res) {
    console.log(err, res);

  });

  connection.end();

};

exports.retrieve = function(cb) {
  var mysql = require('mysql');
  // console.log('heard from connect', body);
  var connection = mysql.createConnection({
    host: 'localhost',
    // port: 3000,
    user: 'root',
    password: '',
    database: 'chat'
  });

  var insertQuery = 'SELECT * FROM messages';
  
  var sqlData;
  connection.query(insertQuery, function(err, res, fields) {
    // console.log("error: ", err, "res: ", res, 'fields: ', fields, 'extra stuff? ', stuff);
    sqlData = res;
    sqlData = sqlData.map(function(rowData) {
      return {
        username: rowData.user,
        message: rowData.message,
        room: rowData. roommname
      };
    });
    var messages = {results: sqlData};
    // console.log('!!!!!!!!!!!!!!!!!!!:::', messages);
    cb(messages);
    // res.send(JSON.stringify(messages));
  });

  // console.log('!!!!!!!!!!!sqlData: ', sqlData);
};

//insert into ballerz(name, height,position) values ('jdan', '6ft', 'center')













// [ RowDataPacket { id: 1, user: 'anonymous', message: 'hello', room: 'lobby' },
//   RowDataPacket { id: 2, user: 'anonymous', message: 'hello', room: 'lobby' },
//   RowDataPacket { id: 3, user: 'anonymous', message: 'hello', room: 'lobby' },
//   RowDataPacket { id: 4, user: 'anonymous', message: 'hola', room: 'lobby' },
//   RowDataPacket { id: 5, user: 'anonymous', message: 'hello', room: 'lobby' },
//   RowDataPacket { id: 6, user: 'anonymous', message: 'hola', room: 'lobby' },
//   RowDataPacket { id: 7, user: 'anonymous', message: 'sdafsdaf', room: 'lobby' },
//   RowDataPacket { id: 8, user: 'anonymous', message: 'hello', room: 'lobby' } ]


//   {results:[{username:'jordan', message: 'hi!', roomname: 'lobby'}