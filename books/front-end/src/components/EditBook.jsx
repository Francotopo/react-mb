import { Link, useParams } from 'react-router-dom'
import Form from './Form'
import { useEffect } from 'react'
import { enqueueSnackbar } from 'notistack'
import axios from 'axios'

export default function EditBook({
  bookList,
  setBookList,
  navigate,
  title,
  author,
  publishYear,
  setTitle,
  setAuthor,
  setPublishYear,
}) {
  let { _id } = useParams()

  const bookToEditIndex = bookList.findIndex((book) => book._id == _id)

  useEffect(() => {
    setTitle(bookList[bookToEditIndex].title)
    setAuthor(bookList[bookToEditIndex].author)
    setPublishYear(bookList[bookToEditIndex].publishYear)
  }, [])

  function editBook(e, _id) {
    e.preventDefault()

    if (
      title.trim() !== '' &&
      author.trim() !== '' &&
      String(publishYear).trim() !== ''
    ) {
      axios.put(`http://localhost:3000/books/${_id}`, {
        title,
        author,
        publishYear,
      })
      const updatedBooks = bookList.map((book) =>
        book._id == _id ? { ...book, title, author, publishYear } : book
      )
      setBookList(updatedBooks)

      enqueueSnackbar('Livre édité', {
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'left',
        },
        autoHideDuration: 2500,
        variant: 'success',
      })

      navigate('/')
    } else {
      enqueueSnackbar('Veuillez remplir tous les champs', {
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'left',
        },
        autoHideDuration: 2500,
        variant: 'error',
      })
    }
    setTitle('')
    setAuthor('')
    setPublishYear('')
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Editer un livre</h2>
      <Link to="/">
        <button
          className="btn"
          style={{ display: 'block', width: '100%', alignItems: 'center' }}
        >
          Page d'accueil
        </button>
      </Link>

      <Form
        title={title}
        author={author}
        publishYear={publishYear}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setPublishYear={setPublishYear}
      />

      <button
        className="btn btn-add"
        style={{ display: 'block', marginTop: '30px', width: '100%' }}
        onClick={(e) => editBook(e, _id)}
      >
        Enregistrer
      </button>
    </div>
  )
}
