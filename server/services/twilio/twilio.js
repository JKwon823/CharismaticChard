const path = require('path');
if (process.env.Twilio_accountSid && process.env.Twilio_authToken) {
  var config = {
    accountSid: process.env.Twilio_accountSid,
    authToken: process.env.Twilio_authToken
  };
} else if (path.isAbsolute('./config')) {
  var config = require('./config.js');
} else {
  var config = require('./config_example.js');
}
var twilio = require('twilio');
var client = new twilio(config.accountSid, config.authToken);




module.exports.sendSms = function(to, message) {
  return client.messages
    .create({
      body: message,
      to: to,
      from: '+17602277616',
    }).then(function(data) {
      console.log('Administrator notified');
    }).catch(function(err) {
      console.error('Could not notify administrator');
      console.error(err);
    });
};
