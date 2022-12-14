const express = require('express');

const app = express.Router();

const User = require('../Models/User')



app.post("/register", async(req,res)=>{
	const {fname,lname,email,password}=req.body;
	try {
		await User.create({
			fname,
			lname,
			email,
			password,
			
		});
		res.send({status: "successfull"});
	} catch (err){
		res.send({status: err.message})
	}
})

		module.exports = app;