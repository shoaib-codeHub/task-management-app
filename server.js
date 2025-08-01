// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./my-backend/config/db');

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', require('./my-backend/routes/taskRoutes'));
app.use('/api/auth', require('./my-backend/routes/userRoutes'));

// Default Route
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
