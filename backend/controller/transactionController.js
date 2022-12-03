const mongoose = require('mongoose');
const {Transaction} = require('../models/Schema')

// const addTransaction = async (req,res) => {
//     try {
//         //TODO
        
//     }

//     catch (err) {
//         //TODO
//     }
// }

const getTransaction = async (req,res) => {
    try {
        const data = await Transaction.find()
        // console.log(data)
        return res.status(201).json({success: true, data});
        
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}



module.exports = { getTransaction }