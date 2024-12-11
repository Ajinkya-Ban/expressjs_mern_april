const path = require('path');

const getIndexPage = (req,res)=>
{
    res.sendFile(path.join(__dirname,"../public/index.html")); 
}

const adduser = (req,res)=>{
    {
        const {inputdata} = req.body;
        res.json(
            {
               success:true,
               message:`Welcome to expressJS ${inputdata}` 
            }
        )
    
    }
}
module.exports = {getIndexPage, adduser};