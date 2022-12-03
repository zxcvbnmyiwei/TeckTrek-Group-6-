const mongoose = require('mongoose');
const {Transaction} = require('../models/transaction.model')

const addTransaction = async (req,res) => {
    try {
        const {receivingid,date,transactionamt,comment} = req.body;
        const transaction = await new Transaction({receivingid,date,transactionamt,comment}).save();

        return res.status(201).json({success: true, user});
    
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}

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



module.exports = { addTransaction, getTransaction }