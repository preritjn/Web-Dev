const express = require('express')
const port = 3000

const app = express()
var errorCounter = 0

app.get('/user', (req, res) => {
  throw new Error("User not found")
  res.status(200).json({ name: 'john' })
})
  
app.post('/user', (req, res) => {
  res.status(200).json({ msg: 'created dummy user' })
})

app.get('/count',(req,res) => {
    res.json({errorCounter}) 
})

app.use((err,req,res,next) => {
    errorCounter++
    next()
})

app.listen(port,() => {
  console.log(`listening to the port ${port}`)  
})