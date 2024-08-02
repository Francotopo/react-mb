import { Link } from 'react-router-dom'
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
import { useState } from 'react'

export default function Home({ bookList, setBookList }) {
  const [bookDetails, setBookDetails] = useState('')

  function onclickBookDetails(id) {
    const bookDetails = bookList.filter((book) => book.id === id)
    setBookDetails(bookDetails)
  }

  function handleDelete(id) {
    const newList = bookList.filter((book) => book.id !== id)
    setBookList(newList)
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
              <th>Supprimer</th>
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
                <td>
                  <Link onClick={() => handleDelete(book.id)}>
                    <MdDeleteForever className="delete" />
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
