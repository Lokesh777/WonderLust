const mongoose = require('mongoose');

const BookingHotelSchema = new mongoose.Schema({
    user:{type:String, required:true},
    type:{type:String, required:true, enum:['hotel']},
    typeId:{type: mongoose.Schema.Types.ObjectId, ref: "hotel", required: true},
    created:{type:Number},
    modified:{type:Number},
    trip:{type: mongoose.Schema.Types.ObjectId, ref: "trip"}
});

const BookingHotel = mongoose.model('bookingHotel', BookingHotelSchema);

module.exports = BookingHotel;