import nodemailer from 'nodemailer'




function sendMail(){
// Создание транспортного объекта
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com', // адрес SMTP-сервера
    port: 587, // порт SMTP-сервера
    secure: false, // используется ли SSL/TLS
    auth: {
      user: 'denyysitbelikov@gmail.com', // ваш адрес электронной почты
      pass: 'IB4nWf0NZJO8HA5L' // ваш пароль
    }
  });
  const mailOptions = {
    from: 'denyysbelikov@gmail.com', // адрес отправителя
    to: 'denyysbelikov@gmail.com', // адрес получателя
    subject: 'test', // тема письма
    text: 'test message' // текст письма
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Ошибка при отправке письма:', error);
    } else {
      console.log('Письмо успешно отправлено!', info);
    }
  });
  
}
sendMail()
