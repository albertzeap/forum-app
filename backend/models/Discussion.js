const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  createdAt: { type: Date, default: Date.now },
  // Add more fields as needed
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
