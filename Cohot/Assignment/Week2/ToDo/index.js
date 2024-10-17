const express = require("express")
const fs = require("fs")
const port = 3000
const app = express()

app.use(express.json())

app.get("/todos", (req, res) => {
  let todos = ""
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if(err) 
      res.status(500).send("Internal Server Error")
    JSON.parse(data).forEach((element) => {
      todos += `<p><b>${element.title}</b></p>`
      todos += `<p>${element.description}</p>`
    })
    res.send(todos)
  })
})

let todo = {
  'id': null,
  'title': "",
  'description': "",
  'isCompleted': false
}

app.get("/todos/:id", (req, res) => {
  let todo = ""
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if(err)
      res.status(500).send("Internal Server Error")
    JSON.parse(data).forEach((element) => {
      if(element.id == req.params.id)
        todo = element.title + " " + element.description
    })
    if(todo == "")
      res.status(404).send("Not Found")
    else res.send(todo)
  })
})

app.post("/todos", (req, res) => {
  fs.readFile('./todos.json','utf-8',(err,data) => {
    if(err)
      res.status(500).send("Internal Server Error")
    let todos = JSON.parse(data)
    todo.id = todos[todos.length - 1].id + 1
    todo.title = req.body.title
    todo.description = req.body.description
    todos.push(todo)
    fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
      if(err)
        res.status(500).send("Internal Server Error")
      res.send(todo)
    })
  })
})

app.put('/todos/:id',(req,res) => {
  fs.readFile('./todos.json','utf-8',(err,data) => {
    if(err)
      res.status(500).send('Internal Server Error')
    let todos = JSON.parse(data)
    let index = todos.findIndex((element) => element.id == req.params.id)
    console.log(index)
    console.log(todos[index])
    if(req.body.title !== "" )
      todos[index].title = req.body.title
    if(req.body.description !== "")
      todos[index].description = req.body.description
    if(req.body.isCompleted != null)
      todos[index].isCompleted = req.body.isCompleted
    fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
      if(err)
        res.status(500).send("Internal Server Error")
      res.send(todo)
    })
  })
})

app.delete('/todos/:id',(req,res) => {
  fs.readFile('./todos.json','utf-8',(err,data) => {
    if(err)
      res.status(500).send('Internal Server Error')
    let todos = JSON.parse(data)
    let index = todos.findIndex((element) => element.id == req.params.id)
    if(index == -1)
      res.status(404).send('Not Found')
    todos.splice(index,1)
    fs.writeFile('./todos.json',JSON.stringify(todos),(err) => {
      if(err)
        res.status(500).send("Internal Server Error")
      res.send({})
    })
  })
})

app.all('*',(req,res) => {
  res.status(404).send('Not Found')
})

app.listen(port, () => {
  console.log(`listening to the port ${port}`)
})
