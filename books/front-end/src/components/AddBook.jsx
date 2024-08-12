import { Link } from 'react-router-dom'
import Form from './Form'
import { useEffect } from 'react'
import { enqueueSnackbar } from 'notistack'

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
      setBookList([...bookList, { _id: bookList.length + 1, title, author, publishYear }])
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
        addBook={addBook}
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
