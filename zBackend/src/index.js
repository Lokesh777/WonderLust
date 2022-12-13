const express = require('express');
require('dotenv').config();
const MongoDBConnect = require('./Config/MongoDB.js')
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>res.send('hello world'));

app.listen(8080,async()=> { 
    await MongoDBConnect();
    console.log('server start on http://localhost:8080')
})