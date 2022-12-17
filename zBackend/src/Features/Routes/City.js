const express = require('express');
const City = require('../Models/city');

const app = express.Router();

app.get('/', async(req, res)=>{
    let {name} = req.query;

    if(!name){
        name='';
    }
    try{
        const data = await City.find({name:{$regex:name}});
        res.send(data)

    }catch(err){
        res.send({error:true, message:err.message})
    }
})

// adminMiddleWare
app.post('/', async(req, res)=>{
    let {name, state, location, places} = req.body;
    name=name.toLowercase();
    state=state.toLowercase();
    const country = 'India';
    try{
        const newCity = await City.create({name, state, location, places, country});
        
        if(newCity){
            res.send('New City Created Successfully')
        }else{
            res.send('Something Went Wrong, Please try again')
        }

    }catch(err){
        res.send({error:true, message:err.message})
    }
})

module.exports = app;