const mongoose = require('mongoose');

const BookingHotelSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    type:{type:String, required:true, enum:['hotel']},
    hotel:{type: mongoose.Schema.Types.ObjectId, ref: "hotel", required: true},
    totalPrice:{type:Number, required:true},
    roomsPrice:{type:Number, required:true},
    servicesCharge:{type:Number, required:true},
    roomsData:Number,
    persons:Number,
    createdAt:{type:Number},
    modifiedAt:{type:Number},
    tripId:{type: mongoose.Schema.Types.ObjectId, ref: "trip"}
});

const BookingHotel = mongoose.model('bookingHotel', BookingHotelSchema);

module.exports = BookingHotel;