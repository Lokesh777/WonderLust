const mongoose = require('mongoose');
const {states} = require('../../Utils/data.js')

const CitySchema = new mongoose.Schema({
    name:{type:String, required:true, unique:true},
    state:{type:String, required:true, enum:states},
    country:{type:String, enum:['India']},
    location:{type:{
        lat:Number,
        long:Number
    }},
    places:[String]
});

const City = mongoose.model('city', CitySchema);

module.exports = City;