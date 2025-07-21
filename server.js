// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const itemRoutes = require('./routes/ItemR');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/menu', itemRoutes);

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
