const sgMail = require('@sendgrid/mail');

async function sendEmail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API);

  try {
    const email = req.body.email;
    const name = req.body.name;
    const verifiedEmailAddress = 'email@scottfreeman.net';
    const subject = 'BPF Website Contact Form Submission';
    const message = req.body.message.replace(/(?:\r\n|\r|\n)/g, '<br>');

    await sgMail.send({
      to: verifiedEmailAddress,
      from: verifiedEmailAddress,
      replyTo: `${name} <${email}>`,
      subject,
      text: req.body.message,
      html: `
          <p><b>From:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b><br />${message}</p>
      `
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
