const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./my-backend/config/db');

dotenv.config();         // Load env variables
connectDB();             // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
