var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('doing a get');
      models.messages.get(function(messages) {
        res.send(JSON.stringify(messages));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log("heard from controllers!!!!!!!!!!!!!!");
      var body = req.body;     
      models.messages.post(body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

