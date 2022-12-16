const express = require('express');

const app = express.Router();
const bcrypt = require('bcryptjs')

const User = require('../Models/User')



app.post("/register", async (req, res) => {
	const { fname, lname, email, password } = req.body;
     console.log(fname,lname,email,password)
	const encryptedPassword = await bcrypt.hash(password, 10);
	try {
	  const oldUser = await User.findOne({ email });
  
	  if (oldUser) {
		return res.json({ error: "User_Exists" });
	  }
	  await User.create({
		fname,
		lname,
		email,
		password: encryptedPassword,
	  });
	  res.send({ status: "ok" });
	} catch (error) {
	  res.send({ status: error.message });

	}
  });
  

module.exports = app;