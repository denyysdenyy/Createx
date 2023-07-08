import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import cors from 'cors'

const app = express();

const PORT = process.env.PORT || 4050;

app.use(express.json());
app.use(cors()); 


app.post('/send-email',(req,res)=>{
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
    subject: `Welcome to our family , ${req.body.username}`,
    text: `Hello ${req.body.username}`
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Ошибка при отправке письма:', error);
    } else {
      console.log('Письмо успешно отправлено!', info);
    }
  });
});






app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
