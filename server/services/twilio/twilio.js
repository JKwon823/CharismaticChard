require('dotenv').config();
var config = require('./config.js');
var twilio = require('twilio');
var client = new twilio(config.accountSid || process.env.Twilio_accountSid, config.authToken || process.env.Twilio_authToken);




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
