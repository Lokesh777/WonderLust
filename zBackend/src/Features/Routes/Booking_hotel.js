const express = require('express');
const Booking_Hotel = require('../Models/Bookings_hotel')
const app = express.Router();


// admin middleware
app.get('/', async(req, res)=>{
    try{
        const data = await Booking_Hotel.find();
        res.send(data);
    }catch(err){
        res.send({error:true, message:err.message})
    }
})

// auth middleware || admin middleware
app.get('/user/:userid', async(req, res)=>{
    const userId = req.params.userid;
    try{
        const data = await Booking_Hotel.find({user:userId});
        res.send(data);
    }catch(err){
        res.send({error:true, message:err.message})
    }
})

// auth middleware || admin middleware
app.post('/', async(req, res)=>{
    const userId = req.headers.userid;
    const {hotelId, totalPrice, roomsData, adults, children, tripId} = req.body;
    try{
        
        res.send(data);
    }catch(err){
        res.send({error:true, message:err.message})
    }
})

module.exports = app;