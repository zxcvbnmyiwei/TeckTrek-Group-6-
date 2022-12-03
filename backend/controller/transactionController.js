const mongoose = require('mongoose');
const {Transaction} = require('../models/transaction.model')

const addTransaction = async (req,res) => {
    try {
        const numID = await Transaction.find().count() + 1;
        req.body.TransactionID = numID
        const {TransactionID,ReceivingAccountID,Date,TransactionAmount,Comment} = req.body;
        const transaction = await new Transaction({TransactionID,ReceivingAccountID,Date,TransactionAmount,Comment}).save();
        return res.status(201).json({success: true, transaction});
    
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}

const getTransaction = async (req,res) => {
    try {
        const data = await Transaction.find()
        return res.status(201).json({success: true, data});
        
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}

const getTransactionbyID = async (req,res) => {
    try {
        const accountID = req.params.id;
        const data = await Transaction.find({"AccountID" : accountID})
        return res.status(201).json({success: true, data});
        
    }

    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}

const deleteTransactionbyId = async (req,res) => {
    try {
        const transactionId = req.params.id;
        Transaction.deleteOne({ "TransactionID" :  transactionId}) 
        return res.status(201).json({success: true });
    }
    catch (err) {
        return res.status(500).json({success: false, error: err});
    }
}




module.exports = { addTransaction, getTransaction, getTransactionbyID, deleteTransactionbyId}