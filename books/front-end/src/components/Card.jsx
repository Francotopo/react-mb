import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export default function Card({ bookList, handleDelete }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
        {bookList.map((book) => {
          return (
            <div
              key={book._id}
              className="flex flex-col h-52 p-6 border border-gray-200 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-medium text-slate-700 mb-4">{book.title}</h3>
              <p className="font-sans text-base font-normal mb-2">{book.author}</p>
              <p className="text-slate-500 text-sm">{book.publishYear}</p>
              <div className="mt-auto flex justify-around ">
                <Link to={`/editbook/${book._id}`} className="">
                  <FaEdit className="  text-lg text-green-600 hover:text-green-500 " />
                </Link>
                <button onClick={() => handleDelete(book._id)}>
                  <FaTrashAlt className="text-red-700 hover:text-red-500 text-lg " />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
  