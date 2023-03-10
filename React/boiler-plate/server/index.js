const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require("./config/key");

app.use(bodyParser.urlencoded({extended: ture}));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI 
  // {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndMondify: false}
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))



app.get('/', (req,res) => res.send('Hello World! Welcome'))

app.post('/register', (req, res) => {
  //required info for registeration from client
  
  const user = new User(req.body)
 
  user.save((err,userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.post('/login', (req, res) => {

  //find requreset email
  user.findOne({ email: req.body.email}, (err, userInfo) => {
    return(!userInfo) {
      return res.json({
        loginSuccess: false,
        message: "No user found!"
      })
    }
  })

  //if the request email exists in DB, check password
  User.comparePassword(req.body.password, (err, isMatch) => {
    if (!isMatch)
      return res.json({loginSuccess: false, message: "Incorrect Password"})
  })

  //If the password is also correct, create token

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

