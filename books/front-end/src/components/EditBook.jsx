import { Link, useParams } from 'react-router-dom'
import Form from './Form'
import { useEffect } from 'react'
import { enqueueSnackbar } from 'notistack'
import axios from 'axios'
import Button from './Button'

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
  path,
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
      <div className="flex justify-center mt-10 mb-6">
        <h2 className="text-slate-400 font-medium text-lg">Edition d&apos;un livre</h2>
      </div>
      <Link to="/" className="flex justify-center">
        <Button className="text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 drop-shadow-md">
          Retour page d&apos;accueil
        </Button>
      </Link>

      <Form
        title={title}
        author={author}
        publishYear={publishYear}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setPublishYear={setPublishYear}
        editBook={editBook}
        _id={_id}
        path={path}
      />

      {/* <Button onClick={(e) => editBook(e, _id)} className="">
        Enregistrer
      </Button> */}

      {/* <button onClick={(e) => editBook(e, _id)}>Enregistrer</button> */}
    </div>
  )
}
