require("dotenv").config()

const express = require("express")
const cors = require("cors")
// const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const app = express();

app.use(express.json({limit: "30mb", extended: true})); // replace bodyParser
app.use(express.urlencoded({limit: "30mb", extended: true})); // replace bodyParser
app.use(cors());


const URL = "mongodb+srv://dbstechtrek:dbstechtrek@cluster0.axjcazv.mongodb.net/?retryWrites=true&w=majority"

// Routes

const userRoute = require("./routes/userRoute");
const transactionRoute = require("./routes/transactionRoute");

app.use('/user', userRoute);
// User
const {addUser, getUser, getBankDetails} = require("./controller/userController");
app.post("/adduser", addUser)
app.get("/getuser", getUser)
// Transaction
const {addTransaction, getTransaction, getTransactionbyID, deleteTransaction} = require("./controller/transactionController");
app.post("/addtransaction", addTransaction)
app.get("/gettransaction", getTransaction)
app.get("/bank/:id", getBankDetails)
app.get("/transaction/:id", getTransactionbyID)
app.delete("/deleteTransaction/:TransactionID", deleteTransaction)

mongoose
  .connect(URL, {
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(5001, () => {
      console.log("Server has started at port 5001");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.replace('Bearer ', '')
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    console.log("test", err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}