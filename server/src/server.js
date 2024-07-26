const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config(); // For loading environment variables

// Import routes
const userRoutes = require('./routes/userRoutes');
// const audioRoutes = require('./routes/audioRoutes');
// const streamRoutes = require('./routes/streamRoutes');
// const commentRoutes = require('./routes/commentRoutes');

// Create Express app
const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(helmet()); // Secure HTTP headers
app.use(morgan('dev')); // HTTP request logger

// Route integration
// app.use('/api/audios', audioRoutes);
// app.use('/api/streams', streamRoutes);
// app.use('/api/comments', commentRoutes);

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Local MongoDB URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

app.use('/api/users', userRoutes);


// 404 Not Found handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export app for testing
