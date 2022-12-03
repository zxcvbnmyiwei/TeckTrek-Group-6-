require("dotenv").config()

const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const app = express();

app.use('/user', userRoute)
app.use(express.json({limit: "30mb", extended: true})); // replace bodyParser
app.use(express.urlencoded({limit: "30mb", extended: true})); // replace bodyParser
app.use(cors());

const URL = "mongodb+srv://dbstecktrek:dbstecktrek@prepcluster.jmznftw.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(URL, {
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(4000, () => {
      console.log("Server has started at port 4000");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.post("/login" , userLogin)

function userLogin(req,res) {
    const username = req.body.username
    const password = req.body.password
    const selectedUser = userDB.find(item => item.username === username)
    if (selectedUser && selectedUser.password === password)  {
      console.log("Generating Token....")
      const user = {name : username}
      const accessToken = generateAccessToken(user)
      console.log("Token: ", accessToken)
      res.status(200).json({accessToken: accessToken})
    }
    else {
      res.sendStatus(401)
    }
}

function generateAccessToken(user){
    return jwt.sign(user,process.env.JWT_KEY, {expiresIn: "86400s"})
}