import { useState } from 'react'
import { enqueueSnackbar } from 'notistack'
import Table from './Table'
import Card from './Card'

export default function Home({ bookList, setBookList }) {
  const [bookDetails, setBookDetails] = useState(null)
  const [showBooks, setShowBooks] = useState('table')

  function handleBookDetailsClick(id) {
    const bookDetails = bookList.find((book) => book.id === id)
    setBookDetails(bookDetails)
  }

  function handleDelete(id) {
    const newList = bookList.filter((book) => book.id !== id)
    setBookList(newList)
    enqueueSnackbar('Livre supprimé', {
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'left',
      },
      autoHideDuration: 2500,
      variant: 'success',
    })
  }

  function handleViewChange(view) {
    setShowBooks(view)
  }

  return (
    <div>
      <div className="btn-container">
        <button className="btn" onClick={() => handleViewChange('card')}>
          Carte
        </button>
        <button className="btn" onClick={() => handleViewChange('table')}>
          Tableau
        </button>
      </div>
      {showBooks === 'table' ? (
        <Table
          bookList={bookList}
          onBookDetailsClick={handleBookDetailsClick}
          handleDelete={handleDelete}
        />
      ) : (
        <Card bookList={bookList} handleDelete={handleDelete} />
      )}
    </div>
  )
}
