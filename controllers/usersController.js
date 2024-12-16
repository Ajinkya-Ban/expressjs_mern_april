const path = require('path');
const UserModel = require("../models/userModels");

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

const createUser = async (req, res) =>{

    try 
    {
        const {name, email, password,isActive} = req.body;
        const user = await UserModel.create({
            name,email,password,isActive
        });
        res.status(201).json({
            message:"success",
            user
        });

    } 
    catch (error) 
    {
        console.log(`Error in connection: ${error}`);
        res.status(400).json({
            message:false,
            user
        });
    }

}
module.exports = {getIndexPage, adduser, createUser};