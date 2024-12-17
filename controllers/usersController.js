const path = require('path');
const UserModel = require("../models/userModels");

const getIndexPage = (req,res)=>
{
    res.sendFile(path.join(__dirname,"../public/index.html")); 
}


//CREATE NEW  USER 
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

const getAllUsers = async(req,res)=>{
    try {
        const users = await UserModel.find({});
        res.status(200).json({
            suceess:true,
            Total_Users:users.length,
            users
        });
        
    } catch (error) {
        res.status(400).json({
            success:false,
            msg:"getting error in display all users",
            error:error.message
        });
        
    }
}

const getSingleUser = async(req,res) =>{

    try {
        const user = await UserModel.findById(req.params.id);
        if(user)
        {
            res.status(200).json({
                suceess:true,
                user
            });
        }
        else
        {
            res.status(400).send("User not found");
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            msg:"getting error in single user",
            error: error.message
        });
        
    }

}
module.exports = {getIndexPage, createUser, getAllUsers,getSingleUser};