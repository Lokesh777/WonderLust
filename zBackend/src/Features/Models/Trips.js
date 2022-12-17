const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    name:{type:String, required:true},
    user:{type:String, required:true},
    types:{type:String, required:true, enum:['default', 'special']},
    createdAt:{type:Number},
    modifiedAt:{type:Number},
});

const Trip = mongoose.model('trip', TripSchema);

module.exports = Trip;