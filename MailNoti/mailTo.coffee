nodemailer = require('nodemailer').mail

mailTo = (option) ->
    if not option.from
        option.from = 'foo@bar.com'
    console.log option
    nodemailer option
# nodemailer({
#     from: "Fred Foo ✔ <foo@blurdybloop.com>", 
#     to: "bar@blurdybloop.com, baz@blurdybloop.com", 
#     subject: "Hello ✔",
#     text: "Hello world ✔",
#     html: "<b>Hello world ✔</b>"
# });

exports.mailTo =  mailTo;