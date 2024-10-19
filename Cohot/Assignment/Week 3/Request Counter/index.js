const express = require('express')

const app = express()
const port = 3000
var count = 0

app.use((req,res,next) => {
    count++
    next()
})

app.get('/',(req,res) => {
    console.log(count)
    res.send('get method triggered')
})

app.post('/',(req,res) => {
    console.log(count)
    res.send('post method triggered')
})

app.get('/getCount',(req,res) => {
    console.log(count)
    res.json({count})
})

app.listen(port,() => {
    console.log('listening')    
})