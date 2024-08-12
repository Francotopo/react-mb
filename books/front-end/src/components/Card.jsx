import { Link } from 'react-router-dom'
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'

export default function Card({ bookList, handleDelete }) {
  return (
    <div className="card-container">
      {bookList.map((book) => {
        return (
          <div key={book._id} className="card">
            <h3>{book.title}</h3>
            <p>Auteur : {book.author}</p>
            <p className="year">Année de parution : {book.publishYear}</p>
            <div className="container-links-card">
              <Link to={`/editbook/${book._id}`}>
                <MdModeEdit className="edit" />
              </Link>
              <button onClick={() => handleDelete(book._id)}>
                <MdDeleteForever className="delete" />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
