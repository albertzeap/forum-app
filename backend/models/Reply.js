const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  discussion: { type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' },
  createdAt: { type: Date, default: Date.now },
  // Add more fields as needed
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
