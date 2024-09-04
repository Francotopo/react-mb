import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export default function Table({ bookList, handleDelete }) {
  return (
    <div>
      <table className="shadow-md min-w-60 m-auto b ">
        <thead>
          <tr>
            <th className="border border-slate-200 p-4 bg-slate-50 text-slate-400  font-semibold text-left">
              Titre
            </th>
            <th className="border border-slate-200 p-4 bg-slate-50 text-slate-400  font-semibold text-left">
              Auteur
            </th>
            <th className="border border-slate-200 p-4 bg-slate-50 text-slate-400  font-semibold text-left">
              Année
            </th>
            <th className="border border-slate-200 p-4 bg-slate-50 text-slate-400  font-semibold text-left">
              Aficher le détail
            </th>
            <th className="border border-slate-200 p-4 bg-slate-50 text-slate-400 font-semibold text-left">
              Editer
            </th>
            <th className="border border-slate-200 p-4 bg-slate-50 text-slate-400 font-semibold text-left">
              Supprimer
            </th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <tr key={book._id} className="hover:bg-slate-50">
              <td className="border border-slate-200 p-4  text-slate-700 ">
                {book.title}
              </td>
              <td className="border border-slate-200 p-4 text-slate-700">
                {book.author}
              </td>
              <td className="border border-slate-200 p-4 text-slate-700">
                {book.publishYear}
              </td>
              <td className="border border-slate-200 p-4 text-slate-700 text-center hover:text-slate-400">
                <Link to={`/bookdetails/${book._id}`}>Détails</Link>
              </td>

              <td className=" border border-slate-200">
                <Link
                  to={`/editbook/${book._id}`}
                  className="flex justify-center items-center h-12"
                >
                  <FaEdit className=" text-green-600 hover:text-green-500 text-lg" />
                </Link>
              </td>

              <td
                className="border border-slate-200 text-center 
               "
              >
                <button
                  onClick={() => handleDelete(book._id)}
                  className="w-full h-10 flex justify-center items-center"
                >
                  <FaTrashAlt className="  text-red-700 hover:text-red-500 text-lg " />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
