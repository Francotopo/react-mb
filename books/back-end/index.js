import { mongodbURL } from './config.js'
import mongoose from 'mongoose'
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, Express')
})

mongoose.connect(mongodbURL).then(() => {
  console.log('connecté à la base de donnée')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
