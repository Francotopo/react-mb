import { Link } from 'react-router-dom'
import Form from './Form'
import { useEffect } from 'react'
import { enqueueSnackbar } from 'notistack'
import axios from 'axios'

export default function AddBook({
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
  function addBook(e) {
    e.preventDefault()
    if (title.trim() !== '' && author.trim() !== '' && publishYear.trim() !== '') {
      axios
        .post('http://localhost:3000/books', {
          title,
          author,
          publishYear,
        })
        // Pour récupérer la liste avec le book ajouté pour que son _id s'intègre dans le key lors du rendu avec setbook(newlist)
        .then((response) => {
          const newBook = response.data
          const newList = [...bookList, newBook]
          setBookList(newList)
        })

      enqueueSnackbar('Livre ajouté', {
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
        autoHideDuration: 4000,
        variant: 'error',
      })
    }
    setTitle('')
    setAuthor('')
    setPublishYear('')
  }

  useEffect(() => {
    setTitle('')
    setAuthor('')
    setPublishYear('')
  }, [])

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Ajouter un livre</h2>
      <div>
        <Link to="/">
          <button
            className="btn"
            style={{ display: 'block', width: '100%', alignItems: 'center' }}
          >
            Annuler
          </button>
        </Link>
      </div>
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
        onClick={addBook}
      >
        Ajouter
      </button>
    </div>
  )
}
