const express = require('express')
const app = express()

app.use(express.json())

const users = [
    {
        name: 'Prerit',
        kidneys: [
            {
                healthy: false
            }
        ]
    }
]   

app.get('/',(req,res) => {
    let userKidneyData = users[0].kidneys
    let totalKidneys = users[0].kidneys.length
    let healthyKidneys = 0
    userKidneyData.forEach(kidney => {
        if(kidney.healthy){
            healthyKidneys++
        }
    })
    let unHealthyKidneys = totalKidneys - healthyKidneys
    res.json({
        userKidneyData,
        totalKidneys,
        healthyKidneys,
        unHealthyKidneys
    })
})

app.post('/',(req,res) => {
    const isHealthy = req.body.healthy
    if(isHealthy) {
        users[0].kidneys.push({
            healthy: true
        })
    }
    else {
        users[0].kidneys.push({
            healthy: false
        })
    }
    res.json({
        msg : 'done'
    })
})

app.put('/',(req,res) => {
    let userKidneyData = users[0].kidneys
    userKidneyData.forEach(kidney => {
        kidney.healthy = true
    })
    res.json({})
})

app.delete('/',(req,res) => {
    let newKidneys = []
    users[0].kidneys.forEach(kidney => {
        if(kidney.healthy)
            newKidneys.push(kidney)
    })
    users[0].kidneys = newKidneys
    if(users[0].kidneys.length == 0)
        res.status(411).json({
            msg: 'No unhealthy kidneys found'
        })
    res.json({})
})

app.listen(3000, () => {
    console.log('listening')    
})