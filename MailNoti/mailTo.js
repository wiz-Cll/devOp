(function() {
  var mailTo, nodemailer;

  nodemailer = require('nodemailer').mail;

  mailTo = function(option) {
    if (!option.from) {
      option.from = 'foo@bar.com';
    }
    console.log(option);
    return nodemailer(option);
  };

  exports.mailTo = mailTo;

}).call(this);
