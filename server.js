const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./my-backend/config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// Load Task Routes
const taskRoutes = require('./my-backend/routes/taskRoutes');
app.use('/api/tasks', taskRoutes); // Controller-based routing

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
