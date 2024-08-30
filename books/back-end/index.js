import { mongodbURL } from './config.js'
import mongoose from 'mongoose'
import express from 'express'
import bookRouter from './routes/booksRoute.js'
import cors from 'cors'

//********************************************************************
// L'application démare un serveur et écoute le port 3000 à la recherche de connection
//********************************************************************
const app = express()
const port = 3000

app.use(cors())
app.use(express.json()) // Permettre à Express de parser les json dans les requêtes POST

// L'application répond "Hello, Express" aux demandes adressées à l'URL racine (/) - (requête HTTP GET)
app.get('/', (req, res) => {
  res.send('Hello, Express')
})
//====================================================================

// Spécifier le chemin (la route - /books) auquel bookRouter sera appliqué
app.use('/books', bookRouter)

//********************************************************************
// Connecter Mongoose à Mongodb
//********************************************************************
mongoose.connect(mongodbURL).then(() => {
  console.log('connecté à la base de donnée')
})
//====================================================================

//********************************************************************
// Démarrer le serveur web HTTP et faire en sorte que app écoute les requêtes entrantes sur ce port
//********************************************************************
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
