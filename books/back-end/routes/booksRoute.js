import express, { request, response } from 'express'
import { Book } from '../models/bookModel'

const router = express.Router()

// Route to save a new Book
router.post('/', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: 'Send all required filds: title, author, publishYear',
      })
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    }

    // C'est ici qu'on stocke le livre dans la base de données
    const book = await Book.create(newBook)

    return response.status(201).send(book)
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

// Route for Get All Books from database
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({})

    return response.status(200).json({
      count: books.length,
      data: books,
    })
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

// Route for Get One Book from database by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = request.params

    const book = await Book.findById(id) // C'est une fonction Mongoose

    return res.status(200).json(book)
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
})

// Route for Update a Book
router.put(':id', async (req, req) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return response.status(400).send({
        message: 'Send all require fileds: title, author, publishYear',
      })
    }

    const { id } = request.params

    const result = await Book.findByIdAndUpdate(id, res.body)

    if (!result) {
      return res.status(404).json({ message: 'Book not found' })
    }

    return res.status(200).send({ message: 'Book updated successfully' })
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
})

// Route for Delete a book
router.delete(':id', async (req, res) => {
  try {
    const { id } = req.params

    const result = await Book.findByIdAndDelete(id)

    if (!result) {
      return res.status(404).json({ message: 'Book not found' })
    }

    return res.status(200).send({ message: 'Book deleted successfully' })
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
})

export default router
