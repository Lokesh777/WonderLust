const express = require('express');
require('dotenv').config();
const MongoDBConnect = require('./Config/MongoDB.js')
const cors = require('cors');


// routes: import
const cityRouter = require('./Features/Routes/City.js');
const flightRouter = require('./Features/Routes/flights.js');
const hotelRouter = require('./Features/Routes/hotel.js');
const tripRouter = require('./Features/Routes/trip.js');
const userRouter = require('./Features/Routes/user')
const loginRouter = require('./Features/Routes/login')
const bookingHotelRouter = require('./Features/Routes/Booking_hotel.js')


const app = express();

// meta functions
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>res.send('hello world'));

// routes;

app.use('/trip', tripRouter);
app.use('/flight', flightRouter);
app.use('/hotel', hotelRouter);
app.use('/city', cityRouter);
app.use('/user', userRouter)
app.use('/login', loginRouter)
app.use('/bookingHotel', bookingHotelRouter);

app.listen(8080,async()=> { 
    await MongoDBConnect();
    console.log('server start on http://localhost:8080')
})