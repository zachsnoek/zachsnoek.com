const nodemailer = require("nodemailer");

const sendEmail = async function (options) {
    const transporter = nodemailer.createTransport({
        service: process.env.SMTP_SERVICE,
        host: process.env.SMTP_HOST,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const message = {
        from: process.env.SMTP_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: `Contact Inquiry`,
        text: `Reply to ${options.name}: ${options.fromEmail}\n\n${options.message}`,
    };

    const info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
