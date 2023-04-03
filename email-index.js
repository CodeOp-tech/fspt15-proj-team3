import HTML_TEMPLATE from "./email-template.js"
import SENDMAIL from "./email.js"

const message = "Hi there, you were emailed me through nodemailer"

const options = {
    from: "melecouvreur@gmail.com", // sender address
    to: "melecouvreur@gmail.com", // receiver email
    subject: "Send email in Node.JS with Nodemailer using Gmail account", // Subject line
    text: message,
    html: HTML_TEMPLATE(message),
}

// send mail with defined transport object and mail options
SENDMAIL(options, (info) => {
    console.log("Email sent successfully");
    console.log("MESSAGE ID: ", info.messageId);
});