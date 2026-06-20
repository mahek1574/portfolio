require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Contact = require("./models/Contact");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const getTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  
  if (!user || !pass || user.includes("placeholder") || pass.includes("placeholder")) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });
};


app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please provide all required fields (name, email, message)." });
    }

  
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("Saved new contact to MongoDB database:", newContact._id);

  
    const transporter = getTransporter();
    let emailSentStatus = false;

    if (transporter) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
          subject: `Portfolio Contact Form: Message from ${name}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Nodemailer: Email notification sent successfully.");
        emailSentStatus = true;
      } catch (emailErr) {
        console.error("Nodemailer: Failed to send email:", emailErr.message);
      }
    } else {
      console.log("Nodemailer: Email transporter not configured (placeholder credentials found). Email skipped.");
    }

    return res.status(201).json({
      success: true,
      message: "Message submitted and stored successfully!",
      emailSent: emailSentStatus,
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return res.status(500).json({ error: "An error occurred while saving your message." });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
