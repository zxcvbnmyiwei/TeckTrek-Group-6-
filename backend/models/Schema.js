const mongoose = require("mongoose")

// User
const userSchema = mongoose.Schema({
    UserID: Number,
    Username: String,
    Password: String,
    Firstname: String,
    Lastname: String,
    Email: String,
    Address: String,
    OptIntoPhyStatements: Number,
})
const User = mongoose.model("User", userSchema)

// ScheduledTransaction
const transactionSchema = mongoose.Schema({
    TransactionID: Number,
    AccountID: Number,
    ReceivingAccountID: Number,
    Date: Date,
    TransactionAmount: Number,
    Comment: String,
})
const Transaction = mongoose.model("Transaction", transactionSchema)


module.exports = {User, Transaction}