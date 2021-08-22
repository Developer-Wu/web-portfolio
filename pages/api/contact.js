import { createTransport } from "nodemailer"
import { GiConsoleController } from "react-icons/gi"

export default async function Contact(req, res) {
    let transporter = createTransport({
        host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
    }})

    const mailData = {
        from: 'developerdanwu@gmail.com',
        to: 'developerdanwu@gmail.com',
        subject: `Message From ${req.body.fName} ${req.body.lName}`,
        text: `Name:${req.body.fName} ${req.body.lName}
        \nreturn Email: ${req.body.email}
        \nreason: ${req.body.reason}
        \nMessage: ${req.body.message}`,
       }

    const customerMailData = {
        from: "developerdanwu@gmail.com",
        to: req.body.email,
        subject: `Thank you for messaging Developer Dan Wu!`,
        text: `Hi, ${req.body.fName}! Thank you for messaging me, I have now received your message and will reply 
        to you as soon as possible!
        \n
        Dan
        \n
        Your Message:\n
        First Name: ${req.body.fName}\n
        Last Name: ${req.body.lName}\n
        Reason: ${req.body.reason}\n
        Message:${req.body.message}`
    }

    transporter.sendMail(customerMailData, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(info)
        }
    })
       transporter.sendMail(mailData, (err, info)=> {
        if(err) {
           console.log(err)

        }
        else {
            console.log(info)
        }
      })

res.status(200).send()
}

