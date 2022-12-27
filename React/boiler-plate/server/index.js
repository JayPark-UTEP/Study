const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://JayPark:Park9285@cluster0.auri531.mongodb.net/?retryWrites=true&w=majority' 
  // {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndMondify: false}
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))



app.get('/', (req,res) => res.send('Hello World! Welcome'))

app.post('/register', (req, res) => {
  //required infor for registeration from client


  const user = new User(req.body)

  user.save((err,userInfo) => {
    
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

