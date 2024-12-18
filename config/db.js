
const mongoose = require('mongoose');
const color = require('colors');
require('dotenv').config();
const connectDB = async() =>
{
    try
    {
        const mongoDBConn = process.env.DB_URL;
        const conn = await mongoose.connect(mongoDBConn);

        console.log(`Connected to mongoDB :${conn.connection.host}`.bgMagenta);
    } 
    catch (error) 
    {
        console.log(`MongoDb connection error:${error.message}`.bgYellow .white);
        process.exit(1);
    }
}

module.exports = connectDB;

