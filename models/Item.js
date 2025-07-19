// models/MenuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: {
    type: String,
    enum: ['starter', 'main course', 'dessert', 'beverage'],
    default: 'main course'
  },
  isAvailable: { type: Boolean, default: true }
});
//comment test
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
