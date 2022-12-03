const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    TransactionID: {type: Number, required: true},
    AccountID: {type: Number, required: true},
    ReceivingAccountID: {type: Number, required: true},
    Date: {type: Date, required: true},
    TransactionAmount: {type: Number, required: true},
    Comment: {type: String},
}, {
    timestamps: true,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {Transaction};

