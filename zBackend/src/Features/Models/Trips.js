const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    user:{type:String, required:true},
    created:{type:Number},
    modified:{type:Number},
});

const Trip = mongoose.model('trip', TripSchema);

module.exports = Trip;