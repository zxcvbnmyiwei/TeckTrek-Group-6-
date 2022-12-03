const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    TransactionID: Number,
    AccountID: Number,
    ReceivingAccountID: Number,
    Date: Date,
    TransactionAmount: Number,
    Comment: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);


module.exports = {Transaction};
