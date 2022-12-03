
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
        return res.status(201).json({success: true, data});
        
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}


const getSelectedUser = async (req,res) => {
    try {
        const username = req.params.username
        const data = await User.find({"Username":username})
        return res.status(201).json({success: true, "UserID": data[0].UserID});
        
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}




module.exports = { addUser, getUser , getSelectedUser}