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
	  return res.json({ error:true,message: "User Not found" });
	}
	if (await bcrypt.compare(password, user.password)) {
	  const token = jwt.sign({ email: user.email, id:user._id, role:user.role}, JWT_SECRET);
  
	  if (res.status(201)) {
		return res.json({token: token, role:user.role });
	  } else {
		return res.json({error:true, message:"error, please try again"});
	  }
	}
	res.json({ error: true, message: "Invalid Password" });
  });

module.exports = app;