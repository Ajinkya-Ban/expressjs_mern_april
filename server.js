const express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');
const colors = require('colors');

//var userRouter = require('./routes/usersRoutes');

const app = express();

//call to database
connectDB();

//middleware
app.use(morgan("combined"));
require('dotenv').config();

//below code can be used for to set the path of public folder
app.use(express.static(path.join(__dirname,"public")));


//app.use(express.json());

//or you can also use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//define the route/endpoint
app.use("/api/v1",require('./routes/usersRoutes'));




const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`.bgRed);
});