const express = require('express');
const dotenv = require('dotenv');
const hospitals = require('./routes/hospitals');
const connectDB = require('./config/db')


// Load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

const app=express();

app.use(express.json());

app.use('/api/v1/hospitals', hospitals);

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, ' mode on port ', PORT));

process.on('unhandledRejection',(err,promise) => {
    console.log(`Error: ${err.message}`);
    // close server & exit process
    server.close(() => process.exit(1));
})