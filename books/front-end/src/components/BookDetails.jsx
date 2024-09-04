import { Link, useParams } from 'react-router-dom'
import Button from './Button'

export default function BookDetails({ bookList }) {
  let { _id } = useParams()
  const bookDetailIndex = bookList.findIndex((book) => book._id == _id)

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 mb-9">
        <h2 className="text-slate-400 font-medium text-lg">Détails du livre</h2>
      </div>

      <div className="h-48 border border-slate-200 rounded-lg p-7 shadow-lg leading-7 text">
        <p className="font-medium text-gray-800">
          <span className="text-gray-500 font-normal">Titre : </span>
          {bookList[bookDetailIndex].title}
        </p>
        <p className="font-medium text-gray-800">
          <span className="text-gray-500 font-normal">Ecrit par : </span>
          {bookList[bookDetailIndex].author}
        </p>
        <p className="font-medium text-gray-800">
          <span className="text-gray-500 font-normal">Date de parution : </span>
          {bookList[bookDetailIndex].publishYear}
        </p>
      </div>

      <Link to="/">
        <Button className="w-52 mt-9  text-emerald-600 border-emerald-600  hover:bg-emerald-700 hover:text-emerald-100 drop-shadow-md">
          Page d&apos;accueil
        </Button>
      </Link>
    </div>
  )
}
