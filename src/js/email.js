import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  secure: false,
  auth: {
    user: 'denyysitbelikov@gmail.com',
    pass: 'IB4nWf0NZJO8HA5L'
  }
});
const mailOptions = {
  from: req.body.email,
  to: req.body.email,
  subject: req.body.message,
  text: req.body.message
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Ошибка при отправке письма:', error);
  } else {
    console.log('Письмо успешно отправлено!', info);
  }
});