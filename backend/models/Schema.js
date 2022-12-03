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

const bankSchema = mongoose.Schema({
    AccountID: Number,
    UserID: Number,
    AccountType: String,
    AccountBalance: Number,
})

const Bank = mongoose.model("Bank", bankSchema)


module.exports = {User,Bank}