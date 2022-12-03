
const mongoose = require('mongoose');
const {User} = require('../models/Schema')

const addUser = async (req,res) => {
    try {
        const {username,password,Firstname,email} = req.body;
        const user = await new User({username,password,Firstname,email}).save();

        return res.status(201).json({success: true, user});
        
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}

const getUser = async (req,res) => {
    try {
        const data = await User.find()
        // console.log(data)
        return res.status(201).json({success: true, data});
        
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}



module.exports = { addUser, getUser }