const Emailer = require("google-zoho-node-mailer");

exports.sendEmail = (req, res, name, email, career) => {
  Emailer.UseZohoSMTPTransport({
    username: process.env.USER,
    password: process.env.PASSWORD,
  });

  var message = new Emailer.Email({
    from: '"Universidad Hispano Guarani" <info@uhg.edu.py>',
    to: email,
    subject: `Hola ${name}! Universidad Hispano Guarani`,
    html: `<b>Time:</b> <p>email body</p>`,
  });

  message.send(function (status) {
    console.log(status);
  });
};
