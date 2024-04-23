const nodemailer = require('nodemailer');

const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})


const mailOptions = {
    from: 'ramihacker58@gmail.com',
    to: 'mouhammedalifaidi@gmail.com',
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email sent from Node.js using Nodemailer.'
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
