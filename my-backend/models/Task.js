// models/Task.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task title is required'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  dueDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Create and export the model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
