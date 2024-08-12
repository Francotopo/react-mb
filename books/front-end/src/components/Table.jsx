import { Link } from 'react-router-dom'
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'

export default function Table({ bookList, handleDelete }) {
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
          </thead>
          <tbody>
            {bookList.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td>
                  <Link to={`/bookdetails/${book._id}`} className="detail">
                    Détails
                  </Link>
                </td>
                <td>
                  <Link to={`/editbook/${book._id}`}>
                    <MdModeEdit className="edit" />
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(book._id)}>
                    <MdDeleteForever className="delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
