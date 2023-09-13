const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: "cewudzie0@gmail.com",
      pass: "ORPptmDEXnhM5cKQ"
    }
});

const sendEmail =async()=>{
    await transport.sendMail({
        to:'cewudzie0@gmail.com',
        from: 'trialbethel0@gmail.com',
        subject:'Testing mailer',
        html:"<h1>hello I'm still testing email </h1>"
    })
}

sendEmail()