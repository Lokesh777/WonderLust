const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name:{type:String, required:true},
    starRating:{type:Number, required:true},
    rating:{
        rate:Number,
        reviews:Number,
    },
    count:Number,
    booked:Number,
    description:{type:String},
    contactInfo:{
        phone:[String],
        emails:[String],
        websiteUrl:String,
        address:String,
        city:{type: mongoose.Schema.Types.ObjectId, ref: "city", required: true,},
        long:{type:Number},
        lat:{type:Number},
    },
    images:[String],
    rooms:[{
        features:[{
            img:String,
            detail:String
        }],
        count:Number,
        booked:Number,
        amenities:[{
            title:String,
            icon:String,
            features:[String]
        }],
        refundable:Boolean,
        payLater:Boolean,
        price:Number,
        realPrice:Number,
        name:String
    }],
    popularAmenities:[
        {
            icon:String,
            title:String,
            points:[String]
        }
    ],
    misc:[
        {
            icon:String,
            title:String,
            points:String
        }
    ],
    nearby:[
        {
            type:{type:String, enum:['airport', 'railwayStation', 'park', 'temple', 'place'], default:'place'},
            title:String,
            dist:String
        }
    ]
});

const Hotel = mongoose.model('hotel', HotelSchema);

module.exports = Hotel;