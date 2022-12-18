const mongoose = require('mongoose');

const userDetailsScehma = new mongoose.Schema(
	{
		fname: String,
		lname:String,
		email:{type:String, unique:true},
		password:String,
		role:{type:String, required:true, enum:['user', 'admin']}		
	},
	{
		// collation: "user",
	}
)



module.exports = mongoose.model("user",userDetailsScehma)