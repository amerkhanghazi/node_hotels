    const mongoose = require('mongoose');

    // Define the MongoDB connection URI
    const mongoURI = 'mongodb://localhost:27017/myhotel'; 
    // Replace 'your_database_name' with your actual database name

    // Connect to MongoDB
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,      // Recommended for parsing connection string
        useUnifiedTopology: true    // Recommended for new server discovery and monitoring engine
    })
    
    const db = mongoose.connection;

    db.on('connected' , ()=>{console.log("connected mongodb")});

    db.on('error' , ()=>{console.error('error:',err)});

    db.on('disconnected',()=>{console.log('disconndcted mongodb')});

    module.exports = {db};