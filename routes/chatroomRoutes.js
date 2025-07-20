// routes/chatroomRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { askGemini } = require("../services/geminiService");

const {
  createChatroom,
  getChatrooms
} = require('../controllers/chatroomController');

const { sendMessage } = require('../controllers/chatroomController');
router.post('/chatroom/:id/message', authMiddleware, sendMessage);


// Protect routes
router.post('/', authMiddleware, createChatroom);
router.get('/', authMiddleware, getChatrooms);

module.exports = router;
