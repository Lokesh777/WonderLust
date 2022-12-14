const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name:{type:String, required:true},
    starRating:{type:Number, required:true},
    reviews:{
        type:[{
            rating:{type:Number, required:true},
            comment:String
        }],
        required:true
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
        long:{type:Number },
        lat:{type:Number},
    },
    images:[String],
    rooms:[{
        size:Number,
        beds:{
            count:Number,
            type:String
        },
        maxPersons:Number,
        count:Number,
        booked:Number,
        images:[String],
        amenities:{
            bathroom:[String],
            bedroom:[String],
            foodAndDrink:[String],
            other:[String]
        },
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