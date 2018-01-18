'use strict';
const nodemailer = require('nodemailer');
var pkg = "new"; // the value of this variable will be changed based on information obtained from database
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'random12394123@gmail.com',
        pass: '123456789094'
    }
});

let mailOptions = {};

// Put following code under an if statement which checks the due date of a package 
if(pkg == "due"){
        mailOptions = {
        from: '"Random Guy" <random12394123@gmail.com>', // sender address
        to: 'nishantsahni1994@gmail.com', // list of receivers
        subject: 'Hello :)',
        text: 'Your action is due!',
        html: '<b>Your action is due!</b>'
    };
}

if(pkg == "new"){
        mailOptions = {
        from: '"Random Guy" <random12394123@gmail.com>', // sender address
        to: 'nishantsahni1994@gmail.com', // list of receivers
        subject: 'New arrival!',
        text: 'The following is a new arrival: ',
        html: '<img src="https://s-media-cache-ak0.pinimg.com/originals/71/7f/68/717f68dd009a31a98e70aa56cb59a433.jpg" alt="Product" style="width:304px;height:228px;">'
    };
}


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});