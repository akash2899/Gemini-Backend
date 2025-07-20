// routes/chatroomRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {
  createChatroom,
  getChatrooms
} = require('../controllers/chatroomController');

// Protect routes
router.post('/', authMiddleware, createChatroom);
router.get('/', authMiddleware, getChatrooms);

module.exports = router;
