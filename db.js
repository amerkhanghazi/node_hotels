require('dotenv').config(); 
const mongoose = require('mongoose');


//const mongoURI = process.env.DB_URL_LOCAL;
const mongoURI = process.env.DB_URL;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected mongodb");
});

db.on('error', (err) => {
    console.error('error:', err);
});

db.on('disconnected', () => {
    console.log('disconnected mongodb');
});

module.exports = { db };
