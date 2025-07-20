const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const jwt = require('jsonwebtoken');
let otpStore = {}; // in-memory OTP store

exports.signup = async (req, res) => {
  const { mobile } = req.body;
  if (!mobile) return res.status(400).json({ message: 'Mobile number required' });

  try {
    let user = await User.findOne({ mobile });
    if (!user) user = await User.create({ mobile });

    res.status(201).json({ message: 'User registered or already exists', user });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};



exports.sendOtp = async (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({ message: 'Mobile number is required' });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    // Store or update the user in DB with OTP
    const user = await User.findOneAndUpdate(
      { mobile },
      { otp },
      { upsert: true, new: true }
    );

    // Respond with OTP (mocked)
    return res.status(200).json({
      message: 'OTP sent (mocked)',
      mobile,
      otp,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};


exports.verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;

  if (!mobile || !otp) {
    return res.status(400).json({ message: 'Mobile and OTP are required' });
  }

  try {
    const user = await User.findOne({ mobile });

    if (!user || user.otp !== otp) {
      return res.status(401).json({ message: 'Invalid OTP or mobile number' });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, mobile: user.mobile }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    // Clear OTP after verification
    user.otp = null;
    await user.save();

    return res.status(200).json({
      message: 'OTP verified successfully',
      token,
    });

  } catch (error) {
    return res.status(500).json({ message: 'OTP verification failed', error: error.message });
  }
};