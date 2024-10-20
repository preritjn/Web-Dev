const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const port = 3000

const allUsers = [
    {
        username: 'prerit',
        password: '1234',
        extraData: '2102040011',
        name: 'Prerit'
    },
    {
        username: 'anshu',
        password: '12345',
        extraData: '2102040008',
        name: 'Anshu'
    },
    {
        username: 'harish',
        password: '123456',
        extraData: '2102041061',
        name: 'Harish'
    },
    {
        username: 'nikunj',
        password: '1234567',
        extraData: '2102040003',
        name: 'Nikunj'
    }    
]

const app = express()
app.use(express.json())

const userExist = (username,password) => {
    return allUsers.find((data) => data.username === username && data.password === password)
}

app.post('/signin',(req,res) => {
    const { username, password } = req.body
    if(!userExist(username,password))
        return res.status(401).send('Invalid username or password')
    const extraData = allUsers.find((data) => data.username === username).extraData    
    const token = jwt.sign({username,extraData},process.env.JWT_KEY)
    res.json({
        token
    })
})

app.get('/user', (req,res) => {
    const token = req.headers.authorization
    try {
        const decoded = jwt.verify(token,process.env.JWT_KEY)
        const username = decoded.username
        res.json({
            user: allUsers.filter((data) => data.username === username? false : true)
        })
    }
    catch(err) {
        return res.status(401).send('Invalid token')
    }
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})