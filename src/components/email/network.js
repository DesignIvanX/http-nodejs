const nodemailer = require("nodemailer");
const template = require("./template");
const response = require("../../network/response");

exports.sendEmail = (req, res, name, email, career) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = template.emailTemplate(name, career);
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@uhg.edu.py",
        pass: "iOAyhAbqEB",
      },
    });
    const emailOptions = {
      from: "info@uhg.edu.py",
      to: email,
      replyTo: email,
      subject: `Hola ${name}! Te saluda la Universidad Hispano Guarani`,
      html: htmlEmail,
    };
    transporter
      .sendMail(emailOptions)
      .then((data) => {
        console.log(data);
        response.success(req, res, data, 200);
      })
      .catch((err) => {
        console.log(err);
        response.error(req, res, err, 500, "Error");
      });
  });
};
