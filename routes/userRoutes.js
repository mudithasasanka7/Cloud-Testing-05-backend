const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create user
router.post('/add', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Name and email required" });
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'User added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
