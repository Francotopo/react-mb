import { Link, useParams } from 'react-router-dom'
import Form from './Form'
import { useEffect } from 'react'

export default function EditBook({
  bookList,
  setBookList,
  navigate,
  title,
  author,
  year,
  setTitle,
  setAuthor,
  setYear,
}) {
  let { id } = useParams()

  const bookToEditIndex = bookList.findIndex((book) => book.id == id)

  useEffect(() => {
    setTitle(bookList[bookToEditIndex].title)
    setAuthor(bookList[bookToEditIndex].author)
    setYear(bookList[bookToEditIndex].year)
  }, [])

  function editBook(e) {
    e.preventDefault()
    if (title.trim() !== '' && author.trim() !== '' && String(year).trim() !== '') {
      const updatedBooks = bookList.map((book) =>
        book.id == id ? { ...book, title, author, year } : book
      )
      setBookList(updatedBooks)
      navigate('/')
    } else {
      console.log('Veuillez remplir tous les champs !!!')
    }
    setTitle('')
    setAuthor('')
    setYear('')
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
        year={year}
        editBook={editBook}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setYear={setYear}
      />

      <button
        className="btn btn-add"
        style={{ display: 'block', marginTop: '30px', width: '100%' }}
        onClick={editBook}
      >
        Enregistrer
      </button>
    </div>
  )
}
