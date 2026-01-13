// const express = require("express");
// const { sendMessage } = require("../controllers/messageController");
// const router = express.Router();

// router.post("/contact", sendMessage);

// module.exports = router;
const express = require("express");
const sendEmail = require("../services/emailService");
const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // 1. Send email to Owner
    await sendEmail(
      "cherrefera@gmail.com", // replace with your email
      "📩 New Customer Message",
      `
        <h3>New message received from your website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `
    );

    // 2. Send confirmation email to Customer
    await sendEmail(
      email,
      "✅ Thank you for contacting us",
      `
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out! We’ve received your message and will get back to you soon.</p>
        <p>Best regards,<br/>Chernet Refera</p>
      `
    );

    res.status(200).json({ success: true, message: "Message received and emails sent" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error: "Failed to send emails" });
  }
});

module.exports = router;
