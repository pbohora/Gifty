import { User, validationUser } from "../models/user";
const express=require('express');
const router=express.Router();



router.get('/',async (req,res)=>{
    const users=await User.find();
    res.send(users);
})

router.get('/:id',async (req,res)=>{
    const user=await User.find({ _id: req.params.id});
    if (!user) return res.status(400).send(' The user of given is not found');
    res.send(user);
})


router.post('/',async (req,res)=>{

    const {error}= validationUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user =await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('email already used')

    let user =await User.findOne({username: req.body.username})
    if(user) return res.status(400).send('username already used')

    
})