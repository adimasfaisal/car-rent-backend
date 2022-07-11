const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: Number,
    color: String,
    type: String,
    seat: Number,
    license_number: { type: String, required: true },
    image: String,
    price: Number
});

const Car = module.exports = mongoose.model('Car', carSchema);

module.exports.get = (callback, limit) => {
    Car.find(callback).limit(limit);
}