const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cheeseSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    image: String
});

module.exports = mongoose.model('Cheese', cheeseSchema);