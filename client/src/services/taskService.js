// src/services/taskService.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/tasks', // ✅ Update to your backend URL if needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to every request if it exists
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
