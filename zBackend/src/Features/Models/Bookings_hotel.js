const mongoose = require('mongoose');

const BookingHotelSchema = new mongoose.Schema({
    user:{type:String, required:true},
    type:{type:String, required:true, enum:['hotel']},
    hotelId:{type: mongoose.Schema.Types.ObjectId, ref: "hotel", required: true},
    totalPrice:{type:Number, required:true},
    roomsPrice:{type:Number, required:true},
    servicesCharge:{type:Number, required:true},
    roomsData:{type:[{
        roomIndex:Number,
        count:Number,
    }],
    required:true},
    adults:{type:Number, required:true},
    children:{type:Number, required:true},
    created:{type:Number},
    modified:{type:Number},
    tripId:{type: mongoose.Schema.Types.ObjectId, ref: "trip"}
});

const BookingHotel = mongoose.model('bookingHotel', BookingHotelSchema);

module.exports = BookingHotel;