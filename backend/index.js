require("dotenv").config()

const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

// Routes
const userRoute = require("./routes/userRoute")

const app = express();

app.use('/user', userRoute)
app.use(express.json({limit: "30mb", extended: true})); // replace bodyParser
app.use(express.urlencoded({limit: "30mb", extended: true})); // replace bodyParser
app.use(cors());

const URL = "mongodb+srv://cyiwei1998:cyiwei1998@prepcluster.jmznftw.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(URL, {
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server has started at port 5000");
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