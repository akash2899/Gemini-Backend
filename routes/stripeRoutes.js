// routes/stripeRoutes.js
const express = require('express');
const router = express.Router();
const { createCheckoutSession } = require('../controllers/stripeController');
const auth = require('../middleware/auth');

router.post('/subscribe/pro', auth, createCheckoutSession);

module.exports = router;
