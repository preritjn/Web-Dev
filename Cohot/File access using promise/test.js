const fs = require("fs")

function test() {
  return new Promise(function (resolve, reject) {
    fs.readFile("./Test2/styles.css", "utf8",(err, data) => {
      resolve(data)
    })
  })
}

function print(val) {
  console.log(val)
}

test().then(print)