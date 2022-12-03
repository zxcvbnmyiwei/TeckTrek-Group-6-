const mongoose = require("mongoose")

// User
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    Firstname: String,
    email: String,
})
const User = mongoose.model("User", userSchema)


module.exports = {User}