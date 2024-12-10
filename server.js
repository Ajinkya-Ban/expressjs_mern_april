const express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//var userRouter = require('./routes/usersRoutes');

const app = express();

//middleware
app.use(morgan("dev"));

//app.use(express.json());

//or you can also use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//define the route/endpoint
app.use("/api/v1",require('./routes/usersRoutes'));



const port = 7878;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});