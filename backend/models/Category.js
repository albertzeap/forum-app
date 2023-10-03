const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  // Add more fields as needed
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
