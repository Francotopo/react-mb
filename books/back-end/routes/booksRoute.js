import express from 'express'
import { Book } from '../models/bookModel.js'

const bookRouter = express.Router()

//********************************************************************
// Route pour créer un nouveau book
//********************************************************************
bookRouter.post('/', async (request, response) => {
  try {
    if (!request.body.title || !request.body.author || !request.body.publishYear) {
      return response.status(400).send({
        // 400 : réponse d'erreur du client
        message: 'Send all required fields: title, author, publishYear',
      })
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    }

    /* Stocker le book dans la base de données avec create(),
        par le Schema Book créé avec mongoose */
    const book = await Book.create(newBook)

    return response.status(201).send(book) // 201 : réponse reussie (successfull)
    // et a conduit à la création d'une ressource
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message }) // 500 : réponse d'erreur interne du serveur
  }
})
//====================================================================

//********************************************************************
// Route pour lire tous les books de la base de données
//********************************************************************
bookRouter.get('/', async (request, response) => {
  try {
    const books = await Book.find({}) // Ne rien définir à find pour tout trouver

    return response.status(200).json({
      // 200 : réponse reussie (successfull), requette réussie
      count: books.length,
      data: books,
    })
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})
// ===================================================================

//********************************************************************
// Route pour lire un book de la base de données
//********************************************************************
bookRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const book = await Book.findById(id) // findById() est une fonction Mongoose

    return response.status(200).json(book)
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})
// ===================================================================

//********************************************************************
// Route pour mettre à jour un book dans la base de données
//********************************************************************
bookRouter.put('/:id', async (request, response) => {
  try {
    if (!request.body.title || !request.body.author || !request.body.publishYear) {
      return response.status(400).send({
        message: 'Send all require fileds: title, author, publishYear',
      })
    }

    const { id } = request.params

    const result = await Book.findByIdAndUpdate(id, response.body) // findByIdAndUpdate() est une fonction mongoose

    if (!result) {
      return response.status(404).json({ message: 'Book not found' }) // 404 : réponse d'erreur du client, le serveur ne peut pas trouver la ressource demandée
    }

    return response.status(200).send({ message: 'Book updated successfully' })
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})
// ===================================================================

//********************************************************************
// Route pour supprimer un book dans la base de données
//********************************************************************
bookRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const result = await Book.findByIdAndDelete(id) // findByIdAndDelete est une fonction mongoose

    if (!result) {
      return response.status(404).json({ message: 'Book not found' })
    }

    return response.status(200).send({ message: 'Book deleted successfully' })
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})
// ===================================================================

export default bookRouter
