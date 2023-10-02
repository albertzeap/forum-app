const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection URL
const mongoURI = 'mongodb+srv://team5:team5rocks@cluster0.i0xzt0l.mongodb.net/Forum?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
  // Additional setup or start your express server here
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
