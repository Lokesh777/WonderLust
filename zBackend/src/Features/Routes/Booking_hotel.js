const express = require('express');
const Booking_Hotel = require('../Models/Bookings_hotel')
const Hotel = require('../Models/Hotel.js')
const app = express.Router();
const AuthmiddleWare = require('../Middlewares/AuthmiddleWare');
const authMiddleware = require('../Middlewares/AuthmiddleWare');


// admin middleware
app.get('/', async(req, res)=>{
    try{
        const data = await Booking_Hotel.find().sort({modifiedAt:-1}).populate([{path:"hotel", select:{name:true}}]);;
        res.send(data);
    }catch(err){
        res.send({error:true, message:err.message})
    }
})

// auth middleware || admin middleware
app.get('/user/',AuthmiddleWare,async(req, res)=>{
    const userId = req.headers.userId;
    try{
        const data = await Booking_Hotel.find({user:userId}).populate([{path:"hotel", select:{name:true}}]);
        console.log('data')
        res.send(data);
    }catch(err){
        res.send({error:true, message:err.message})
    }
})

// auth middleware || admin middleware
app.post('/', authMiddleware, async(req, res)=>{
    const {userId} = req.headers;
    const {hotelId, totalPrice,roomsPrice, roomsData,servicesCharge, persons, tripId} = req.body;
    const hotel=hotelId
    const createdAt=new Date()
    const modifiedAt=new Date()
    try{
        const newhotel = await Hotel.findById(hotel);

        const calPrice = newhotel.rooms[roomsData].realPrice*persons;
        
        if(calPrice!==roomsPrice){
            return res.send({error:true, message:'pricing mismatched'});
        }
        
        const newBooking = await Booking_Hotel.create({user:userId, hotel, totalPrice, roomsPrice, servicesCharge,roomsData,persons,tripId,createdAt,modifiedAt, type:'hotel'});



        if(newBooking){
            return res.send('Booking Created Successfully');
        }
        return res.send({error:true, message:"Something went wrong"});
    }catch(err){
        return res.send({error:true, message:err.message})
    }
})

module.exports = app;