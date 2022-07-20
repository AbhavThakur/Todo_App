import { createTransport } from 'nodemailer';

export const sendMail = async (email, subject, message) => {
  const transport = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER, // Sender address
    to: email, // List of recipients
    subject: subject, // Subject line
    html: `<h2 style="color:#0a0a0a;">${message}</h2>`,
    // text: 'Hello People!, Welcome to Bacancy!', // Plain text body
    // attachments: [{ filename: 'profile.png', path: './images/profile.png' }],
  };

  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
