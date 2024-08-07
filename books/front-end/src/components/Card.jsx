import { Link } from 'react-router-dom'
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'

export default function Card({ bookList, handleDelete }) {
  return (
    <div className="card-container">
      {bookList.map((book) => {
        return (
          <div key={book.id} className="card">
            <h3>{book.title}</h3>
            <p>Auteur : {book.author}</p>
            <p className="year">Année de parution : {book.year}</p>
            <div className="container-links-card">
              <Link to={`/editbook/${book.id}`}>
                <MdModeEdit className="edit" />
              </Link>
              <button onClick={() => handleDelete(book.id)}>
                <MdDeleteForever className="delete" />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
