const Users=require("../models/studentModel")
const insertUser= async(req,res)=>{
       const user=Users.create(req.body)
       res.send({user})
}
const getUser= async(req,res)=>{
       const user=await Users.find()
       res.send({user})
}
const updateUser = async (req,res)=>{
       const name= req.params.id;
        let user =await Users.findByIdAndUpdate({name:name},req.body,{new:true})
        res.send({user})
}
const deleteUser=async(req,res)=>{
        const name=req.params.name;
        let user=await Users.findOneAndDelete({name:name});
        res.send({user})}


module.exports={insertUser,getUser,updateUser,deleteUser};
