/* eslint-disable no-console */
require('dotenv').config()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILER_SENDER_EMAIL,
    pass: process.env.MAILER_SENDER_PASSWORD,
  }
});

const mailOptions = {
  from: process.env.MAILER_SENDER_EMAIL,
  to: process.env.MAILER_SEND_TO_EMAIL,
  subject: 'New properties!',
  // text: 'That was easy!'
};

module.exports = function makeEmailService() {
  return async function emailService(sortedPropertyArray) {
    transporter.sendMail({ ...mailOptions, text: JSON.stringify(sortedPropertyArray) }, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}