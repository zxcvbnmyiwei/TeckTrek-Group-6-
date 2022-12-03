const mongoose = require('mongoose');
const {Transaction} = require('../models/transaction.model')

const addTransaction = async (req,res) => {
    try {
        const numID = await Transaction.find().count() + 1;
        req.body.TransactionID = numID
        // Need Account ID... 
        const {TransactionID,AccountID,ReceivingAccountID,Date,TransactionAmount,Comment} = req.body;
        const transaction = await new Transaction({TransactionID, AccountID ,ReceivingAccountID,Date,TransactionAmount,Comment}).save();

        return res.status(201).json({success: true, transaction});
    
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