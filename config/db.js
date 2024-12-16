//mongodb://localhost:27017/express-js
//'mongodb+srv://paypalajinkya:tHMhpnrM4bYf99dJ@mydb.1e8ak.mongodb.net/express  -->Atlas

const mongoose = require('mongoose');
const color = require('colors');

const connectDB = async() =>
{
    try
    {
        const conn = await mongoose.connect('mongodb+srv://paypalajinkya:tHMhpnrM4bYf99dJ@mydb.1e8ak.mongodb.net/expressjs');

        console.log(`Connected to mongoDB :${conn.connection.host}`.bgGreen);
    } 
    catch (error) 
    {
        console.log(`MongoDb connection error:${error.message}`.bgYellow .white);
        process.exit(1);
    }
}

module.exports = connectDB;

