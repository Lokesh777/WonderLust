const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    location:{
        departure:{type: mongoose.Schema.Types.ObjectId, ref: "city", required: true,},
        destination:{type: mongoose.Schema.Types.ObjectId, ref: "city", required: true,},
    },
    time:{
        departure:{type:String, required:true},
        arrival:{type:String, required:true}
    },
    duration:{type:String, required:true},
    company:{
        logo:String,
        name:String
    },
    stops:{type:Number, required:true, default:0},
    class:{type:String, enum:['first', 'business', 'economy'], required:true},
    other:{
        carryOnBag:{type:Boolean, required:true, default:false},
        refund:{
            amount:Number,
            time:String
        }
    },
    count:Number,
    booked:Number,

});

const Flight = mongoose.model('flight', FlightSchema);

module.exports = Flight;