// controllers/chatroomController.js
const Chatroom = require("../models/chatroomModel");
const { askGemini } = require("../services/geminiService");

// Create a new chatroom
exports.createChatroom = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id; // coming from JWT middleware

    const chatroom = await Chatroom.create({
      name,
      user: userId,
    });

    res.status(201).json({ message: "Chatroom created", chatroom });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating chatroom", error: err.message });
  }
};

// Get all chatrooms of logged-in user
exports.getChatrooms = async (req, res) => {
  try {
    const userId = req.user.id;

    const chatrooms = await Chatroom.find({ user: userId });

    res.status(200).json({ chatrooms });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching chatrooms", error: err.message });
  }
};
exports.sendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const userId = req.user.id;

    // Save user message (you can skip saving to DB for now)
    console.log(`💬 User says: ${message}`);

    // Ask Gemini
    const geminiReply = await askGemini(message);

    // Send back Gemini's reply
    res.status(200).json({
      success: true,
      userMessage: message,
      geminiResponse: geminiReply,
    });
  } catch (err) {
    console.error("❌ Error in sendMessage:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
};
