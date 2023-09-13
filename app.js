const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bf1da955ebf9d6",
      pass: "e95ee819e78047"
    }
});

const sendEmail =async()=>{
    await transport.sendMail({
        to:'cewudzie0@gmail.com',
        from: 'abc@gmail.com',
        subject:'Testing mailer',
        html:"<h1>hello I'm still testing email </h1>"
    })
}

sendEmail()