import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "josh@j0w0.com",
      from: "josh@j0w0.com",
      subject: "j0w0 Website Contact Form",
      html: `<p>
        Name: ${req.body.fullName}<br />
        Email: ${req.body.email}<br />
        Message: ${req.body.message}
      </p>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error: error.message,
    });
  }

  return res.status(200).json({
    error: "",
  });
}

export default sendEmail;
