const express = require('express')
const zod = require('zod')

const app = express()

app.use(express.json())

const schema = zod.array(zod.number().min(4))
console.log(schema.safeParse([4,4,4,4]))

app.post('/',(req,res) => {
    const kidneys = req.body.kidneys
    const result = schema.parse(kidneys)
    const result2 = schema.safeParse(kidneys)
    res.send({
        result,
        result2
    })
})


app.listen(3000, () => {
    console.log('listening')
})