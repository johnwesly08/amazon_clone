const mongoose = require('mongoose');

// Define a schema for individual items
const itemSchema = new mongoose.Schema({
  images: {
    type: [String],
    default: []
  },
  Name: {
    type: String,
    required: true
  },
  Price: {
    type: String,
    required: true
  },
  Rating: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }
});

// Define a schema for each category (Outfits, Accessories, etc.)
const categorySchema = new mongoose.Schema({
  Outfits: [itemSchema],
  Accessories: [itemSchema],
  Electronics: [itemSchema],
  Laptop: [itemSchema],
  Mobile: [itemSchema]
});

// Create a model from the schema
const Products = mongoose.model('Products', categorySchema);

module.exports = Products;
