const mongoose = require('mongoose');
const {Transaction} = require('../models/transaction.model')

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


/* DELETE TRANSACTIONS */
const deleteTransaction = async (req,res) => {
    try {
        const data = await Transaction.find()

        // console.log(data)
        return res.status(201).json({success: true, data});
        
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}


module.exports = { getTransaction, deleteTransaction }


