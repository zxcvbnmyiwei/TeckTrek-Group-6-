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

module.exports = {User}