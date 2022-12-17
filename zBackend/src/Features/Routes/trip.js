const express = require('express');
const Trip = require('../Models/Trips');

const app = express.Router();

app.get(('/user/:userId'), async(req, res)=>{
    const {userId} = req.params;

    try{
        const data = await Trip.find({user:userId});
        res.send(data)
    }catch(err){
        return res.send({error:true, message:err.message});
    }
})

app.post(('/user/:userId'), async(req, res)=>{
    const {userId} = req.params;
    const {types, name} = req.body;

    if(types!=='default' || types!=='special'){
        return res.send({error:true, message:"invalid types"});
    }

    try{
        const createdAt = new Date();
        const modifiedAt = new Date();
        const data = await Trip.create({name, user:userId, types, createdAt, modifiedAt});
        return res.send("New Trip Created");
    }catch(err){
        return res.send({error:true, message:err.message});
    }
})

app.get(('/trip/:tripId'), async(req, res)=>{
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