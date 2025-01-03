const path = require('path');
const ContactModel = require("../models/contactModel");



const saveContact = async (req,res)=>{
    try {
        const {firstname,lastname,mobile,email,message} = req.body;
        const newContact = await ContactModel.create({
            firstname,lastname,mobile,email,message
        });
        res.status(201).json({
            message:"success",
            newContact
        });

    } catch (error) {
        console.log(`Error in connection: ${error}`);
        res.status(400).json({
            message:false,
            
        });
    }

}

module.exports = {saveContact};
