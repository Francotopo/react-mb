const mongodbURL =
  'mongodb+srv://pintofrancois:gUeTPpOVRUqLOwqc@cluster0.t14w6az.mongodb.net/'
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, Express')
})

mongoose.connect(mongodbURL).then(() => {
  console.log('connecté à la base de donnée')
})

app.listen(port, () => {
  console.log(`Server is running on prot ${port}`)
})

