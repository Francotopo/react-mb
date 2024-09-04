import { Link } from 'react-router-dom'
import Form from './Form'
import { useEffect } from 'react'
import { enqueueSnackbar } from 'notistack'
import axios from 'axios'
import Button from './Button'

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
  path
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
      <div className="flex justify-center mt-10 mb-6">
        <h2 className="text-slate-400 font-medium text-lg">Ajouter un livre</h2>
      </div>
      <Link to="/" className="flex justify-center">
        <Button className="w-52 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 drop-shadow-md">
          Annuler
        </Button>
      </Link>
      <Form
        title={title}
        author={author}
        publishYear={publishYear}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setPublishYear={setPublishYear}
        addBook={addBook}
        path={path}
      />

      {}
      {/* <Button onClick={addBook}>Ajouter</Button> */}
    </div>
  )
}
