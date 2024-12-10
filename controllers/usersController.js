const getUser = (req,res)=>
{
 res.send("<h1>This is simple express JS application</h1>");
    
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
module.exports = {getUser, adduser};