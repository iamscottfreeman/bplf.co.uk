import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const contactEmail = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 465,
      secure: true,
      auth: {
        user: 'apikey',
        pass: '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'
      }
    });

    await new Promise((resolve, reject) => {
      contactEmail.verify((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message.replace(/(?:\r\n|\r|\n)/g, '<br>');

    const mailOptions = {
      from: 'email@scottfreeman.net',
      to: 'email@scottfreeman.net',
      cc: email,
      replyTo: `${name} <${email}>`,
      subject: 'BPF Website Contact Form Submission',
      html: `
           <p><b>From:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b><br />${message}</p>
      `
    };

    await new Promise((resolve, reject) => {
      contactEmail.sendMail(mailOptions, function (error, info) {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        status: 'success'
      })
    );
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}
