import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill in required fields." });
    }

    const newMessage = new Contact({ name, email, phone, service, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact submission error:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

export default router;
