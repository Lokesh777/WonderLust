const mongoose = require('mongoose');

const BookingFlightSchema = new mongoose.Schema({
    user:{type:String, required:true},
    type:{type:String, required:true, enum:['flight']},
    typeId:{type: mongoose.Schema.Types.ObjectId, ref: "flight", required: true},
    created:{type:Number},
    modified:{type:Number},
    trip:{type: mongoose.Schema.Types.ObjectId, ref: "trip"}
});

const BookingFlight = mongoose.model('bookingFlight', BookingFlightSchema);

module.exports = BookingFlight;