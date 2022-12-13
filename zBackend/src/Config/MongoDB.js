const mongoose = require("mongoose");
const DB_URL = process.env.MONGODB_URL;
mongoose.set('strictQuery', false);


const connect = async () => mongoose.connect(DB_URL);
module.exports = connect; 