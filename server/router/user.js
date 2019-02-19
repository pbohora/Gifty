'use strict'
const { User, validationUser } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
require('dotenv').config()



router.get('/', async (req, res) => {
    const user = await User.find({},{email: 0});  
    res.send(user)

})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).send(' The user of given is not found');
    const eachToSend = _.pick(user, ["username", "email", "_id"]);
    res.send(eachToSend);

})


router.post('/', async (req, res) => {

    const { error } = validationUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let userbyEmail = await User.findOne({ email: req.body.email })
    if (userbyEmail) return res.status(400).send('email already used')

    let userbyUsername = await User.findOne({ username: req.body.username })
    if (userbyUsername) return res.status(400).send('username already used')

    const salt = await bcrypt.genSalt(10);
    user = new User(_.pick(req.body, ['username', 'email', 'isAdmin', 'password']));
    user.password = await bcrypt.hash(user.password, salt);
    console.log(user);

    await user.save();

    const token = await user.token();
    console.log(token);

    console.log(' I am here');


    const reply = _.pick(user, ['_id', 'username', 'email']);
    console.log(reply);


    res.header('x-auth-token', token);
    res.send(reply)

    // let user =await User.find({email: req.body.email})
    // console.log(req.body.email);

    // res.send(user);
})




module.exports = router;




