const express = require('express');
const authMiddleware = require('../Middlewares/AuthmiddleWare');
const Trip = require('../Models/Trips');

const app = express.Router();

app.get(('/'), authMiddleware, async(req, res)=>{
    const {userId} = req.headers;

    try{
        const data = await Trip.find({user:userId});
        res.send(data)
    }catch(err){
        return res.send({error:true, message:err.message});
    }
})

app.post(('/'), authMiddleware, async(req, res)=>{
    const {userId} = req.headers;
    let {description, name} = req.body;

    if(!description){
        description='NA';
    }

    try{
        const createdAt = new Date();
        const modifiedAt = new Date();
        const data = await Trip.create({name, user:userId, description, createdAt, modifiedAt});
        return res.send({message:"New Trip Created"});
    }catch(err){
        return res.send({error:true, message:err.message});
    }
})

app.get(('/:tripId'), authMiddleware, async(req, res)=>{
    const {tripId} = req.params;
    const {userId} = req.headers;

    try{
        const trip = await Trip.findById(tripId);
        if(!trip){
            return res.send({error:true, message:"could not find trip"})
        }
        if(trip.user !==userId){
            return res.send({error:true, message:"Unathorized trip"})
        }
        res.send(trip);
    }catch(err){
        return res.send({error:true, message:true});
    }
})
module.exports = app;