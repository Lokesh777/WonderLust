const express = require('express');
const Booking_Hotel = require('../Models/Bookings_hotel')
const Hotel = require('../Models/Hotel.js')
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
    const {hotelId, totalPrice,roomsPrice, roomsData,servicesCharge, persons, tripId} = req.body;
    const createdAt=new Date()
    const modifiedAt=new Date()
    try{
        const hotel = await Hotel.findById(hotelId);

        const calPrice = hotel.rooms[roomsData].realPrice*persons;
        
        if(calPrice!==roomsPrice){
            return res.send({error:true, message:'pricing mismatched'});
        }
        const newBooking = await Booking_Hotel.create({user:userId, hotelId, totalPrice, roomsPrice, servicesCharge,roomsData,persons,tripId,createdAt,modifiedAt, type:'hotel'});



        if(newBooking){
            return res.send('Booking Created Successfully');
        }
        return res.send({error:true, message:"Something went wrong"});
    }catch(err){
        return res.send({error:true, message:err.message})
    }
})

module.exports = app;