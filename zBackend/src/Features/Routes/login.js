const express = require('express');

const app = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const bcrypt = require('bcryptjs')

const JWT_SECRET = 'SERCRET1234'

app.post("/login", async (req, res) => {
	const { email, password } = req.body;
  
	const user = await User.findOne({ email });
	if (!user) {
	  return res.json({ error: "User Not found" });
	}
	if (await bcrypt.compare(password, user.password)) {
	  const token = jwt.sign({ email: user.email, id:user._id }, JWT_SECRET);
  
	  if (res.status(201)) {
		return res.json({ status: "ok", Token: token });
	  } else {
		return res.json({ error: "error" });
	  }
	}
	res.json({ status: "failed", error: "Invalid Password" });
  });


		module.exports = app;