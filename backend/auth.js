require("dotenv").config()

const express = require("express")
const cors = require("cors")
//const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

// Routes


//User
const userRoute = require("./routes/userRoute");
const { User } = require("./models/Schema");

//Transaction
// const transactionRoute = require("./routes/transactionRoute");
// const { Transaction } = require("./models/transaction.model");

const app = express();

app.use('/user', userRoute)
// app.use('/transactions', transactionRoute)
app.use(express.json({limit: "30mb", extended: true})); // replace bodyParser
app.use(express.urlencoded({limit: "30mb", extended: true})); // replace bodyParser
app.use(cors());

const userDB = [{username : "Kyle", password : "Kyle"}]
const { getUser } = require("./controller/userController")


const URL = "mongodb+srv://dbstechtrek:dbstechtrek@cluster0.axjcazv.mongodb.net/?retryWrites=true&w=majority"

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

async function userLogin(req,res) {
    const username = req.body.username
    const password = req.body.password
    const selectedUser = await User.find({"Username":username})
    if (selectedUser && selectedUser[0].Password == password)  {
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