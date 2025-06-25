const users = require('../models/userModels')
const bcrypt = require('bcrypt')


exports.getRoute =async(req,res)=>{
    const userData = await users.find();
    res.status(201).json({data :userData})
    
    // res.send('Get route is working')
}
exports.getRouteById = async(req,res)=>{
    const userData = await users.findById(req.params.id);
  res.status(201).json({userData})
}
exports.signupRoute = async (req,res)=>{
    const{username,password} = req.body;
    const exist = await users.findOne({username});
    if(exist) return res.status(404).json({
        message:"User already exist"
    })
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new users({username,password:hashedPassword})
    await newUser.save();
    res.status(201).json({user:newUser})
   // res.send('POST route is running')
}
exports.loginRoute = async(req,res)=>{
    const {username,password}= req.body;
    const userData = await users.findOne({username});
    if(!userData) return res.status(404).json({
        message:"User not found"
    })
    const valid = await bcrypt.compare(password,userData.password)
    if(valid) return res.status(201).json({message:"login successful"})
        res.status(404).json({message:"password invalid"})
}
exports.putRoute = async (req,res)=>{
    const {username,password} = req.body;
    const update = await users.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!update) return res.status(404).json({message:"user not exist"})
    res.status(201).json({update})
//res.send('PUT route is running')
}
exports.deleteRoute = async (req,res)=>{
    const deleteData = await users.findByIdAndDelete(req.params.id)
   if(!deleteData) return res.status(404).json({message:"user not exist"})
    res.status(201).json({message:"user deleted successfully"})
// res.send('DELETE route is running')
}