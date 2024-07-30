import { Link } from 'react-router-dom'
import { MdModeEdit } from 'react-icons/md'
import { useState } from 'react'

export default function Home({ bookList }) {
  const [bookDetails, setBookDetails] = useState('')

  function onclickBookDetails(id) {
    const bookDetails = bookList.filter((book) => book.id === id)
    setBookDetails(bookDetails)
  }

  return (
    <div>
      <Link to="/addbook">
        <button className="btn" style={{ marginLeft: '2rem', width: '200px' }}>
          Ajouter un livre
        </button>
      </Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Année</th>
              <th>Aficher le détail</th>
              <th>Editer</th>
            </tr>
            {bookList.map((book) => (
              <tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>
                  <Link
                    to={`/bookdetails/${book.id}`}
                    className="detail"
                    onClick={() => onclickBookDetails(book.id)}
                  >
                    Détails
                  </Link>
                </td>
                <td>
                  <Link to={`/editbook/${book.id}`}>
                    <MdModeEdit className="edit" />
                  </Link>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  )
}
