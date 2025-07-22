// db.js
require('dotenv').config(); 
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //const mongoURI = process.env.DB_URL_LOCAL;
    const mongoURI = process.env.DB_URL;
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("✅ Connected to MongoDB");

  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
