var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // var body = '';
      // req.on('data', function(chunk) {
      //   body += chunk;
      // });
      // req.on('end', function() {
      //   models.messages.get(body);
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // var body = '';
      // req.on('data', function(chunk) {
      //   body += chunk;
      // });
      // req.on('end', function() {
      //   models.messages.post(body);
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

