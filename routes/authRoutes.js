const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { signup, sendOtp, verifyOtp } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);



router.get('/me', protect, async (req, res) => {
  res.json({
    message: 'Protected route accessed!',
    user: req.user,
  });
});
module.exports = router;
