const nodemailer = require("nodemailer");
const template = require("./template");
const response = require("../../network/response");
exports.sendEmail = (req, res, name, email, career) => {
  const mailOptions = {
    from: "info@uhg.edu.py",
    to: email,
    subject: `Hola ${name}! Universidad Hispano Guarani`,
    html: template.emailTemplate(name, career),
  };

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail(mailOptions);
};
