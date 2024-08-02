import { Link } from 'react-router-dom'
import Form from './Form'
import { useEffect } from 'react'

export default function AddBook({
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
  function addBook(e) {
    e.preventDefault()
    if (title.trim() !== '' && author.trim() !== '' && year.trim() !== '') {
      setBookList([...bookList, { id: bookList.length + 1, title, author, year }])
      navigate('/')
    } else {
      console.log('remplir !!!')
    }
    setTitle('')
    setAuthor('')
    setYear('')
  }

  useEffect(() => {
    setTitle('')
    setAuthor('')
    setYear('')
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
        year={year}
        addBook={addBook}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setYear={setYear}
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
