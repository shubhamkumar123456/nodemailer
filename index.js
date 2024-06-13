const express = require('express');
const app = express();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const connectToDb = require('./db')
connectToDb()

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'clboy768@gmail.com',
      pass: 'uezljwlglwvyviml', //go to google setting and then app password
    },
  });

  const mailOptions = {
    from: 'clboy768@gmail.com',
    to: email,
    subject: 'Email from React App',
    text: `From: ${name} (${email})\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    res.status(500).send({msg:'Error sending email',error});
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});