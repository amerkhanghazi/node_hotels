// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
connectDB(); // ✅ this will now work!
const itemRoutes = require('./routes/MenuItemRoutes');
const personRoutes = require('./routes/personRoutes');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/menu', itemRoutes);
app.use('/person', personRoutes);
console.log('✅ Person route loaded');

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
