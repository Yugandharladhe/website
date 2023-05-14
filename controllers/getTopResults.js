const Model=require("../models/model")
const getTopResults=async(req,res)=>{
    try{
        const data=await Model.find({})
        res.status(200).json({data})
    }catch(err)
    {
        console.log(err)
    }
    
}

module.exports=getTopResults