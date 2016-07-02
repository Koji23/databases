var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      // console.log('heloooooooo');
      // console.log(db.retrieve());
      // cb("from models!!!!   ", db.retrieve());
      db.retrieve(function(messages) {
        cb(messages);
      });
    }, // a function which produces all the messages
    post: function (body) {
      console.log('heard from models', body);
      db.insert(body);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

