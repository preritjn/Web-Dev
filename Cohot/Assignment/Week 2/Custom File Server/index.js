const fs = require('fs')
const express = require('express')
const port = 3000

const app = express()

app.use(express.json())

app.get('/files',(req,res) => {
    fs.readdir('./files',(err,data) => {
        if(err) {
            res.status(500).send('Internal Server Error')
        }
        res.json({
            files : data
        })
    })
})

app.get('/files/:file',(req,res) => {
    const fileName = req.params.file
    fs.readFile(`./files/${fileName}`,'utf-8', (err,data) => {
        if(err) {
            res.status(404).send('File not found')
        }
        res.send(data)
    })
})

app.all('*', (req, res) => {
    res.status(404).send('Route not found')
})

app.listen(port,() => {
    console.log(`listening to the port ${port}`)    
})