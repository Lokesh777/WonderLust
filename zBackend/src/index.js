const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>res.send('hello world'));

app.listen(8080,()=> { console.log('server start on http://localhost:8080')})